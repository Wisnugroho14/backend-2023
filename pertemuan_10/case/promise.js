const persiapan = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve("Menyiapkan bahan ...")
    }, 3000)
  })
}

const rebusAir = () => {
  return new Promise (function(resolve, reject) {
    setTimeout(function() {
      resolve("Merebus air ...")
    }, 7000)
  })
}

const masak = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve("Masak mie ...")
    }, 5000)
  })
}

// Consuming Promise\
const main = () => {
persiapan()
.then((result) => {
  console.log(result);
  return rebusAir()
})
.then((result) => {
  console.log(result);
  return masak();
}) 
.then((result) => {
  console.log(result);
}) 
}

const second = async () => {
  const hasilPersiapan = await persiapan();
  console.log(hasilPersiapan);

  const hasilRebusAir = await rebusAir();
  console.log(hasilRebusAir);

  const hasilMasak = await masak();
  console.log(hasilMasak);
}
second();