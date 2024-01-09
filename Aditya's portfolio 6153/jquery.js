$(document).ready(function () {
  $(window).scroll(function () {
    
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

   //  scroll-up button show/hide script  //
   if (this.scrollY > 500) {
    $(".scroll-up-btn").addClass("show");
  } else {
    $(".scroll-up-btn").removeClass("show");
  }
});

  // text animation
  var typed = new Typed(".typing", {
    strings: [
      "Front-end Developer",
      "Java Developer",
      "Content Creator",
      "Student"
    ],
    typeSpeed: 150,
    backSpeed: 95,
    loop: true,
  });
  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //
    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // alert
  $(document).ready(function(){
  $(".button-area").click(function(){
    alert("The message has been sent.");
  });
});

//  Owl Carousel  //
  
$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    }
  }
});
