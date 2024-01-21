export function onLoadWindow() {
  let namaPlayerWhite = prompt("nama 1");
  let namaPlayerblack = prompt("nama 2");
  let waktumenit = parseInt(
    prompt("waktu berapa menit anda mau bermain ? (masukan dalam format angka)")
  );

  namaPlayerWhite = namaPlayerWhite ? namaPlayerWhite : "Pemain Pertama";
  namaPlayerblack = namaPlayerblack ? namaPlayerblack : "Pemain Kedua";
  $("#nama-1").text(namaPlayerWhite);
  $("#nama-2").text(namaPlayerblack);


  $(".reset-button").hide();

  return [ waktumenit];
}
