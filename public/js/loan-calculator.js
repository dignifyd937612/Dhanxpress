(function ($) {
  "use strict";

  // =========================================
  // INIT LOAN CALCULATOR
  // =========================================

  function initLoanCalculator() {
    if (!$("#loan-calculator-1").length) return;

    // =========================================
    // SELECTORS
    // =========================================

    const principalSlider = "#calculator-pricipal-slide";

    const tenureSlider = "#calculator-totalyear-slide";

    const interestSlider = "#calculator-intrest-slide";

    // =========================================
    // DESTROY OLD SLIDERS
    // =========================================

    [principalSlider, tenureSlider, interestSlider].forEach((selector) => {
      const el = $(selector);

      if (el.hasClass("ui-slider")) {
        try {
          el.slider("destroy");
        } catch (e) {}

        // remove old handles

        el.find(".ui-slider-handle").remove();

        el.find(".ui-slider-range").remove();

        // remove old classes

        el.removeClass(
          "ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content",
        );

        // remove inline styles

        el.removeAttr("style");
      }
    });

    // =========================================
    // LOAN AMOUNT SLIDER
    // =========================================

    $(principalSlider).slider({
      range: "min",

      min: 10000,

      max: 5000000,

      value: 1000000,

      step: 1000,

      slide: function (event, ui) {
        $("#calculator-pricipal").text(ui.value);

        loancalculate();
      },
    });

    $("#calculator-pricipal").text($(principalSlider).slider("value"));

    // =========================================
    // TENURE SLIDER
    // =========================================

    $(tenureSlider).slider({
      range: "min",

      min: 12,

      max: 360,

      step: 6,

      value: 120,

      slide: function (event, ui) {
        $("#calculator-totalyear").text(ui.value);

        $("#calculator-t_m").text(ui.value);

        loancalculate();
      },
    });

    $("#calculator-totalyear").text($(tenureSlider).slider("value"));

    $("#calculator-t_m").text($(tenureSlider).slider("value"));

    // =========================================
    // INTEREST SLIDER
    // =========================================

    $(interestSlider).slider({
      range: "min",

      min: 4.1,

      max: 16.2,

      step: 0.01,

      value: 10,

      slide: function (event, ui) {
        $("#calculator-intrest").text(ui.value);

        $("#calculator-t_ir").text(ui.value);

        loancalculate();
      },
    });

    $("#calculator-intrest").text($(interestSlider).slider("value"));

    $("#calculator-t_ir").text($(interestSlider).slider("value"));

    // =========================================
    // INITIAL CALC
    // =========================================

    loancalculate();

    // =========================================
    // FORCE REFLOW
    // =========================================

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("resize"));
      });
    });
  }

  // =========================================
  // EMI CALCULATION
  // =========================================

  function loancalculate() {
    const loanAmount = parseFloat($("#calculator-pricipal").text()) || 0;

    const numberOfMonths = parseFloat($("#calculator-totalyear").text()) || 0;

    const rateOfInterest = parseFloat($("#calculator-intrest").text()) || 0;

    const monthlyInterestRatio = rateOfInterest / 100 / 12;

    const top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);

    const bottom = top - 1;

    const sp = top / bottom;

    const emi = loanAmount * monthlyInterestRatio * sp;

    const full = numberOfMonths * emi;

    const interest = full - loanAmount;

    const emi_str = emi.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const full_str = full.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const int_str = interest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    $("#calculator-emi").html(emi_str);

    $("#calculator-tbl-emi").html(int_str);

    $("#calculator-tbl-la").html(full_str);
  }

  // =========================================
  // GLOBAL INIT
  // =========================================

  window.initLoanCalculator = initLoanCalculator;

  // =========================================
  // INITIAL LOAD
  // =========================================

  $(window).on("load", function () {
    initLoanCalculator();
  });
})(jQuery);
