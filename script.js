var spelerAanZet = 2;


function neerzetten( blokjesnummer ) {
  var mijnBlokje = document.getElementById("blokje" + blokjesnummer);
  var inhoudElement = mijnBlokje.innerHTML;
  if( inhoudElement != "" ) {
    alert("Dit mag niet!");
  } else {
    if( spelerAanZet == 1 ) {
      mijnBlokje.innerHTML = "❍";
      inhoudElement = "❍";
      spelerAanZet = 2;
   } else {
     mijnBlokje.innerHTML = "✕";
     inhoudElement = "✕";
     spelerAanZet = 1;
   }
 }
 
//  ✕ is the winner
 if(document.getElementById("blokje1").innerHTML == "✕"
 && document.getElementById("blokje2").innerHTML == "✕"
 && document.getElementById("blokje3").innerHTML == "✕"
 ||
 document.getElementById("blokje4").innerHTML == "✕"
 && document.getElementById("blokje5").innerHTML == "✕"
 && document.getElementById("blokje6").innerHTML == "✕"
 ||
 document.getElementById("blokje7").innerHTML == "✕"
 && document.getElementById("blokje8").innerHTML == "✕"
 && document.getElementById("blokje9").innerHTML == "✕"
 ||
 document.getElementById("blokje1").innerHTML == "✕"
 && document.getElementById("blokje4").innerHTML == "✕"
 && document.getElementById("blokje7").innerHTML == "✕"
 ||
 document.getElementById("blokje2").innerHTML == "✕"
 && document.getElementById("blokje5").innerHTML == "✕"
 && document.getElementById("blokje8").innerHTML == "✕"
||
document.getElementById("blokje3").innerHTML == "✕"
 && document.getElementById("blokje6").innerHTML == "✕"
 && document.getElementById("blokje9").innerHTML == "✕"
 ||
 document.getElementById("blokje1").innerHTML == "✕"
 && document.getElementById("blokje5").innerHTML == "✕"
 && document.getElementById("blokje9").innerHTML == "✕"
 ||
 document.getElementById("blokje3").innerHTML == "✕"
 && document.getElementById("blokje5").innerHTML == "✕"
 && document.getElementById("blokje7").innerHTML == "✕")
 {
   alert("✕ heeft gewonnen!");

  //  ❍ is the winner
 } else if(document.getElementById("blokje1").innerHTML == "❍"
 && document.getElementById("blokje2").innerHTML == "❍"
 && document.getElementById("blokje3").innerHTML == "❍"
 ||
 document.getElementById("blokje4").innerHTML == "❍"
 && document.getElementById("blokje5").innerHTML == "❍"
 && document.getElementById("blokje6").innerHTML == "❍"
 ||
 document.getElementById("blokje7").innerHTML == "❍"
 && document.getElementById("blokje8").innerHTML == "❍"
 && document.getElementById("blokje9").innerHTML == "❍"
 ||
 document.getElementById("blokje1").innerHTML == "❍"
 && document.getElementById("blokje4").innerHTML == "❍"
 && document.getElementById("blokje7").innerHTML == "❍"
 ||
 document.getElementById("blokje2").innerHTML == "❍"
 && document.getElementById("blokje5").innerHTML == "❍"
 && document.getElementById("blokje8").innerHTML == "❍"
||
document.getElementById("blokje3").innerHTML == "❍"
 && document.getElementById("blokje6").innerHTML == "❍"
 && document.getElementById("blokje9").innerHTML == "❍"
 ||
 document.getElementById("blokje1").innerHTML == "❍"
 && document.getElementById("blokje5").innerHTML == "❍"
 && document.getElementById("blokje9").innerHTML == "❍"
 ||
 document.getElementById("blokje3").innerHTML == "❍"
 && document.getElementById("blokje5").innerHTML == "❍"
 && document.getElementById("blokje7").innerHTML == "❍"){
   alert("❍ heeft gewonnen!")
 }
}
  
