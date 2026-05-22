(function ($) {
  "use strict";

  // =========================================
  // INIT LOAN ELIGIBILITY
  // =========================================

  function initLoanEligibility() {
    if (!$("#loan-eligibility").length) return;

    // =========================================
    // CLEAN OLD SLIDERS
    // =========================================

    const sliders = [
      "#pricipal-slide",
      "#income-slide",
      "#totalyear-slide",
      "#intrest-slide",
      "#other-emi-slide",
    ];

    sliders.forEach((selector) => {
      const el = $(selector);

      // destroy old slider

      if (el.hasClass("ui-slider")) {
        try {
          el.slider("destroy");
        } catch (e) {}

        // remove old ui elements

        el.find(".ui-slider-handle").remove();

        el.find(".ui-slider-range").remove();

        // clean classes

        el.removeClass(
          "ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content",
        );

        // clean inline styles

        el.removeAttr("style");
      }
    });

    // =========================================
    // PRINCIPAL SLIDER
    // =========================================

    $("#pricipal-slide").slider({
      range: "min",

      min: 10000,

      max: 9000000,

      value: 900000,

      step: 100,

      slide: function (event, ui) {
        $("#pricipal").text(ui.value);

        pyloan_eligibility();
      },
    });

    $("#pricipal").text($("#pricipal-slide").slider("value"));

    // =========================================
    // INCOME SLIDER
    // =========================================

    $("#income-slide").slider({
      range: "min",

      min: 100,

      max: 1000000,

      value: 30000,

      step: 1,

      slide: function (event, ui) {
        $("#income").text(ui.value);

        pyloan_eligibility();
      },
    });

    $("#income").text($("#income-slide").slider("value"));

    // =========================================
    // YEAR SLIDER
    // =========================================

    $("#totalyear-slide").slider({
      range: "min",

      min: 1,

      max: 32,

      value: 10,

      step: 1,

      slide: function (event, ui) {
        $("#totalyear").text(ui.value);

        pyloan_eligibility();
      },
    });

    $("#totalyear").text($("#totalyear-slide").slider("value"));

    // =========================================
    // INTEREST SLIDER
    // =========================================

    $("#intrest-slide").slider({
      range: "min",

      min: 4.1,

      max: 16.2,

      value: 10,

      step: 0.01,

      slide: function (event, ui) {
        $("#intrest").text(ui.value);

        pyloan_eligibility();
      },
    });

    $("#intrest").text($("#intrest-slide").slider("value"));

    // =========================================
    // EMI SLIDER
    // =========================================

    $("#other-emi-slide").slider({
      range: "min",

      min: 0,

      max: 5000000,

      value: 0,

      step: 1,

      slide: function (event, ui) {
        $("#other-emi").text(ui.value);

        pyloan_eligibility();
      },
    });

    $("#other-emi").text($("#other-emi-slide").slider("value"));

    // =========================================
    // INITIAL CALC
    // =========================================

    pyloan_eligibility();

    // =========================================
    // FORCE REFLOW
    // =========================================

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        $(window).trigger("resize");
      });
    });
  }

  // =========================================
  // EMI CALCULATION
  // =========================================

  function pyloan_eligibility() {
    const P1 = parseFloat($("#pricipal").text()) || 0;

    const n1 = parseFloat($("#totalyear").text()) || 0;

    const rate1 = parseFloat($("#intrest").text()) || 0;

    const existing = parseFloat($("#other-emi").text()) || 0;

    const income1 = parseFloat($("#income").text()) || 0;

    const r1 = rate1 / (12 * 100);

    const prate1 =
      (P1 * r1 * Math.pow(1 + r1, n1 * 12)) / (Math.pow(1 + r1, n1 * 12) - 1);

    const emi1 = Math.ceil(prate1 * 100) / 100;

    const existingLoan = existing - (existing * 60) / 100;

    let incomere = 0;

    if (income1 <= 14999) {
      incomere = income1 * 0.4 - existingLoan;
    } else if (income1 <= 29999) {
      incomere = income1 * 0.45 - existingLoan;
    } else {
      incomere = income1 * 0.5 - existingLoan;
    }

    const incomereq = Math.floor((incomere / emi1) * P1);

    const prate2 =
      (incomereq * r1 * Math.pow(1 + r1, n1 * 12)) /
      (Math.pow(1 + r1, n1 * 12) - 1);

    const emi2 = Math.ceil(prate2 * 100) / 100;

    if (incomereq > P1) {
      $("#loan-eligibility-monthly").html(emi1.toFixed(0));

      $("#loan-eligibility-maximum-total").html(incomereq);

      $("#loan-eligibility-maximum-emi").html(
        "/ " + emi2.toFixed(0) + "&nbsp;EMI",
      );
    } else {
      $("#loan-eligibility-monthly").html("0");

      $("#loan-eligibility-maximum-total").html("0");

      $("#loan-eligibility-maximum-emi").html("");
    }
  }

  // =========================================
  // GLOBAL ACCESS
  // =========================================

  window.initLoanEligibility = initLoanEligibility;

  // =========================================
  // INITIAL LOAD
  // =========================================

  $(window).on("load", function () {
    initLoanEligibility();
  });
})(jQuery);
