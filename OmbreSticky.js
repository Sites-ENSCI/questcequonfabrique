// Ce site est codé de façon complètement artisanle et anarchique, de la grosse bidouille, du bon bricolage donc désolé à toi petit fouineur mais cela risque d'être compliqué de tout comprendre


var header = $('.header');

$(window).scroll(function(e){
    if(header.offset().top !== 0){
        if(!header.hasClass('ombre')){
            header.addClass('ombre');
        }
    }else{
        header.removeClass('ombre');
    }
});
