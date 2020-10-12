$(document).ready(function () {
  AOS.init({
    // offset: 200,
    duration: 600,
    easing: "ease-in-out",
    once: false,
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
});

/* --- navbar fixed top on scroll fuction--- */
function stickyheader() {
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if (scroll > 100) {
    $(".header").addClass("scrolled");
  } else if (scroll <= 50) {
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
