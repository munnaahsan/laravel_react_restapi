<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Data;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function str(Request $r) {
        $data = new Data;
        dd($data);
        $data->name = $r->input('name');
        $data->email = $r->input('email');
        $data->phone = $r->input('phone');
        $data->email = $r->input('email');
        $data->age = $r->input('age');
        $data->save();

        return response()->json([
            'status' => 200,
            'message'=> 'Data Added'
        ]);

    }
}
