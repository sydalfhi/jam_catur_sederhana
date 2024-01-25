import { RunPlayer } from "./utils/changePlayer.js";
import { detikKeWaktu } from "./utils/convertTime.js";
import { blackInterval, decrementTime } from "./utils/decrementTime.js";
import { onLoadWindow } from "./utils/onLoadWindow.js";

$(document).ready(async function () {
  // fungsi on load
  let { waktumenit } = await onLoadWindow();
  // penetapan awal
  waktumenit = waktumenit ? waktumenit : 5;
  let second = waktumenit * 60;
  let TampilWaktu = detikKeWaktu(second);
  $(".waktu").text(TampilWaktu);

  // import fungsi untuk mengurangi waktu
  let [waktuPemainPutih, waktuPemainHitam] = decrementTime(second);

  // fungsi  tombol play di click
  $(".play-button").click(function (e) {
    $("#user-1").addClass("active");
    clearInterval(blackInterval);
    waktuPemainPutih();
    $(this).hide("fast");
    RunPlayer(waktuPemainPutih, waktuPemainHitam);
  });

  // fungsi button reset click
  $(".reset-button").click(function (e) {
    window.location.reload();
  });
});
