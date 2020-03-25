
$(document).ready(function(){


$('#mobile-menu').meanmenu({
  meanScreenWidth: "767",
  meanMenuContainer: '.mobile-menu'
});



  function mainSlider() {
   var BasicSlider = $('.slider-active');
   BasicSlider.on('init', function(e, slick) {
   var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
   doAnimations($firstAnimatingElements);
   });
   BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
   var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
   doAnimations($animatingElements);
           });
   BasicSlider.slick({
     autoplay: false,
     autoplaySpeed: 10000,
     dots: true,
     fade: true,
     prevArrow:'<button type="button" class="prevarrow"><span><i class="fas fa-arrow-left"></i></span></button>',
    nextArrow:'<button type="button" class="nextarrow"><span><i class="fas fa-arrow-right"></i></span></button>',
   	arrows: true,
     responsive: [
       { breakpoint: 767, settings: { dots: false, arrows: false } }
               ]
           });

     function doAnimations(elements) {
         var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
         elements.each(function() {
             var $this = $(this);
             var $animationDelay = $this.data('delay');
             var $animationType = 'animated ' + $this.data('animation');
             $this.css({
                 'animation-delay': $animationDelay,
                 '-webkit-animation-delay': $animationDelay
       });
       $this.addClass($animationType).one(animationEndEvents, function() {
           $this.removeClass($animationType);
                   });
               });
           }
       }
       mainSlider();

       $('.counter').counterUp({
           delay: 30,
           time: 1000,
           offset: 70,
           beginAt: 100,
           formatter: function (n) {
             return n.replace(/,/g, '.');
           }
       });


       $('.testimonial-active').slick({
         dots: true,
         infinite: false,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1,
         responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
             }
           },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
           // You can unslick at a given breakpoint now by adding:
           // settings: "unslick"
           // instead of a settings object
         ]
       });


       $('.brand-active').owlCarousel({
             loop:true,
             margin:10,
             nav:false,
             responsive:{
                 0:{
                     items:5
                 },
                 600:{
                     items:5
                 },
                 1000:{
                     items:5
                 }
             }
         })













});
