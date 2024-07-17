<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FileUploadRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'file' => 'required|file|mimes:png,jpeg,svg,pdf,docx,mp4,mkv|max:51200', // 50MB max size
            'folder' => 'required|string|max:255'
        ];
    }
}
