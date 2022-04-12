<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class WelcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index()
    {
        return view('welcome', [
            'products' => Product::paginate(10),
            'categories' => ProductCategory::orderBy('name', 'ASC')->get()
        ]);
    }

}
