var link = document.getElementById("styleSheet");
var title = document.getElementById("header-title");


function sheetSwap(sheet){
  link.setAttribute('href', '/assets/css/dragonball/'+sheet);
  if(sheet == 'dragonball.css'){
    title.innerHTML = "zandbox";
  }
}
