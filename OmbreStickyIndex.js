// Ce site est codé de façon complètement artisanle et anarchique, de la grosse bidouille, du bon bricolage donc désolé à toi petit fouineur mais cela risque d'être compliqué de tout comprendre


var header = $('.header');
const photobanniere = document.getElementById('photobanniere');
var rectangle = photobanniere.getBoundingClientRect();
var boutonMenu = $('#boutonMenu');
rectangle.y = rectangle.y + $(window).scrollTop();

$(window).scroll(function(e){

  //console.log("scroll", $(window).scrollTop(), rectangle.bottom);
    if($(window).scrollTop() >= rectangle.bottom){
        if(!header.hasClass('ombre')){
            header.addClass('ombre');
            boutonMenu.removeClass('invisible');
        }
    }else{
        header.removeClass('ombre');
        boutonMenu.addClass('invisible');
    }
});
$(window).trigger("scroll");

function scrollToID(myID) {

	var myElement = $(myID);
	var position = myElement.offset().top;
	var currentScroll = $(window).scrollTop();
	// console.log("Current scroll is "+currentScroll);
	var distance = Math.abs(position - currentScroll);
	var scrollTime = distance * 2.5;

	$('html,body').animate({
	    scrollTop: position
	  }, scrollTime);
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function scrollAccueil(){
  //console.log("youpi hey");
  if($(window).scrollTop()==0){
    scrollToID('#contenu');
    //console.log("youpi oh");
  }
}


setTimeout(scrollAccueil,3000);
