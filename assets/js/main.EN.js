$('.owl-header').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false,
            dots:true
        }
    }
});
$('.owl-articles').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
            dots:false
        }
    }
});
$( function() {
    $( "#datepicker" ).datepicker();
  } );
  $( function() {
    $( "#datepicker-2" ).datepicker();
  } );