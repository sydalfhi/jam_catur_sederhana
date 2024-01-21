// fungsi perubahan saat active

$(document).ready(function () {
  function removeActive() {
    $(".pemain").removeClass("active");
  }

  let menit = 5; //menit

  let second = menit * 60;
  let TampilWaktu = detikKeWaktu(second);
  $(".waktu").text(TampilWaktu);

  let timeWhitePlayer = second;
  let timeBlacklayer = second;
  let whiteInterval;
  let blackInterval;

  $(".play-button").click(function (e) {
    $("#user-1").addClass("active");
    waktuPemainPutih();
    clearInterval(blackInterval);
    $(this.parentElement).hide("slow");
    RunPlayer();
  });

  function RunPlayer() {
    $(".pemain").click(function (e) {
      removeActive();
      // $(!this).addClass("active");
      if (this.id == "user-1") {
        if ($("#user-2").hasClass("active")) {
          return alert("pemain lain sedang bermain");
        } else {
          $("#user-2").addClass("active");
          waktuPemainHitam();
          clearInterval(whiteInterval);
        }
      } else {
        if ($("#user-2").hasClass("active")) {
          return alert("pemain lain sedang bermain");
        } else {
          $("#user-1").addClass("active");
          waktuPemainPutih();
          clearInterval(blackInterval);
        }
      }
    });
  }

  //   waktu

  let format1;

  function waktuPemainPutih() {
    whiteInterval = setInterval(() => {
      --timeWhitePlayer;
      let stringTime = detikKeWaktu(timeWhitePlayer);
      $(".waktu-1").text(stringTime);
      if (timeWhitePlayer == 0) {
        clearInterval(whiteInterval);
        clearInterval(blackInterval);
        return alert("waktu player PUTIH berakhir, player HITAM MENANG");
      }
    }, 100);
  }
  function waktuPemainHitam() {
    blackInterval = setInterval(() => {
      --timeBlacklayer;

      let stringTime = detikKeWaktu(timeBlacklayer);
      $(".waktu-2").text(stringTime);
      if (timeBlacklayer == 0) {
        clearInterval(blackInterval);
        clearInterval(whiteInterval);
        return alert("waktu player HITAM berakhir, player putih MENANG");
      }
    }, 100);
  }

  function detikKeWaktu(detik) {
    // Menghitung menit
    var menit = Math.floor(detik / 60);
    // Menghitung sisa detik
    var sisaDetik = detik % 60;

    // Menambahkan "0" di depan jika menit atau detik kurang dari 10
    menit = menit < 10 ? "0" + menit : menit;
    sisaDetik = sisaDetik < 10 ? "0" + sisaDetik : sisaDetik;

    // Mengembalikan hasil dalam format string
    return menit + ":" + sisaDetik;
  }
});
