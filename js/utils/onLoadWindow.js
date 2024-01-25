// // saat halaman di load , inilah yang pertama yang akan di jalan kan oleh browser

// export function onLoadWindow() {
//   let namaPlayerWhite = prompt("Nama Pemain Pertama");
//   let namaPlayerblack = prompt("Nama Pemain Kedua");
//   let waktumenit = parseInt(
//     prompt("Berapa Menit Anda Mau Bermain ? (! Masukan Angka Saja)")
//   );

//   namaPlayerWhite = namaPlayerWhite ? namaPlayerWhite : "Pemain Pertama";
//   namaPlayerblack = namaPlayerblack ? namaPlayerblack : "Pemain Kedua";
//   $("#nama-1").text(namaPlayerWhite);
//   $("#nama-2").text(namaPlayerblack);

//   $(".reset-button").hide();

//   return [waktumenit];
// }

// saat halaman di load , inilah yang pertama yang akan di jalan kan oleh browser

export async function onLoadWindow() {
  $(".reset-button").hide();
  let namaPlayerWhite;
  let namaPlayerblack;
  let waktumenit;

  const { value: namaPutih } = await Swal.fire({
    input: "text",
    inputLabel: "Nama Player Pertama",
    inputPlaceholder: "Masukan Nama Player",
  });
  const { value: namaHitam } = await Swal.fire({
    input: "text",
    inputLabel: "Nama Player kedua",
    inputPlaceholder: "Masukan Nama Player",
  });

  const { value: lamabermain } = await Swal.fire({
    input: "number",
    inputLabel: "mau berapa menit anda main ? ",
    inputPlaceholder: "contoh 3 // adalah 3 menit",
  });

  namaPlayerWhite = namaPutih ? namaPutih : "Pemain Pertama";
  namaPlayerblack = namaHitam ? namaHitam : "Pemain Kedua";
  $("#nama-1").text(namaPlayerWhite);
  $("#nama-2").text(namaPlayerblack);
  waktumenit = parseInt(lamabermain);
  return { waktumenit };
}
