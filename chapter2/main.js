// variable
var hasil,
    opt = prompt('Pilih operasi matematika:\n(tambah, kurang, kali, bagi, pangkat, min, max)'),
    angkaPertama = parseInt( prompt('Masukkan nilai angka pertama: ') ),
    angkaKedua = parseInt( prompt('Masukkan nilai angka kedua: ') );
// condition
if (opt == 'tambah') {
    hasil = angkaPertama + angkaKedua;
} else if (opt == 'kurang') {
    hasil = angkaPertama - angkaKedua;
} else if (opt == 'kali') {
    hasil = angkaPertama * angkaKedua;
} else if (opt == 'bagi') {
    hasil = angkaPertama / angkaKedua;  
} else if (opt == 'pangkat') {
    hasil = Math.pow(angkaPertama, angkaKedua);
} else if (opt == 'min') {
    hasil = Math.min(angkaPertama, angkaKedua);
} else if (opt == 'max') {
    hasil = Math.max(angkaPertama, angkaKedua);
} else {
    hasil = 'Input tidak valid';
}
alert('Hasilnya adalah: ' + hasil);