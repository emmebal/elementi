function trasformazione() {
  if($(this).hasClass("oscilla")) {
    $(this).removeClass("oscilla");    $(this).removeClass("center")
  }
  else if($(this).hasClass("center")) { $(this).addClass("oscilla")}
  else $(this).addClass("center");
}
$(".quadrato").click(trasformazione)
