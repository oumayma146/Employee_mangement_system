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

  
    public function upload(FileUploadRequest $request)
    {
        $user = Auth::user();
        $folder = $request->input('folder');
        $file = $request->file('file');
        $date = now()->format('Y-m-d');
        $filename = $file->getClientOriginalName();


        $path = $file->storeAs("uploads/{$user->id}/{$date}/{$folder}", $filename);

        return response()->json(['path' => $path], 201);
    }

    public function createFolder(Request $request)
    {
        $request->validate([
            'folder' => 'required|string|max:255'
        ]);

        $user = Auth::user();
        $date = now()->format('Y-m-d');
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
        $path = "uploads/{$user->id}/{$date}/{$file}";

        if (Storage::exists($path)) {
            return Storage::download($path);
        }

        return response()->json(['message' => 'File not found'], 404);
    }

    public function listFolders(Request $request)
    {
        $user = Auth::user();
        $basePath = "uploads/{$user->id}";
        $folders = Storage::allDirectories($basePath);
        $files = Storage::allFiles($basePath);
    
        $result = [];
    
        foreach ($folders as $folder) {
            $folderFiles = array_filter($files, function($file) use ($folder) {
                return strpos($file, $folder) === 0;
            });
    
            $folderData = [
                'name' => str_replace("{$basePath}/", '', $folder),
                'path' => $folder,
                'files' => []
            ];
    
            foreach ($folderFiles as $file) {
                $folderData['files'][] = [
                    'name' => basename($file),
                    'path' => $file,
                    'size' => Storage::size($file),
                    'last_modified' => Storage::lastModified($file),
                ];
            }
    
            $result[] = $folderData;
        }
    
       
        $rootFiles = array_filter($files, function($file) use ($basePath) {
            return strpos($file, "{$basePath}/") === 0 && substr_count($file, '/') === substr_count($basePath, '/');
        });
    
        $rootFolderData = [
            'name' => 'root',
            'path' => $basePath,
            'files' => []
        ];
    
        foreach ($rootFiles as $file) {
            $rootFolderData['files'][] = [
                'name' => basename($file),
                'path' => $file,
                'size' => Storage::size($file),
                'last_modified' => Storage::lastModified($file),
            ];
        }
    
        if (count($rootFolderData['files']) > 0) {
            $result[] = $rootFolderData;
        }
    
        return response()->json(['folders' => $result]);
    }
    public function listAllFolders(Request $request)
{
   
    $baseDir = "uploads";
    $userDirs = Storage::directories($baseDir);
    
    $result = [];

    foreach ($userDirs as $userDir) {
        $userId = basename($userDir);

        $folders = Storage::allDirectories($userDir);
        $files = Storage::allFiles($userDir);

        foreach ($folders as $folder) {
            $folderFiles = array_filter($files, function($file) use ($folder) {
                return strpos($file, $folder) === 0;
            });

            $folderData = [
                'name' => str_replace("{$userDir}/", '', $folder),
                'path' => $folder,
                'files' => []
            ];

            foreach ($folderFiles as $file) {
                $folderData['files'][] = [
                    'name' => basename($file),
                    'path' => $file,
                    'size' => Storage::size($file),
                    'last_modified' => Storage::lastModified($file),
                ];
            }

            $result[] = $folderData;
        }

        // Process files in the root directory of the user
        $rootFiles = array_filter($files, function($file) use ($userDir) {
            return strpos($file, "{$userDir}/") === 0 && substr_count($file, '/') === substr_count($userDir, '/');
        });

        $rootFolderData = [
            'name' => 'root',
            'path' => $userDir,
            'files' => []
        ];

        foreach ($rootFiles as $file) {
            $rootFolderData['files'][] = [
                'name' => basename($file),
                'path' => $file,
                'size' => Storage::size($file),
                'last_modified' => Storage::lastModified($file),
            ];
        }

        if (count($rootFolderData['files']) > 0) {
            $result[] = $rootFolderData;
        }
    }

    return response()->json(['folders' => $result]);
}
    public function generateDownloadLink(Request $request, $file)
    {
        $user = Auth::user();
        $path = $file;
    
        if (Storage::exists($path)) {
            $temporaryUrl = Storage::temporaryUrl($path, now()->addMinutes(1440));
            return response()->json(['url' => $temporaryUrl]);
        }
    
        return response()->json(['message' => 'File not found'], 404);
    }
}
