//import method
const {index, store} = require('./fruitController')

const main = () => {
  console.log(`Menampilkan data buah-buahan: `);
  index()

  console.log('\n');
  store('Alpukat')
}

main()