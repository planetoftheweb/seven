import "popper.js";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all.js";

$(document).ready(function() {
  // When Scrollspy Detects a change
  $(window).on("activate.bs.scrollspy", function() {
    var hash = $(".site-nav")
      .find("a.active")
      .attr("href");

    if (hash == "#main-content") {
      $(".site-nav").addClass("inbody");
    } else {
      $(".site-nav").removeClass("inbody");
    }
  });

  $(window).trigger("scroll");

  $(window).on("scroll", function() {
    var top = $(window).scrollTop();
    $("#page-hero")
      .css("transform", "translate3d(0px, " + top / 5 + "px, 0px)")

      .css("opacity", 1 - Math.max(top / (window.innerHeight * 0.7), 0));
  });
});
