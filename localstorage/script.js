let barang = document.getElementById('barang');
let jumlah = document.getElementById('jumlah');
let keterangan = document.getElementById('keterangan');

function simpan(){
console.log(barang.value)
console.log(jumlah.value)
console.log(keterangan.value)}

localStorage.setItem('barang', barang.value);
localStorage.setItem('jumlah', jumlah.value);
localStorage.setItem('keterangan', keterangan.value);
