// Mendapatkan elemen-elemen dari DOM
const inputjumlah = document.getElementById('jumlah');
const dariMT = document.getElementById('dariMT');
const keMT = document.getElementById('keMT');
const hasil = document.getElementById('hasil');
const tombolkonversi = document.getElementById('tombolkonversi');

// Daftar nilai tukar mata uang (contoh)
const exchangeRates = {
  USD: 1.0,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110.0,
};

// Fungsi untuk menghitung konversi mata uang
function convertCurrency() {
  const jumlah = parseFloat(inputjumlah.value);
  const from = dariMT.value;
  const to = keMT.value;

  if (isNaN(jumlah)) {
    hasil.textContent = 'Masukkan jumlah yang valid.';
  } else if (from === to) {
    hasil.textContent = 'Mata uang asal dan tujuan sama.';
  } else if (exchangeRates[from] && exchangeRates[to]) {
    const convertedjumlah = (jumlah / exchangeRates[from]) * exchangeRates[to];
    hasil.textContent = `${jumlah} ${from} = ${convertedjumlah.toFixed(2)} ${to}`;
  } else {
    hasil.textContent = 'Mata uang tidak valid.';
  }
}

// Menambahkan event listener pada tombol konversi
tombolkonversi.addEventListener('click', convertCurrency);
