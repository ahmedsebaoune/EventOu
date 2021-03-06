<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Support\Collection;
class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        dd($this->input('marker'));
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
            'entry_price' => 'required|numeric',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'start_time' => 'required|date',
            'photo_path' => 'required',
            'days_desc' => '',
//            'host_id' => 'required',
//            'user_id' => 'required',
            'categorie' => 'required',
            'commune' => 'required',
            'long',
            'lat',

        ];
    }
}
