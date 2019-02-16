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
});
