window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Mobile navbar burger toggle.
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Click a qualitative card to enlarge it; click the backdrop (or Esc) to close.
  var lightbox = $("#lightbox");
  var lightboxImage = $("#lightbox-img");
  $(".qual-card").click(function () {
    lightboxImage.attr("src", this.src);
    lightbox.addClass("is-active");
  });
  lightbox.click(function () {
    lightbox.removeClass("is-active");
  });
  $(document).keydown(function (event) {
    if (event.key === "Escape") {
      lightbox.removeClass("is-active");
    }
  });
});
