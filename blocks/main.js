;(function($){

  $('.header-nav-hamburger').click(function(e) {
    $('.header-nav').toggleClass('header-nav--active');
    $('.header-nav-hamburger').toggleClass('header-nav-hamburger--active');
    e.preventDefault();
  });

}(jQuery));
