import { blackInterval, whiteInterval } from "./decrementTime.js";
import { removeActive } from "./removeActive.js";

export function RunPlayer(waktuPemainPutih , waktuPemainHitam) {


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