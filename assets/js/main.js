// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(function(){
    if ($(window).width() < 960){
        $('.feedback__form input, .feedback__form textarea').blur(function () {
            if($(this).val() !== '') {
                $(this).addClass('has-text');
                $(this).removeClass('empty');
            } else {
                $(this).addClass('empty');
                $(this).removeClass('has-text');
            }
        });
        $('.catalog__prods-row').each(function () {
            $(this).addClass('swiper-slide');
            $(this).appendTo($('#mobislider .swiper-wrapper'));
        });

        var swiperP = new Swiper('#mobislider', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            navigation: {
                nextEl: '#swiper-button-next',
                prevEl: '#swiper-button-prev',
            }
        });
    }

    $('.header__nav-menu-close').click(function () {
        $(this).parent().css('display', 'none');
    });

    $('.header__nav-menu-show').click(function () {
        $('.header__nav-menu').css('display', 'flex');
    });

    $('.nav__m-button').on('click', function(){
        $(this).toggleClass('nav__m-button_active');
        $('.header__nav').toggleClass('header__nav_active');
        $('.main').toggleClass('main__nav_active');
    });

    // wow animate
    wow = new WOW(
        {
            mobile: false
        }
    );
    wow.init();


    // slider ВКУСНЯШКИ
    $('.yummy__slider-list').slick({
        asNavFor: '.yummy__slider-text',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '',
        prevArrow: '<button type="button" class="yummy__slider-arrow prev"></button>',
        nextArrow: '<button type="button" class="yummy__slider-arrow next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]


    });
    $('.yummy__slider-text').slick({
        asNavFor: '.yummy__slider-list',
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '',
        fade: true,
        arrows: false
    });

    // slider Интересное для мам
    $('.mom__slider').slick({
        asNavFor: '.mom__slider-btn',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.mom__slider-btn').slick({
        asNavFor: '.mom__slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 0,
        dots: false
    });


    // parallax easy-parallax


    function resizeScrenn(){
        if ($(window).width() >= 960){
            $.fn.extend({
                jParallax: function(opt) {
                    var defaults = { moveFactor: 5, targetContainer: 'body' },
                        o = $.extend(defaults, opt);
                    return this.each(function() {
                        var background = $(this);
                        $(o.targetContainer).on('mousemove', function(e){
                            mouseX = e.pageX;
                            mouseY = e.pageY;
                            windowWidth = $(window).width();
                            windowHeight = $(window).height();
                            percentX = (0-((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
                            percentY = 0;//(0-((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
                            background[0].style.transform = "translate("+percentX+"%,"+percentY+"%)";
                        });
                    });
                }
            });
        } else {
        }
    }
    resizeScrenn();
    $(window).resize(function(){
        resizeScrenn();
    });

    // ПОСМОТРИТЕ ФОТОАЛЬБОМ
    $('.photo__slider').slick({
        asNavFor: '.photo__slider-links',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '',
        arrows: false,
    });
    $('.photo__slider-links').slick({
        asNavFor: '.photo__slider',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '',

        prevArrow: '<button type="button" class="photo__slider-arrow prev"></button>',
        nextArrow: '<button type="button" class="photo__slider-arrow next"></button>'
    });

    if ($(window).width() >= 960){

        // верх на главной
        $('.first__cloud').jParallax({ moveFactor: 10, targetContainer:  '.section_first' });
        $('.shake').jParallax({ moveFactor: 10, targetContainer:  '.section_first' });

        // вкусняшки
        $('.fruit_11').jParallax({ moveFactor: 15, targetContainer:  '.section_yummy' });
        $('.fruit_9').jParallax({ moveFactor: 30, targetContainer:  '.section_yummy' });

        // интересное для мам
        $('.mom__hedgehog').jParallax({ moveFactor: 2, targetContainer:  '.section_mom' });

        // конкурсы почемучки
        $('.contest__circle_1').jParallax({ moveFactor: 5, targetContainer: '.contest' });
        $('.contest__circle_2').jParallax({ moveFactor: 10, targetContainer: '.contest' });
        $('.contest__cloud').jParallax({ moveFactor: 3, targetContainer: '.contest' });


        $('[jparallax]').each(function () {
            $(this).jParallax({
                moveFactor: $(this).attr('jparallax'),
                //targetContainer:  '.catalog__bg-color'
            });
        });
    }


    // feedback
    // label effect
    $('.form__group input').each(function() {
        if ($(this).val() != "") {
            $(this).parent().addClass('form__group_active');
        }
    });
    $('.form__group input, .form__group textarea').focus(function(){
        $(this).parent().addClass('form__group_active');
    });
    $('.form__group input, .form__group textarea').focusout(function(){
        if($(this).val() === "")
            $(this).parent().removeClass('form__group_active');
    });


    // game
    var medal = $('.game__medal'),
        playGameBtn = $('.game__cloud .btn-blue');

    //1. Загрузка страницы → добавляются ко всем медалям класс disable
    function preStartgame(){
        medal.addClass('disable');
    }
    preStartgame();

    //2. При клике на кнопку играть → у всех медалей:
    // удаляется класс disable, добавляется enable,
    // а затем через 2 секунды
    // удаляется enable, добавляется disable
    function startgame() {
        medal.each(function() {
            $(this).removeClass('disable').addClass('enable');
            $(this + 'img').addClass('dvndjdnjdnvjd');
            setTimeout (function() {
                medal.removeClass('enable').addClass('disable');
            }, 2000);
        });
    }
    //это клик на кнопку играть
    playGameBtn.click(function(){
        startgame();
    });

    // показываем при клике на медаль → ягодку
    function openFruit() {
        medal.on('click', function(){
            $(this).toggleClass('disable').toggleClass('enable');
        })
    }
    openFruit();

    //на этом мои знания закончились)


    // и пришлось позаимствовать
    var boxopened = "";
    var imgopened = "";
    var count = 0;
    var found =  0;

    function randomFromTo(from, to){
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    function shuffle() {
        var children = $("#game__medals").children();
        var child = $("#game__medals .game__medal:first-child");

        var array_img = new Array();

        for (i=0; i<children.length; i++) {
            array_img[i] = $("#"+child.attr("id")+" img").attr("src");
            child = child.next();
        }

        var child = $("#game__medals .game__medal:first-child");

        for (z=0; z<children.length; z++) {
            randIndex = randomFromTo(0, array_img.length - 1);

            // set new image
            $("#"+child.attr("id")+" img").attr("src", array_img[randIndex]);
            array_img.splice(randIndex, 1);

            child = child.next();
        }
    }

    function resetGame() {
        shuffle();
        $("img").hide();
        $("img").removeClass("opacity");
        count = 0;
        $("#msg").remove();
        $("#count").html("" + count);
        boxopened = "";
        imgopened = "";
        found = 0;
        return false;
    }

    $(document).ready(function() {
        $(".game__medal img").hide();
        $(".game__medal").click(openCard);

        shuffle();

        function openCard() {

            id = $(this).attr("id");

            if ($("#"+id+" img").is(":hidden")) {
                $(".game__medal").unbind("click", openCard);

                $("#"+id+" img").slideDown('fast').parent().removeClass('disable').addClass('enable');

                if (imgopened == "") {
                    boxopened = id;
                    imgopened = $("#"+id+" img").attr("src");
                    setTimeout(function() {
                        $("#game__medals div").bind("click", openCard)
                    }, 300);
                } else {
                    currentopened = $("#"+id+" img").attr("src");
                    if (imgopened != currentopened) {
                        // close again
                        setTimeout(function() {
                            $("#"+id+" img").slideUp('fast').parent().removeClass('enable').addClass('disable');
                            $("#"+boxopened+" img").slideUp('fast').parent().removeClass('enable').addClass('disable');
                            boxopened = "";
                            imgopened = "";
                        }, 400);
                    } else {
                        // found
                        // $("#"+id+" img").addClass("opacity");
                        // $("#"+boxopened+" img").addClass("opacity");
                        found++;
                        boxopened = "";
                        imgopened = "";
                    }

                    setTimeout(function() {
                        $(".game__medal").bind("click", openCard)
                    }, 400);
                }


                count++;
                $("#count").html("" + count);

                if (found = 5) {
                    msg = '<span id="msg">Нашли все фруктики</span>';
                    $(".game__msn").prepend(msg);
                }
            }
        }
    });

    var swiper = new Swiper('.cinema__photo-slider', {
        slidesPerView: 3,
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });

    var swiper2 = new Swiper('.mom2__tv-slider', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
        }
    });

    swiper2.on('slideChange', function () {
        setTimeout(function () {
            var title = $('.mom2__tv-slider .swiper-slide-active').find('.mom2__slide-caption-title').html();
            $('.mom2__caption-title').html(title);
            var text = $('.mom2__tv-slider .swiper-slide-active').find('.mom2__slide-caption-text').html();
            $('.mom2__caption-text').html(text);
        }, 400);
    });

    var swiper3 = new Swiper('.slider__mir-header', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
    });

    var swiperDefault = new Swiper('.swiper-container', {
        loop: true,
    });

    var swiper4 = new Swiper('.slider__mir-preview-slider', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
        slideToClickedSlide: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
        }
    });

    if (typeof swiper3.controller !== 'undefined') {
        swiper3.controller.control = swiper4;
    }
    if (typeof swiper4.controller !== 'undefined') {
        swiper4.controller.control = swiper3;
    }

    $('[class*="bubble"]').each(function () {
        var bubble = $(this);
        setInterval(function () {
            $(bubble).css("transform", "translate(" + getRandomInt(-200, 200) + "%," + getRandomInt(-200, 200) + "%)");
        }, getRandomInt(5, 10)*1000);
    });

    $('[class*="games__ballon-"]').each(function () {
        var bubble = $(this);
        $(bubble).css("transform", "translate(" + getRandomInt(-80, 80) + "%," + getRandomInt(-80, 80) + "%)");
        setInterval(function () {
            $(bubble).css("transform", "translate(" + getRandomInt(-80, 80) + "%," + getRandomInt(-80, 80) + "%)");
        }, getRandomInt(5, 10)*1000);
    });

    $('[class*="konkursy__ballon"]').each(function () {
        var bubble = $(this);
        $(bubble).css("transform", "translate(" + getRandomInt(-10, 10) + "%," + getRandomInt(-10, 10) + "%)");
        setInterval(function () {
            $(bubble).css("transform", "translate(" + getRandomInt(-10, 10) + "%," + getRandomInt(-10, 10) + "%)");
        }, getRandomInt(5, 10)*1000);
    });


    var swiper2a = new Swiper('.catalog__prod-img__container.cat-detail', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
        }
    });

});