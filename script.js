var spelerAanZet = 2;


function neerzetten( blokjesnummer ) {
  var mijnblokje = document.getElementById("blokje" + blokjesnummer);
  if( spelerAanZet == 1 ) {
     mijnblokje.innerHTML = "O";
     spelerAanZet = 2;
  } else {
    mijnblokje.innerHTML = "X";
    spelerAanZet = 1;
  }
}
