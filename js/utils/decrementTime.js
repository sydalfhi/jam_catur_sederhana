// adalah fungsi untuk mengurangi waktu pemain yang sedang aktif

import { detikKeWaktu } from "./convertTime.js";
import { removeActive } from "./removeActive.js";

export let whiteInterval;
export let blackInterval;

export function decrementTime(second) {
  let stringTimeWhite;
  let stringTimeBlack;
  let timeWhitePlayer = second;
  let timeBlacklayer = second;
  let oneSecond = 1000;

  function waktuPemainPutih() {
    whiteInterval = setInterval(() => {
      --timeWhitePlayer;
      stringTimeWhite = detikKeWaktu(timeWhitePlayer);
      $(".waktu-1").text(stringTimeWhite);
      if (timeWhitePlayer == 0) {
        $(".reset-button").show();
        clearInterval(whiteInterval);
        clearInterval(blackInterval);
        removeActive();
        return alert("waktu player PUTIH Sudah Habis");
      }
    }, oneSecond);
  }

  function waktuPemainHitam() {
    blackInterval = setInterval(() => {
      --timeBlacklayer;

      stringTimeBlack = detikKeWaktu(timeBlacklayer);
      $(".waktu-2").text(stringTimeBlack);
      if (timeBlacklayer == 0) {
        $(".reset-button").show();
        clearInterval(blackInterval);
        clearInterval(whiteInterval);
        removeActive();
        return alert("waktu player HITAM Sudah Habis");
      }
    }, oneSecond);
  }

  return [waktuPemainPutih, waktuPemainHitam];
}
