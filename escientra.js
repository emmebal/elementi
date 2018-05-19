function escientra() {
  $("#qverde").addClass("esce"); $("#cblu").addClass("entra")
};

$("#qverde").click(escientra);

function rossoruotaesce() {
  if($("#cblu").hasClass("rotate")) {$("#cblu").addClass("escerosso"); $("#qverde").addClass("entraverde")}
  else if($("#cblu").hasClass("qr")) {$("#cblu").addClass("rotate")}
   else $("#cblu").addClass("qr")
};

$("#cblu").click(rossoruotaesce);
