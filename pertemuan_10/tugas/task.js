/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const hasilDownload = () => {
  return new Promise((resolve) => {
    resolve("Download selesai");
  });
};

// function showDownload(result) {
//   console.log("Download selesai");
//   console.log("Hasil Download: " + result);
// }

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
const downloadFile = () => {
  return new Promise((resolve) => {
    const result = "windows-10.exe";
    setTimeout(() => {
      resolve("Hasil Download: " + result);
    }, 3000);
  });
};

// Function async await download
const download = async () => {
  console.log(await hasilDownload());
  console.log(await downloadFile());
};

download();

// function download(callShowDownload) {
//   setTimeout(function () {
//     const result = "windows-10.exe";
//     callShowDownload(result);
//   }, 3000);
// }

// download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
