(function ($) {
  "use strict";

  // =========================
  // MAIN INIT FUNCTION
  // =========================

  function initThemeScripts() {
    // =========================
    // TESTIMONIAL SWIPER
    // =========================

    if (
      $(".testimonials-two__carousel__slider").length &&
      $(".testimonials-two__carousel__thumbs").length
    ) {
      const sliderEl = document.querySelector(
        ".testimonials-two__carousel__slider",
      );

      const thumbsEl = document.querySelector(
        ".testimonials-two__carousel__thumbs",
      );

      // destroy existing

      if (sliderEl?.swiper) {
        sliderEl.swiper.destroy(true, true);
      }

      if (thumbsEl?.swiper) {
        thumbsEl.swiper.destroy(true, true);
      }

      // main slider

      var slider = new Swiper(".testimonials-two__carousel__slider", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopedSlides: 6,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      // thumbs

      var thumbs = new Swiper(".testimonials-two__carousel__thumbs", {
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
      });

      slider.controller.control = thumbs;
      thumbs.controller.control = slider;
    }

    // =========================
    // CIRCLE GRAPHIC
    // =========================

    $(".circleGraphic").each(function () {
      let elm = $(this);

      if (elm.hasClass("circle-loaded")) return;

      let options = elm.data("circle-options");

      elm.circleGraphic(
        typeof options === "object" ? options : JSON.parse(options),
      );

      elm.addClass("circle-loaded");
    });

    // =========================
    // LOAN CALCULATOR
    // =========================

    if ($("#loan-calculator").length) {
      var monthRange = document.getElementById("range-slider-month");

      var countRange = document.getElementById("range-slider-count");

      // destroy existing

      if (monthRange?.noUiSlider) {
        monthRange.noUiSlider.destroy();
      }

      if (countRange?.noUiSlider) {
        countRange.noUiSlider.destroy();
      }

      var limitFieldMinMonth = document.getElementById(
        "min-value-rangeslider-month",
      );

      var limitFieldMinCount = document.getElementById(
        "min-value-rangeslider-count",
      );

      // month slider

      noUiSlider.create(monthRange, {
        start: 8,

        behaviour: "snap",

        step: 1,

        tooltips: [
          wNumb({
            decimals: 0,
          }),
        ],

        connect: [true, false],

        range: {
          min: 1,
          max: 12,
        },
      });

      // amount slider

      noUiSlider.create(countRange, {
        start: 16000,

        step: 1000,

        tooltips: [
          wNumb({
            decimals: 0,
            prefix: "₹",
          }),
        ],

        behaviour: "snap",

        connect: [true, false],

        range: {
          min: 1000,
          max: 40000,
        },
      });

      // update function

      function updateLoanCalc() {
        let loanMonth = parseInt(limitFieldMinMonth.value || 1);

        let loanMoney = parseInt(limitFieldMinCount.value || 1000);

        let interestRate = parseInt(
          $("#loan-calculator").data("interest-rate"),
          10,
        );

        let interestRatePercent = interestRate / 100;

        let totalPay = loanMoney * interestRatePercent + loanMoney;

        let monthlyPay = totalPay / loanMonth;

        $("#loan-month").html(loanMonth);

        $("#loan-monthly-pay").html(parseInt(monthlyPay));

        $("#loan-total").html(parseInt(totalPay));
      }

      // listeners

      monthRange.noUiSlider.on("update", function (values) {
        limitFieldMinMonth.value = parseInt(values[0]);

        updateLoanCalc();
      });

      countRange.noUiSlider.on("update", function (values) {
        limitFieldMinCount.value = parseInt(values[0]);

        updateLoanCalc();
      });

      updateLoanCalc();
    }

    // =========================
    // SCROLL TO TARGET
    // =========================

    $(document)
      .off("click", ".scroll-to-target")
      .on("click", ".scroll-to-target", function (e) {
        e.preventDefault();

        var target = $(this).attr("data-target");

        $("html, body").animate(
          {
            scrollTop: $(target).offset().top,
          },
          1000,
        );
      });

    // =========================
    // MOBILE NAV
    // =========================

    if ($(".mobile-nav__container").length) {
      let mobileNavContainer = document.querySelector(".mobile-nav__container");

      // prevent duplicate mobile nav
      if (!mobileNavContainer.hasChildNodes()) {
        let navContent = document.querySelector(".main-menu").innerHTML;

        mobileNavContainer.innerHTML = navContent;
      }
    }

    // =========================
    // STICKY HEADER CONTENT
    // =========================

    if ($(".sticky-header__content").length) {
      let stickyContainer = document.querySelector(".sticky-header__content");

      // prevent duplicate injection
      if (!stickyContainer.hasChildNodes()) {
        let navContent = document.querySelector(".main-menu").innerHTML;

        stickyContainer.innerHTML = navContent;
      }
    }

    // =========================
    // MOBILE MENU TOGGLER
    // =========================

    $(document)
      .off("click", ".mobile-nav__toggler")
      .on("click", ".mobile-nav__toggler", function (e) {
        e.preventDefault();

        $(".mobile-nav__wrapper").toggleClass("expanded");
      });

    $(document)
      .off("click", ".mobile-nav__menu a")
      .on("click", ".mobile-nav__menu a", function () {
        $(".mobile-nav__wrapper").removeClass("expanded");
      });

    // =========================
    // SEARCH TOGGLER
    // =========================

    $(document)
      .off("click", ".search-toggler")
      .on("click", ".search-toggler", function (e) {
        e.preventDefault();

        $(".search-popup").toggleClass("active");
      });

    // =========================
    // ODOMETER
    // =========================

    // =========================
    // ODOMETER
    // =========================

    if ($(".odometer").length) {
      $(".odometer").each(function () {
        const $this = $(this);

        const countNumber = $this.data("count");

        // already initialized
        if ($this.hasClass("odometer-loaded")) return;

        // init odometer
        const od = new Odometer({
          el: this,
          value: 0,
          duration: 2000,
        });

        // small delay for animation trigger
        setTimeout(() => {
          od.update(countNumber);
        }, 300);

        $this.addClass("odometer-loaded");
      });
    }

    // =========================
    // WOW JS
    // =========================

    if ($(".wow").length) {
      $(".wow").removeClass("animated wow-animated");

      var wow = new WOW({
        boxClass: "wow",

        animateClass: "animated",

        mobile: true,

        live: false,
      });

      wow.init();
    }

    // =========================
    // CUSTOM FAQ ACCORDION
    // =========================

    $(document)
      .off("click", "#accordion .para-title")
      .on("click", "#accordion .para-title", function () {
        const parent = $(this).parent();

        const collapse = parent.find(".collapse");

        // close others

        $("#accordion li").not(parent).removeClass("active");

        $("#accordion .para-title").not(this).removeClass("active");

        $("#accordion .collapse")
          .not(collapse)
          .slideUp(300)
          .removeClass("show");

        $("#accordion .para-title")
          .not(this)
          .find("i")
          .removeClass("fa-minus")
          .addClass("fa-plus");

        // current toggle

        if (collapse.hasClass("show")) {
          collapse.slideUp(300).removeClass("show");

          parent.removeClass("active");

          $(this).removeClass("active");

          $(this).find("i").removeClass("fa-minus").addClass("fa-plus");
        } else {
          collapse.slideDown(300).addClass("show");

          parent.addClass("active");

          $(this).addClass("active");

          $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
        }
      });
    // =========================
    // GLOBAL SWIPER
    // =========================

    const swiperElm = document.querySelectorAll(".thm-swiper__slider");

    swiperElm.forEach(function (swiperelm) {
      try {
        if (swiperelm.swiper) {
          swiperelm.swiper.destroy(true, true);
        }

        const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);

        new Swiper(swiperelm, swiperOptions);
      } catch (err) {
        console.log(err);
      }
    });

    // =========================
    // STICKY HEADER
    // =========================

    handleStickyHeader();
  }

  // =========================
  // STICKY HEADER FUNCTION
  // =========================

  function handleStickyHeader() {
    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;

      var stricky = $(".stricked-menu");

      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else {
        stricky.removeClass("stricky-fixed");
      }
    }

    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;

      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else {
        $(".scroll-to-top").fadeOut(500);
      }
    }
  }

  // =========================
  // INITIAL LOAD
  // =========================

  function reInitAllScripts() {
    initThemeScripts();

    handleStickyHeader();

    $(window).trigger("scroll");

    $(window).trigger("resize");
  }

  // expose globally

  window.initThemeScripts = reInitAllScripts;

  // initial run

  $(document).ready(function () {
    reInitAllScripts();
  });

  // =========================
  // WINDOW EVENTS
  // =========================

  $(window)
    .off("scroll.sticky")
    .on("scroll.sticky", function () {
      handleStickyHeader();
    });

  $(window)
    .off("load.sticky")
    .on("load.sticky", function () {
      if ($(".preloader").length) {
        $(".preloader").fadeOut();
      }

      reInitAllScripts();
    });
})(jQuery);
