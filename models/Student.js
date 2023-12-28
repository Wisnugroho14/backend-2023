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
static create(data) {
  data.created_at = new Date();
  data.updated_at = new Date();
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO students SET ?";
    db.query(query, data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
}

//export class Student
module.exports = Student;