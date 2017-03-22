$(document).ready(function(){
  $(".Modern-Slider").slick({
    autoplay:true,
    autoplaySpeed:6000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:true,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
    draggable:false,
    prevArrow:'<div class="PrevArrow"></div>',
    nextArrow:'<div class="NextArrow"></div>', 
  }); 
  
  $(".Modern-Slider1").slick({
    autoplay:false,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    adaptiveHeight: true,
    cssEase:'linear',
    draggable:false,
    prevArrow:'<div class="PrevArrow1"></div> <div class="PrevArrow2"></div>',
    nextArrow:'<div class="NextArrow1"></div> <div class="NextArrow2"></div>', 
  });
    //////////////menu1
    $( ".cross" ).hide();    
    $( ".hamburger" ).click(function() {
        $( ".menu1" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".menu1" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });   
    
    $(window).resize(function(){

    var w = $(window).width();

    if(w > 320 && $(".menu1").is(':hidden')) {        
        $(".hamburger").removeAttr('style');
        $(".menu1").removeAttr('style');        

    }

    });
    //////////////
    $(".language-icon div > img").click(function() {
       $(".language-icon div > img").removeClass();
       $(".language-icon div > img").addClass("icon-notactive");
       $(this).removeClass();
       $(this).addClass("icon-active");
        
    });
    
    $("#i-rus").click(function() {
        $('#t-rus').css({
            display:"block"
        });
        $('#t-usa').css({
            display:"none"
        });
        $('#t-kaz').css({
            display:"none"
        });
    });
    
    $("#i-usa").click(function() {
        $('#t-rus').css({
            display:"none"
        });
        $('#t-usa').css({
            display:"block"
        });
        $('#t-kaz').css({
            display:"none"
        });
    });
    
    $("#i-kaz").click(function() {
        $('#t-rus').css({
            display:"none"
        });
        $('#t-usa').css({
            display:"none"
        });
        $('#t-kaz').css({
            display:"block"
        });
    });    
    
    
        if ($(window).width() < 740) {
         $('.icon-notactive').css({display:"none"});            
         $(".language-icon").click(function() {           
          $(".icon-notactive").toggle("slow");  
        });       
            
        }
    
    //////////////popap
      /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1.0, height: '350px', paddingTop: '20px'}, 1000); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, height: '0px', paddingTop: '0px'}, 1000, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
         $(document).keydown(function(eventObject) {
        if ($(modal).is(":visible")){
                if (eventObject.which == '27') {
                       modal // все мoдaльные oкнa
             .animate({opacity: 0, height: '0px', paddingTop: '0px'}, 1000, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                    }
                );
                    }
            }
            });
        });
    
    
     
    ///////////////scrollpopap
    $(".modal_div").niceScroll();    
    
    
        
});

