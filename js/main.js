$(function () {
  AOS.init({
    duration: 600,
    easing: "linear",
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

  // home service banners swiper
  if ($(".Services-HomeLinks .swiper-slide").length >= 1) {
    var swiper02 = new Swiper(".Services-HomeLinks .swiper-container", {
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

  // home events swiper
  if ($(".EventSwiper .swiper-slide").length >= 1) {
    var swiper03 = new Swiper(".EventSwiper .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".EventSwiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".EventSwiper .swiper-button-next",
        prevEl: ".EventSwiper .swiper-button-prev",
      },
    });
  }
  // datepicker calendar
  $("#datepicker").datepicker({
    dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
    showOtherMonths: true,
    selectOtherMonths: false,
  });

  // datepicker calendar
  var dPicker = $("#datepicker");
  if (dPicker.length) {
    $("#datepicker").datepicker({
      dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
      showOtherMonths: true,
      selectOtherMonths: false,
    });
  }

  // CSV LocalBusiness swiper
  if ($(".CSV-LocalBusiness .swiper-slide").length >= 1) {
    var swiper05 = new Swiper(".CSV-LocalBusiness .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,

      navigation: {
        nextEl: ".CSV-LocalBusiness .swiper-button-next",
        prevEl: ".CSV-LocalBusiness .swiper-button-prev",
      },
      pagination: {
        el: ".CSV-LocalBusiness .swiper-pagination",
        clickable: true,
      },
    });
  }

  // home MC News swiper
  if ($(".HomeNews-Swiper .swiper-slide").length >= 1) {
    var swiper04 = new Swiper(".HomeNews-Swiper .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      scrollbar: {
        el: ".HomeNews-Swiper .swiper-scrollbar",
        hide: false,
      },
      navigation: {
        nextEl: ".HomeNews-Swiper .swiper-button-next",
        prevEl: ".HomeNews-Swiper .swiper-button-prev",
      },
    });
  }
  // About Lama
  $("#aboutLamaToggle").on("click", function () {
    $(this).toggleClass("expanded");
    $("#aboutLama").slideToggle();
  });

  // select 2
  $(".custom-select").select2();
});

// custom file upload plugin init
if ($(".file-loading").length) {
  $(".Cfile-upload").fileinput({
    showUpload: false,
    previewFileType: "any",
    showPreview: false,
    showCancel: false,
    browseLabel: "Upload certificate",
    browseClass: "mx-2 btn btn-outline-primary browse-btn border-radius",
    browseIcon: '<i class="icon icon-upload"></i>',
    removeClass: "order-2 btn btn-secondary",
    removeLabel: "",
    removeIcon: '<i class="icon icon-trash"></i>',
    mainClass: "mb-3",
    previewFileIcon: false,
  });
}
// toggle show hide custom upload function
$(".upload-checkbox").click(function () {
  if ($(this).prop("checked") == true) {
    console.log("Checkbox is checked.");
    $(".custom-file-upload").removeClass("d-none");
  } else if ($(this).prop("checked") == false) {
    console.log("Checkbox is unchecked.");
    $(".custom-file-upload").addClass("d-none");
  }
});
// Business custom file upload
if ($(".file-loading").length) {
  $(".business-upload").fileinput({
    showUpload: false,
    previewFileType: "any",
    showPreview: false,
    showCancel: false,
    browseLabel: "Upload",
    browseClass: "mx-2 btn btn-outline-primary browse-btn border-radius",
    browseIcon: '<i class="icon icon-upload"></i>',
    removeClass: "order-2 btn btn-secondary",
    removeLabel: "",
    removeIcon: '<i class="icon icon-trash"></i>',
    mainClass: "mb-3",
    previewFileIcon: false,
  });
}
// Business upload tabs
$('input[name="intervaltype"]').click(function () {
  $(this).tab("show");
  $(this).removeClass("active");
});

/* --- navbar fixed top on scroll fuction--- */
function stickyheader() {
  var scroll = $(window).scrollTop();
  // console.log(scroll);
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
