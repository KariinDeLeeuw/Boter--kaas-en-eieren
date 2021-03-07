var spelerAanZet = 2;


function neerzetten( blokjesnummer ) {
  var mijnBlokje = document.getElementById("blokje" + blokjesnummer);
  var inhoudElement = mijnBlokje.innerHTML;
  if( inhoudElement != "<p>.</p>" ) {
    alert("Dit mag niet!");
  } else {
    if( spelerAanZet == 1 ) {
      mijnBlokje.innerHTML = "O";
      spelerAanZet = 2;
   } else {
     mijnBlokje.innerHTML = "X";
     spelerAanZet = 1;
   }
 }
}
  
