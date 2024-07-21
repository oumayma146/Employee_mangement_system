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
            'file' => 'required|file|mimes:html,php,js,jsx,txt,xml,css,c,cpp,java,cs,py,json,ppt,pptx,docx,png,jpg,jpeg,gif,svg,mp3,mp4,webm,pdf|max:51200',// 50MB max size
            'folder' => 'required|string|max:255'
        ];
    }
}
