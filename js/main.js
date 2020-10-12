$(document).ready(function () {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
  });

  /* --- navbar fixed top on scroll --- */
  stickyheader();
  $(window).scroll(function () {
    stickyheader();
  });

  /* --- navbar opens the parent dropdown link --- */
  if ($(window).width() > 1100) {
    $(".navbar .dropdown > a").on("click", function () {
      //   console.log(this.text);
      location.href = this.href;
    });
  }
  // home swiper fuction
  if ($(".home-swiper .swiper-slide").length > 1) {
    var swiper01 = new Swiper(".home-swiper", {
      loop: false,
      //slidesPerView: 'auto',
      effect: "fade",
      lazy: true,
      spaceBetween: 10,
      centeredSlides: true,
      speed: 2000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      fadeEffect: {
        crossFade: true,
      },
      // navigation: {
      //   nextEl: ".mainSlider .swiper-button-next",
      //   prevEl: ".mainSlider .swiper-button-prev",
      // },
    });
  }

  if ($(".services-homeLinks .swiper-container .swiper-slide").length >= 1) {
    var swiper02 = new Swiper(".services-homeLinks .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
  }
});

/* --- navbar fixed top on scroll fuction--- */
function stickyheader() {
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if (scroll > 110) {
    $(".header").addClass("scrolled");
  } else if (scroll <= 70) {
    $(".header").removeClass("scrolled");
  }
}
/* --- opens navbar dropdown on mouse hover --- */
function toggleDropdown(e) {
  const _d = $(e.target).closest(".dropdown"),
    _m = $(".dropdown-menu", _d);
  setTimeout(
    function () {
      const shouldOpen = e.type !== "click" && _d.is(":hover");
      _m.toggleClass("show", shouldOpen);
      _d.toggleClass("show", shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr("aria-expanded", shouldOpen);
    },
    e.type === "mouseleave" ? 300 : 0
  );
}
$("body")
  .on("mouseenter mouseleave", ".dropdown", toggleDropdown)
  .on("click", ".dropdown-menu a", toggleDropdown);
