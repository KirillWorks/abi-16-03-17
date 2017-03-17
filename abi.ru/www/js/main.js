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
    
    $("#irus").click(function() {
        $('#trus').css({
            display:"block"
        });
        $('#tusa').css({
            display:"none"
        });
        $('#tkaz').css({
            display:"none"
        });
    });
    
    $("#iusa").click(function() {
        $('#trus').css({
            display:"none"
        });
        $('#tusa').css({
            display:"block"
        });
        $('#tkaz').css({
            display:"none"
        });
    });
    
    $("#ikaz").click(function() {
        $('#trus').css({
            display:"none"
        });
        $('#tusa').css({
            display:"none"
        });
        $('#tkaz').css({
            display:"block"
        });
    });    
    
    
        if ($(window).width() < 740) {
         $('.icon-notactive').css({display:"none"});            
         $(".language-icon").click(function() {           
          $(".icon-notactive").toggle("slow");  
        });
         
       
            
        }

});