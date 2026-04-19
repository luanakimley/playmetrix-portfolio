document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector(".site-nav");
  var detailsList = nav.querySelectorAll(".nav-details");

  detailsList.forEach(function (details) {
    var summary = details.querySelector("summary");

    summary.addEventListener("click", function () {
      detailsList.forEach(function (other) {
        if (other !== details) {
          other.removeAttribute("open");
        }
      });
    });
  });

  // Close when clicking outside
  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target)) {
      detailsList.forEach(function (details) {
        details.removeAttribute("open");
      });
    }
  });
});