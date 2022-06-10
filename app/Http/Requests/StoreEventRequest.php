<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'name' => 'required',
//            'entry_price' => 'required',
//            'start_date' => 'required|date',
//            'start_time' => 'required|date',
//            'end_time' => 'required|date',
//            'days' => 'required|date',
//            'photo_path' => 'required',
//            'host_id' => 'required',
//            'user_id' => 'required',
//            'category_id' => 'required',
//            'commune_id' => 'required'

        ];
    }
}
