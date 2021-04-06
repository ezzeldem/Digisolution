$(document).ready(function () {
  $(".menu-icon > i").click(function () {
      $(".over-lay").show();
      $(".links").addClass("right0");
      $("body").addClass("body-over");
  });

  $(".exite-icon > i, .over-lay").click(function () {
      $(" .over-lay").hide();
      $(".links").removeClass("right0");
      $("body").removeClass("body-over");
  });

  $(".testimonials-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      outhight: true,
      autoplaySpeed: 1100,
      autoplay: true,
      infinite: true,
      responsive: [
          {
              breakpoint: 997,
              settings: {
                  slidesToShow: 2,
              },
          },
          {
              breakpoint: 772,
              settings: {
                  slidesToShow: 1,
                  prevArrow: false,
                  nextArrow: false,
              },
          },
      ],
  });

  AOS.init();












	
//   $(".audioDemo").trigger('load');
  
  $(".audioDemo").bind("load",function(){
      $(".alert-success").html("Audio Loaded succesfully");
    });

 

  
});
