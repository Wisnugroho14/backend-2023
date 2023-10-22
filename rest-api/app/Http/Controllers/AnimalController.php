<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // Property animals
    public $animals = ["Beruang", "Bebek", "Ikan"];

    // Method untuk menampilkan semua hewan
    public function index(){
        echo "Menampilkan data animals <br>";

        // loop property animals
        foreach ($this->animals as $animal){
            echo "- $animal <br>";
        }
    }

    // Method untuk menambahkan data hewan
    public function store(Request $request){
        echo "Menambahkan hewan baru <br>";

        // Menambahkan data ke property animals
        array_push($this->animals, $request->animal);

        // Memanggil method index
        $this->index();
    }

    // Method untuk mengedit data hewan
    public function update(Request $request, $id){
        echo "Mengupdate data hewan id $id <br>";

        // Update data di property animals
        $this->animals[$id] = $request->animal;


        $this->index();
    }


    public function destroy($id){
        echo "Menghapus data hewan id $id <br>";

        unset($this->animals[$id]);
        
        // Memanggil method index
        $this->index();
    }
}
