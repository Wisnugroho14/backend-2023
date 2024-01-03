//import database
const db = require("../config/database");

//membuat class model Student
class Student {
  static all() {
    //return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";
      db.query(query, (err, result) => {
        return resolve(result);
      });
    });
  }

  //Membuat create resource
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    //Melakukan query berdasarkan id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  //Mengupdate data student
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    //mencari data yang baru diupdate
    const student = await this.find(id);
    return student;
  }
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        //destructing array
        const [student] = results;
        resolve(student);
      });
    });
  }

  //menghapus data dari database
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  //Get one resource
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        //destructing array
        const [student] = results;
        resolve(student); 
      });
    });
  }
}

//export class Student
module.exports = Student;