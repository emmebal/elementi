function ruota_quadrato_rosso() { $("#quadrato").addClass("rotate");
};

function disegna_quadrato_giallo() {
$("#quadratino").removeClass("off");
$("#quadratino").addClass("on");
};

function ruota_tutto() {
$("#quadrato").addClass("orario");
$("#quadratino").addClass("antiorario");
};

function al_click() {
  if($("#quadratino").hasClass("on"))
    ruota_tutto();
  else if($("#quadrato").hasClass("rotate"))
    disegna_quadrato_giallo();
  else
    ruota_quadrato_rosso();
};

$("#quadrato").click(al_click);
