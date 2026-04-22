// Ce site est codé de façon complètement artisanle et anarchique, de la grosse bidouille, du bon bricolage donc désolé à toi petit fouineur mais cela risque d'être compliqué de tout comprendre

// var menu = $('#menu');
var checkbox1 = document.getElementById('checkboxImg1');
var checkbox2 = document.getElementById('checkboxImg2');

// const fullPage = document.getElementById('full-page');
var imgs = document.getElementsByClassName('ImgEcoCzoom');


function disparitionMenu(img){
  img.addEventListener('click', () => {

    checkbox1.checked = false;
    checkbox2.checked = false;

  });


  }

for(const i of imgs){
  disparitionMenu(i);
}


// disparitionMenu(fullPage);
