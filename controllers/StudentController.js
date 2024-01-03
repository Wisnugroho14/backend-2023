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
    // TODO 5: Tambahkan (create) data students
    // code here
    const students = await Student.create(req.body);

    const data = {
      message: "Menambahkan data students",
      data: students,
    };
    
    res.json(data);
  }

  async update(req, res) {
    // TODO 6: Update data students
    // code here
    const { id } = req.params;
    const students = await Student.find(id);

    if (students) {
      //melakukan update data students
      const students = await Student.update(id, req.body);
      const data = {
        message: `Mengedit data students`,
        data: students,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message : `Student not found`,
      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    // TODO 7: Hapus data students
    // code here
    const { id } = req.params;
   const students = await Student.find(id);

   if (students) {
    await Student.delete(id);
    const data = {
      message: `Menghapus data student`,
    };

    res.status(200).json(data);
   } else {
    const data = {
      message: `Student not found`,
   };

   res.status(404).json(data);
  }
}

  async show(req,res) {
    const {id} = req.params;
    //cari id student berdasarkan id
    const students = await Student.find(id);

    if (student) {
      const data = {
        message: `Menampilkan detail student`,
        data: student,
      };

      res.status(200).json(data);
    }
    else {
      const data = {
        message: `Student not found`, 
      };

      res.status(404).json(data);
    }
  }
}
// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;