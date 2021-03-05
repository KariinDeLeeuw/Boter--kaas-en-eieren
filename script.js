var spelerAanZet = 2;


function neerzetten() {
  var mijnblokje = document.getElementById("blokje1");
  if( spelerAanZet == 1 ) {
     mijnblokje.innerHTML = "O";
     spelerAanZet = 2;
  } else {
    mijnblokje.innerHTML = "X";
    spelerAanZet = 1;
  }
}
