//import data
const fruits = require("./data.js");

//menampilkan semua data
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

//membuat method store
const store = (name) => {
  fruits.push(name);
  index();
};

//membuat method update
const update = (position, name) => {
  fruits[position] = name;
  index();
};

//membuat method delete
const destroy = (position) => {
  fruits.splice(position, 1);
  index();
};
//export method
module.exports = { index, store, update, destroy};