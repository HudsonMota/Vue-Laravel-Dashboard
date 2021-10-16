<?php

namespace App\Http\Controllers\ApiDash;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class HomeControler extends Controller
{
    public function index()
    {
        $clients = Client::all();
        $products = [
            [
                'id' => 1,
                'name' => 'Vídeo Game',
                'value' => '10.5',
            ]
        ];

        return response()->json([
            'clients' => $clients,
            'products' => $products,
        ]);
    }
}
