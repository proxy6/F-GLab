
(function($) {

  "use strict"; // Start of use strict
$(document).ready(function() {
  // Smooth scrolling using jQuery easing
  $('a.scrollspy-btn[href*="#"]:not([href="#"])').on('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 120)
        }, 500, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').click(function() {
  //   $('.navbar-collapse').collapse('hide');
  // });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '.scrollspy_nav',
    offset: 100
  });

});
})(jQuery); // End of use strict

