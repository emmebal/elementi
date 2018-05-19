function al_click() {
  if($("#quadrato").hasClass("bl")) {$("#quadrato").removeClass("bl"); $("#quadrato").addClass("tl")}
  else if($("#quadrato").hasClass("br")) {$("#quadrato").removeClass("br"); $("#quadrato").addClass("bl")}
  else if($("#quadrato").hasClass("tr")) {$("#quadrato").removeClass("tr"); $("#quadrato").addClass("br")}
  else $("#quadrato").addClass("tr")
};
$("#quadrato").click(al_click);
