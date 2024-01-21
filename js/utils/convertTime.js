export function detikKeWaktu(detik) {
    // Menghitung menit
    let menit = Math.floor(detik / 60);
    // Menghitung sisa detik
    let sisaDetik = detik % 60;

    // Menambahkan "0" di depan jika menit atau detik kurang dari 10
    menit = menit < 10 ? "0" + menit : menit;
    sisaDetik = sisaDetik < 10 ? "0" + sisaDetik : sisaDetik;

    // Mengembalikan hasil dalam format string
    return menit + ":" + sisaDetik;
  }