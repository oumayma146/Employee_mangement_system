<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FileUploadRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

class FileController extends Controller

{

    public function __construct()
    {
        $this->middleware('permission:upload files')->only('upload');
        $this->middleware('permission:create folders')->only('createFolder');
        $this->middleware('permission:view files')->only('download');
        $this->middleware('permission:view folders')->only('listFolders');
    }
    public function upload(FileUploadRequest $request)
    {
        $user = Auth::user();
        $folder = $request->input('folder');
        $file = $request->file('file');
        $date = now()->format('Y-m-d');
        $filename = Str::random(10) . '.' . $file->getClientOriginalExtension();

        $path = $file->storeAs("uploads/{$user->id}/{$date}/{$folder}", $filename);

        return response()->json(['path' => $path], 201);
    }

    public function createFolder(Request $request)
    {
        $request->validate([
            'folder' => 'required|string|max:255'
        ]);

        $user = Auth::user();
        $folder = $request->input('folder');
        $basePath = "uploads/{$user->id}";

        if ($user->can('create folders')) {
            $fullPath = "{$basePath}/{$folder}";
            if (!Storage::exists($fullPath)) {
                Storage::makeDirectory($fullPath);
                return response()->json(['message' => 'Folder created successfully'], 201);
            }

            return response()->json(['message' => 'Folder already exists'], 400);
        }

        return response()->json(['message' => 'Unauthorized'], 403);
    }
    public function download($file)
    {
        $user = Auth::user();
        $path = "uploads/{$user->id}/{$file}";

        if (Storage::exists($path)) {
            return Storage::download($path);
        }

        return response()->json(['message' => 'File not found'], 404);
    }

    public function listFolders(Request $request)
    {
        $user = Auth::user();
        $basePath = "uploads/{$user->id}";
        $folders = Storage::directories($basePath);

        return response()->json(['folders' => $folders]);
    }
    public function generateDownloadLink(Request $request, $file)
    {
        $user = Auth::user();
        $path = "uploads/{$user->id}/{$file}";

        if (Storage::exists($path)) {
            // Generate a temporary URL for 24 hours (1440 minutes)
            $temporaryUrl = Storage::temporaryUrl($path, now()->addMinutes(1440));
            return response()->json(['url' => $temporaryUrl]);
        }

        return response()->json(['message' => 'File not found'], 404);
    }
}
