let barang = document.getElementById('barang');
let jumlah = document.getElementById('jumlah');
let keterangan = document.getElementById('keterangan');

function simpan(){
console.log(barang.value)
console.log(jumlah.value)
console.log(keterangan.value)

localStorage.setItem('barang', barang.value);
localStorage.setItem('jumlah', jumlah.value);
localStorage.setItem('keterangan', keterangan.value);

let data = JSON.parse(localStorage.getItem('barang','jumlah','keterangan'))
console.log(data);

data.push({
    barang: barang.value,
    jumlah: jumlah.value,
    keterangan: keterangan.value
})
 console.log(data)
localStorage.setItem('data', JSON.stringify(data))
tampil()
}
function tampil(){
    let data = JSON.parse(localStorage.getItem('data'))
    console.log(data)
    document.getElementById('list-barang').innerHTML = ''

    hasil.forEach(element => {

        // console.log(element)
        document.getElementById('list-barang').innerHTML += `<div class = " col-lg-4 col-md-6"><h4 class = "txt-primary"> ${element.barang} </h4>
        <h6 class ="text-danger">Jumlah: ${element.jumlah}</h6>
        <p class ="text-muted">Keterangan: ${element.keterangan}</p>
        </div>`
    });

}
tampil()