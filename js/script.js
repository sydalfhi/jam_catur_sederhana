// fungsi perubahan saat active

$(document).ready(function () {
  let namaPlayerWhite = prompt("nama 1");
  let namaPlayerblack = prompt("nama 2");
  let waktumenit = parseInt(
    prompt("waktu berapa menit anda mau bermain ? (masukan dalam format angka)")
  );

  function removeActive() {
    $(".pemain").removeClass("active");
  }

  waktumenit = waktumenit ? (waktumenit = waktumenit) : 5;
  let second = waktumenit * 60;
  let TampilWaktu = detikKeWaktu(second);
  $(".waktu").text(TampilWaktu);

  let timeWhitePlayer = second;
  let timeBlacklayer = second;
  let whiteInterval;
  let blackInterval;
  $(".reset-button").hide();

  $(".play-button").click(function (e) {
    $("#user-1").addClass("active");
    waktuPemainPutih();
    clearInterval(blackInterval);
    $(this).hide("slow");
    RunPlayer();
  });

  $(".reset-button").click(function (e) {
    window.location.reload();
  });

  function RunPlayer() {
    $(".pemain").click(function (e) {
      // $(!this).addClass("active");
      if (this.id == "user-1") {
        if ($("#user-2").hasClass("active")) {
          return "pemain 2 sedang main";
        } else {
          removeActive();
          $("#user-2").addClass("active");
          waktuPemainHitam();
          clearInterval(whiteInterval);
        }
      } else {
        if ($("#user-1").hasClass("active")) {
          return "pemain 2 sedang main";
        } else {
          removeActive();
          $("#user-1").addClass("active");
          waktuPemainPutih();
          clearInterval(blackInterval);
        }
      }
    });
  }

  //   waktu

  function waktuPemainPutih() {
    whiteInterval = setInterval(() => {
      --timeWhitePlayer;
      let stringTime = detikKeWaktu(timeWhitePlayer);
      $(".waktu-1").text(stringTime);
      if (timeWhitePlayer == 0) {
        $(".reset-button").show();
        clearInterval(whiteInterval);
        clearInterval(blackInterval);
        return alert("waktu player PUTIH berakhir, player HITAM MENANG");
      }
    }, 10);
  }
  function waktuPemainHitam() {
    blackInterval = setInterval(() => {
      --timeBlacklayer;

      let stringTime = detikKeWaktu(timeBlacklayer);
      $(".waktu-2").text(stringTime);
      console.info(timeBlacklayer);
      if (timeBlacklayer == 0) {
        $(".reset-button").show();
        clearInterval(blackInterval);
        clearInterval(whiteInterval);
        return alert("waktu player HITAM berakhir, player PUTIH MENANG");
      }
    }, 10);
  }

  function detikKeWaktu(detik) {
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
});
