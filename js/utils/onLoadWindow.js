export function onLoadWindow() {
  let namaPlayerWhite = prompt("Nama Pemain Pertama");
  let namaPlayerblack = prompt("Nama Pemain Kedua");
  let waktumenit = parseInt(
    prompt("Berapa Menit Anda Mau Bermain ? (! Masukan Angka Saja)")
  );

  namaPlayerWhite = namaPlayerWhite ? namaPlayerWhite : "Pemain Pertama";
  namaPlayerblack = namaPlayerblack ? namaPlayerblack : "Pemain Kedua";
  $("#nama-1").text(namaPlayerWhite);
  $("#nama-2").text(namaPlayerblack);


  $(".reset-button").hide();

  return [ waktumenit];
}
