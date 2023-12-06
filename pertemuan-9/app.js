//import method
const { index, store, update, destroy } = require("./fruitController");

const main = () => {
  console.log(`Menampilkan data buah-buahan: `);
  index();

  console.log(`\nMethod store - Menambahkan buah Pisang`);
  store("Pisang");

  console.log(`\nMethod update - Update data 0 menjadi Kelapa`);
  update(0, "Kelapa");

  console.log("\nMethod destroy - Menghapus data 0");
  destroy(0);
};

main();