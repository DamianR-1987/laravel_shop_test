<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'Elektronika'],
            ['name' => 'Odzież'],
            ['name' => 'Inne'],
            ['name' => 'Jedzenie'],
            ['name' => 'Akcesoria']
        ];
        ProductCategory::insert($data);
    }
}
