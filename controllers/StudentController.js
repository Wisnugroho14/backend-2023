// TODO 3: Import data students dari folder data/students.js
// code here
//import model Student
const Student = require('../models/Student');

// Membuat Class StudentController
class StudentController {
  //menambahkan keyword Async memberitahu proses Asynchronous
  async index(req, res) {
    //memanggil method static all dengan async await
    const students = await Student.all();
    // TODO 4: Tampilkan data students
    // code here
    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.json(data);
  }

  //menambahkan keyword Async memberitahu proses Asynchronous
  async store(req, res) {
    // TODO 5: Tambahkan data students
    // code here
    const students = await Student.create(req.body);

    const data = {
      message: "Menambahkan data student",
      data: {
        nama: req.body.nama,
        nim: req.body.nim,
        email: req.body.email,
        jurusan: req.body.jurusan,
      },
    };
    
    res.json(data);
  }

  update(req, res) {
    // TODO 6: Update data students
    // code here
    const { id } = req.params;
    const { nama } = req.body;
    students[id] = nama;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: students,
    };

    res.json(data);
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    // code here
    const { id } = req.params;
    students.splice(id, 1);

    const data = {
      message: `Menghapus data student id ${id}`,
      data: students,
    };
    
    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;