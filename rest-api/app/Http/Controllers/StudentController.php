<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //mendapatkan semua data students
        $students = Student::all();

        if($students->isEmpty()) {
            $data = [
                'message' => 'Resource is empty'
            ];
            
            return response()->json($data,204);
        }

        $data = [
            'message' => 'Get all student',
            'data' => $students
        ];


        // Mengirim data (json) dan kode 200 (sucessfull)
        return response() -> json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //validasi data request
        $request->validate([
            "nama" => "required",
            "nim" => "required",
            "email" => "required|email",
            "jurusan" => "required"
        ]);

        $input = [
            'nama' => $request ->nama,
            'nim' => $request ->nim,
            'email' => $request ->email,
            'jurusan' => $request ->jurusan
        ];

        $students = Student::create($input);
        $data = [
            'message' => 'Data student berhasil dibuat',
            'data' => $students
        ];

        return response() -> json($data,201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //cari id student yang ingin didapatkan
        $students = Student::find($id);

        if ($students){
            $data = [
                'message' => 'Get detail student',
                'data' => $students
            ];

            //mengembalikan data (json) dan kode 200
            return response()->json($data,200);
        }
        else {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data,404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //cari id student yang ingin di update
        $students = Student::find($id);
        
        if ($students){
            $input = [
                'nama' => $request->nama ?? $students->nama,
                'nim' => $request->nim ?? $students->nim,
                'email' => $request->email ?? $students->email,
                'jurusan' => $request->jurusan ?? $students->jurusan
            ];
            //melakukan update data
            $students->update($input);

            $data = [
                'message' => 'Student is updated',
                'data' => $students
            ];

            //mengembalikan data (json) dan kode 200
            return response()->json($data,200); 
        }
        else {
            $data = [
                'message' => 'Student not found'
            ];
            return response()->json($data,404);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //cari id student yang ingin dihapus
        $students = Student::find($id);

        if($students){
            //hapus data student 
            $students->delete();

            $data = [
                'message' => 'Student is deleted'
            ];
            // mengembalikan data (json)
            return response()->json($data,200);
        }
        else {
            $data = [
                'message' => 'Student not found'
            ];
            return response()->json($data,404);
        }
    }
}
