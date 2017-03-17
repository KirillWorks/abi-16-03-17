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
    
    
    jQuery(".eq1").mouseover(function() {
   $(this).animate({ backgroundColor: "#0CF" }, 2000);
});
jQuery(".eq1").mouseleave(function() {
   $(this).animate({ backgroundColor: "#0CF" }, 2000);
});
        
});