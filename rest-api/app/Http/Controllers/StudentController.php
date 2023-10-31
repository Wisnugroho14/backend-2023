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
        //
        $students = Student::all();

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
        //
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
        //
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
    public function update(Request $request, string $id)
    {
        //
        $input = [
            'nama' => $request ->nama,
            'nim' => $request ->nim,
            'email' => $request ->email,
            'jurusan' => $request ->jurusan
        ];

        $students = Student::find($id);
        $students -> update($input);

        $data = [
            'message' => "Data Student berhasil di update",
            'data' => $students
        ];

        return response()-> json($data,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $students = Student::find($id);
        $students->delete();

        $data = [
            'message' => 'ID: '. $id .' Data student berhasil di hapus',
        ];

        return response()->json($data,200);
    }
}
