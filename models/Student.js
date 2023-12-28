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
}

//export class Student
module.exports = Student;