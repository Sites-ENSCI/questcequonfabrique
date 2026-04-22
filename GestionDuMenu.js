// Ce site est codé de façon complètement artisanle et anarchique, de la grosse bidouille, du bon bricolage donc désolé à toi petit fouineur mais cela risque d'être compliqué de tout comprendre

// var menu = $('#menu');
var menu = document.getElementById('menu');

const fullPage = document.getElementById('full-page');
var liens = document.getElementsByClassName('LienSommaire');


function disparitionMenu(lien){
  lien.addEventListener('click', () => {

    menu.checked = false;

  });


  }

for(const i of liens){
  disparitionMenu(i);
}


disparitionMenu(fullPage);
