var spelerAanZet = 2;


function neerzetten( blokjesnummer ) {
  var mijnBlokje = document.getElementById("blokje" + blokjesnummer);
  var inhoudElement = mijnBlokje.innerHTML;
  if( inhoudElement != "<p>.</p>" ) {
    alert("Dit mag niet!");
  } else {
    if( spelerAanZet == 1 ) {
      mijnBlokje.innerHTML = "O";
      inhoudElement = "O"
      spelerAanZet = 2;
   } else {
     mijnBlokje.innerHTML = "X";
     inhoudElement = "X";
     spelerAanZet = 1;
   }
 }
 if(document.getElementById("blokje1").innerHTML == "X"
 && document.getElementById("blokje2").innerHTML == "X"
 && document.getElementById("blokje3").innerHTML == "X"
 ||
 document.getElementById("blokje4").innerHTML == "X"
 && document.getElementById("blokje5").innerHTML == "X"
 && document.getElementById("blokje6").innerHTML == "X"
 ||
 document.getElementById("blokje7").innerHTML == "X"
 && document.getElementById("blokje8").innerHTML == "X"
 && document.getElementById("blokje9").innerHTML == "X"
 ||
 document.getElementById("blokje1").innerHTML == "X"
 && document.getElementById("blokje4").innerHTML == "X"
 && document.getElementById("blokje7").innerHTML == "X"
 ||
 document.getElementById("blokje2").innerHTML == "X"
 && document.getElementById("blokje5").innerHTML == "X"
 && document.getElementById("blokje8").innerHTML == "X"
||
document.getElementById("blokje3").innerHTML == "X"
 && document.getElementById("blokje6").innerHTML == "X"
 && document.getElementById("blokje9").innerHTML == "X"
 ||
 document.getElementById("blokje1").innerHTML == "X"
 && document.getElementById("blokje5").innerHTML == "X"
 && document.getElementById("blokje9").innerHTML == "X"
 ||
 document.getElementById("blokje3").innerHTML == "X"
 && document.getElementById("blokje5").innerHTML == "X"
 && document.getElementById("blokje7").innerHTML == "X")
 {
   alert("X heeft gewonnen!");
 } else if(document.getElementById("blokje1").innerHTML == "O"
 && document.getElementById("blokje2").innerHTML == "O"
 && document.getElementById("blokje3").innerHTML == "O"
 ||
 document.getElementById("blokje4").innerHTML == "O"
 && document.getElementById("blokje5").innerHTML == "O"
 && document.getElementById("blokje6").innerHTML == "O"
 ||
 document.getElementById("blokje7").innerHTML == "O"
 && document.getElementById("blokje8").innerHTML == "O"
 && document.getElementById("blokje9").innerHTML == "O"
 ||
 document.getElementById("blokje1").innerHTML == "O"
 && document.getElementById("blokje4").innerHTML == "O"
 && document.getElementById("blokje7").innerHTML == "O"
 ||
 document.getElementById("blokje2").innerHTML == "O"
 && document.getElementById("blokje5").innerHTML == "O"
 && document.getElementById("blokje8").innerHTML == "X"
||
document.getElementById("blokje3").innerHTML == "O"
 && document.getElementById("blokje6").innerHTML == "O"
 && document.getElementById("blokje9").innerHTML == "O"
 ||
 document.getElementById("blokje1").innerHTML == "O"
 && document.getElementById("blokje5").innerHTML == "O"
 && document.getElementById("blokje9").innerHTML == "O"
 ||
 document.getElementById("blokje3").innerHTML == "O"
 && document.getElementById("blokje5").innerHTML == "O"
 && document.getElementById("blokje7").innerHTML == "O"){
   alert("O heeft gewonnen!")
 }
}
  
