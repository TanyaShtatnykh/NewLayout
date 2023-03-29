$(function () {
  $('.header__request-btn').on('click', function () {
    $('.popup').addClass('popup--open');
  })
});





$(function () {
  $('.header__burger-btn').on('click', function() {
    if ($('.request--header').hasClass('request--header--active')) {
      $('.request--header').removeClass('request--header--active');
      $('.header__logo-link').removeClass('header__logo-link--hidden');
    }
    $(this).toggleClass('header__burger-btn--open');
    $('.header__info').toggleClass('header__info--open');
  });
});

$(function () {
  $('.header__mail').on('click', function() {
    if ($('.header__burger-btn').hasClass('header__burger-btn--open')) {
      $('.header__burger-btn').removeClass('header__burger-btn--open');
      $('.header__info').removeClass('header__info--open');
    }

    $('.request--header').toggleClass('request--header--active');

    if ($('.request--header').hasClass('request--header--active')) {
      $('.header__logo-link').addClass('header__logo-link--hidden');
    } else {
      $('.header__logo-link').removeClass('header__logo-link--hidden');
    }
  });
});