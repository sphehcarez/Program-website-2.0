(function ($) {
  "use strict";

  // NAVBAR - Close navbar on link click (Bootstrap behavior)
  $('.navbar-nav .nav-link').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  // CUSTOM LINK SCROLL - Smooth scroll on link click
  $('.custom-link').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 10;
      scrollToDiv(elWrapped, header_height);
      return false;
  });

  function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;
      $('body,html').animate({
          scrollTop: totalScroll
      }, 600); // Increased to 600ms for smoother scroll
  }

  // SMOOTH SCROLL for all anchor links (enhancing the previous smooth scroll)
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top - $('.navbar').height() - 10
          }, 600); // Adjust scroll speed for smoothness
      }
  });

  // SCROLL PROGRESS INDICATOR
  $(window).on('scroll', function() {
      const scrollIndicator = $('#scroll-indicator');
      if (scrollIndicator.length) {
          const scrollPos = $(document).scrollTop();
          const scrollHeight = $(document).height() - $(window).height();
          const scrollPercent = (scrollPos / scrollHeight) * 100;
          scrollIndicator.css('width', scrollPercent + '%');
      }
  });

  // PARALLAX EFFECT for sections with the class 'parallax-background'
  $(window).on('scroll', function() {
      var scrolled = $(window).scrollTop();
      $('.parallax-background').each(function() {
          var parallaxSpeed = $(this).data('speed') || 0.5; // Default speed is 0.5
          var yPos = (scrolled * parallaxSpeed);
          $(this).css('background-position', 'center ' + yPos + 'px');
      });
  });

  // ACCORDION BEHAVIOR - Toggles content visibility when clicked
  $('.accordion-toggle').click(function() {
      var content = $(this).next('.accordion-content');
      $(this).toggleClass('active');
      content.slideToggle(400); // Smooth slide animation
  });

})(window.jQuery);
