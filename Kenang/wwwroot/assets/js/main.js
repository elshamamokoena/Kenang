(function($) {
    ("use strict");
    
    //===== Main Menu
    function siteNav() {
        // Variables
        var windowOn = $(window),
            navContainer = $('.site-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close'),
            bodyOverlay = $('.body-overlay');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
            bodyOverlay.addClass('opened');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
            bodyOverlay.removeClass('opened');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="dd-trigger"><i class="ti-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('res-breakpoint');
            } else {
                navContainer.removeClass('res-breakpoint');
            }
        }
        breakpointCheck();
        windowOn.on('resize', function() {
            breakpointCheck();
        });
    };
    //===== Document Ready
    $(document).ready(function() {
        siteNav();
    });

    //===== Sticky Nav
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".site-navigation").removeClass("sticky");
        } else {
            $(".site-navigation").addClass("sticky");
        }
    });

    //===== Preloader
    $(window).on('load', function(event) {
        $('#preLoader').fadeOut(900);
        $(".preloader_bg").delay(800).fadeOut(900);
    });

    //===== Search Popup
    if ($('.search-toggler').length) {
        $('.search-toggler').on('click', function() {
            $('body').addClass('search__box-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search__box-active');
        });
    }

    //===== Scroll Up
    jQuery('body').append('<a href="javascript:void(0)" class="scroll__up"><i class="uicon-up-arrow"></i></a>');
    var btn = jQuery('.scroll__up');
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, '300');
    });

    //===== Data Background
    $("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    //===== Parallax Js
	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	};
	
	if ($('.scene-2').length > 0) {
		$('.scene-2').parallax({
			scalarX: 15.0,
			scalarY: 15.0,
		});
	};

    //===== Jarallax
    if ($('.jarallax').length > 0) {
		$('.jarallax').jarallax({
			speed: 0.2,
			imgWidth: 1366,
			imgHeight: 768
		});
	};

    //===== Sidebar Box Open/Close
    $('.sidebar-icon.open').on('click', function () {
        $('.sidebar-box').fadeIn().addClass('active');
    });
    $('.sidebar-box').on('click', function () {
        $(this).fadeOut().removeClass('active');
    });
    $('.sidebar-box__icon.close').on('click', function () {
        $('.sidebar-box').fadeOut().removeClass('active');
    });
    $('.sidebar-box .inner__content').on('click', function (e) {
        e.stopPropagation();
    });
    
    //===== Odometer
    if ($(".odometer").length) {
        var odo = $(".odometer");
        odo.each(function () {
          $(this).appear(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
          });
        });
      }
    
    //===== Home Slider
    if (jQuery(".slider__active").length > 0) {
        let sliderActive1 = ".slider__active";
        let sliderInit1 = new Swiper(sliderActive1, {
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
            },
            a11y: false,
        });

        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function() {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this).removeClass("anim" + anim).addClass(anim + " animated").css({
                        webkitAnimationDelay: delay,
                        animationDelay: delay,
                        webkitAnimationDuration: duration,
                        animationDuration: duration,
                    }).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        $(this).removeClass(anim + " animated");
                    });
                });
            };
            animated();
            init.on("slideChange", function() {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive1, sliderInit1);
    }
    
    //===== Nice Select
    $("select").niceSelect();

    //===== Grid
    $('.grid').imagesLoaded(function() {
        var $grid = $(".grid").isotope({});
        $(".filter__btn-group").on("click", "button", function() {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({
                filter: filterValue
            });
        });
        $(".project__menu button").on("click", function(event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });
    });
    
    //===== Magnific Popup
    $(".image-popups").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });
    $(".popup-video").magnificPopup({
        type: "iframe",
    });
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });
    $('.dot').on('mouseenter', function() {
        $(this).addClass('active').parent().siblings().find('.dot').removeClass('active');
    });
    var handle = $("#custom-handle");

    //===== Testimonial Slider
    const testimonial = new Swiper(".testimonial-slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            '1400': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: false,
            },
            '768': {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 10,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    //===== Services Slider
    const services = new Swiper(".service-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".services-button-next",
            prevEl: ".services-button-prev",
        },
        breakpoints: {
            '1400': {
                slidesPerView: 4,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });
    const single_service = new Swiper(".single-service-slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".services-button-next",
            prevEl: ".services-button-prev",
        },
        breakpoints: {
            '1400': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });
    //===== Team Slider
    const team = new Swiper(".team-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".services-button-next",
            prevEl: ".services-button-prev",
        },
        breakpoints: {
            '1400': {
                slidesPerView: 4,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });
    //===== Blog Slider
    const blog = new Swiper(".post-slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            '1400': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: false,
            },
            '768': {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 10,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });
    //===== Brand Slider
    const partner = new Swiper(".brand-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: false,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            '1400': {
                slidesPerView: 5,
                centeredSlides: true,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 3,
                spaceBetween: 60,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });
    
    //===== Wow
    var wow = new WOW({
        mobile: false,
    });
    wow.init();

})(jQuery);