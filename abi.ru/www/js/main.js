$(document).ready(function () {
    $(".Modern-Slider").slick({
        autoplay: false,
        autoplaySpeed: 6000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        draggable: false,
        prevArrow: '<div class="PrevArrow"></div>',
        nextArrow: '<div class="NextArrow"></div>',
    });

    $(".Modern-Slider1").slick({
        autoplay: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        draggable: false,
        prevArrow: '<div class="PrevArrow1"></div> <div class="PrevArrow2"></div>',
        nextArrow: '<div class="NextArrow1"></div> <div class="NextArrow2"></div>',
    });
    //////////////menu1
    $(".cross").hide();
    $(".hamburger").click(function () {
        $(".menu1").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menu1").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    $(window).resize(function () {

        var w = $(window).width();

        if (w > 320 && $(".menu1").is(':hidden')) {
            $(".hamburger").removeAttr('style');
            $(".menu1").removeAttr('style');

        }

    });
    //////////////
    $(".language-icon div > img").click(function () {
        $(".language-icon div > img").removeClass();
        $(".language-icon div > img").addClass("icon-notactive");
        $(this).removeClass();
        $(this).addClass("icon-active");

    });

    $("#i-rus").click(function () {
        $('#t-rus').css({
            display: "block"
        });
        $('#t-usa').css({
            display: "none"
        });
        $('#t-kaz').css({
            display: "none"
        });
        $('#name').attr('placeholder', 'Представтесь, пожалуйста');
        $('#tel').attr('placeholder', 'Ваш номер телефона');
        $('#email').attr('placeholder', 'Ваш электронный адрес');
        $('#text').attr('placeholder', 'Ваше сообщение');
    });

    $("#i-usa").click(function () {
        $('#t-rus').css({
            display: "none"
        });
        $('#t-usa').css({
            display: "block"
        });
        $('#t-kaz').css({
            display: "none"
        });
        $('#name').attr('placeholder', 'Introduce youreself');
        $('#tel').attr('placeholder', 'Your phone number');
        $('#email').attr('placeholder', 'Your email address');
        $('#text').attr('placeholder', 'Your message');
    });

    $("#i-kaz").click(function () {
        $('#t-rus').css({
            display: "none"
        });
        $('#t-usa').css({
            display: "none"
        });
        $('#t-kaz').css({
            display: "block"
        });
        $('#name').attr('placeholder', 'өзіңізді таныстырыңыз');
        $('#tel').attr('placeholder', 'Сіздің телефон нөмірі');
        $('#email').attr('placeholder', 'Сіздің электрондық пошта мекен-жайы');
        $('#text').attr('placeholder', 'Сіздің хабарламаңыз');
    });


    if ($(window).width() < 740) {
        $('.icon-notactive').css({
            display: "none"
        });
        $(".language-icon").click(function () {
            $(".icon-notactive").toggle("slow");
        });

    }

    //////////////popap
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

    open_modal.click(function (event) { // лoвим клик пo ссылке с клaссoм open_modal
        event.preventDefault(); // вырубaем стaндaртнoе пoведение
        var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
        overlay.fadeIn(400, //пoкaзывaем oверлэй
            function () { // пoсле oкoнчaния пoкaзывaния oверлэя
                $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект                    

                    .addClass('animationPopap'); // плaвнo пoкaзывaем
            });
    });

    open_modal.click(function () {
        if (modal.hasClass('animationPopap')) {
            modal // все мoдaльные oкнa
                .removeClass('animationPopap')
                .animate({
                        opacity: 1.0
                    }, 250, // плaвнo прячем
                    function () { // пoсле этoгo
                        $(this).css('display', 'none');
                        // прячем пoдлoжку

                    }
                );

            var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
            overlay.fadeIn(400, //пoкaзывaем oверлэй
                function () { // пoсле oкoнчaния пoкaзывaния oверлэя
                    $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                        .addClass('animationPopap');
                });
        }

    });

    close.click(function () { // лoвим клик пo крестику или oверлэю
        modal // все мoдaльные oкнa
            .removeClass('animationPopap')
            .animate({
                    opacity: 1.0
                }, 250, // плaвнo прячем
                function () { // пoсле этoгo
                    $(this).css('display', 'none');
                    overlay.fadeOut(400); // прячем пoдлoжку
                }
            );
    });

    $('.modal_div').jScrollPane({
        autoReinitialise: true,
        hideFocus: true,
        contentWidth: '0px'
    });


    $('.text3').click(function () {
        $('.popap').removeClass('animationPopapOut');
        $('.popap').addClass('animationPopap');
    });

    $('.close-popap').click(function () {
        $('.popap').removeClass('animationPopap');
        $('.popap').addClass('animationPopapOut');
    });

});
