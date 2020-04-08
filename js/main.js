/*global $, alert, mixitup, console*/
$(function () {
    "use strict";
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    $('.carousel').carousel({
        interval: 2000
    });
        // Smooth scroll to div
    
    $('.navbar-nav li a').click(function (e) {
        
        e.preventDefault();
        
        $('html , body').animate({
             
            scrollTop: $('#' + $(this).data('scroll')).offset().top
            
        }, 1000);
    });
    $('.btn-white').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
             
            scrollTop: $('#' + $(this).data('scroll')).offset().top
            
        }, 1000);
    });
    $('.btn-warning').on('click', function () {
        $('.more').fadeToggle();
    });
        // gallery shuffl
    
    $('.project ul li').on('click', function () {
        
        $(this).addClass('slicted').siblings().removeClass('slicted');
    });
    
    var mixer = mixitup('#container');
    // magnificPopup

    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('#slides').slideshow({
        randomize: true,      // Randomize the play order of the slides.
        slideDuration: 6000,  // Duration of each induvidual slide.
        fadeDuration: 1000,    // Duration of the fading transition. Should be shorter than slideDuration.
        animate: true,        // Turn css animations on or off.
        pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
        enableLog: true      // Enable log messages to the console. Useful for debugging.
    });
    
    $('.mouse-scroll').on('click', function () {
        $('html , body').stop().animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1500);
        event.preventDefault();
    });

});
