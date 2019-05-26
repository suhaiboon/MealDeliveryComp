$(document).ready(function () {

/*-- Smooth Scroll To id
============================================================ --*/
    $('.smooth-menu').click(function(){
        if($(this.hash).height() > $(window).height()) {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-25
                }, 1000);
            } else {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top-(($(window).height() - $(this.hash).innerHeight())/2)
                }, 1000);
            }
        return false;
    });

/*-- Owl Carousel Top Categories
================================================== --*/
    $('.owl-carousel-top-categories').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        nav:false,
        margin:10,
        autoplayTimeout:2500,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            },
        }	
    });

/*-- Owl Carousel Appetizers
================================================== --*/
    $('.owl-carousel-appetizers').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        nav:false,
        margin:10,
        autoplayTimeout:2500,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            },
        }	
    });

/*-- Owl Carousel Chicken Seafood
================================================== --*/
    $('.owl-carousel-chicken-seafood').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayHoverPause:true,
        nav:false,
        margin:10,
        autoplayTimeout:2500,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            },
        }	
    });

});