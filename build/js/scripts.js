




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



$(function () {
  var listItem = $('.production__stage');

  $(listItem).on('click', function () {
    if ($(this).children().hasClass('production__stage-text--open')) {
      $(this).children('.production__stage-text').removeClass('production__stage-text--open');
      $(this).children('.production__stage-title').removeClass('production__stage-title--open');
    } else {
      $('.production__stage-text').removeClass('production__stage-text--open');
      $('.production__stage-title').removeClass('production__stage-title--open');
      $(this).children('.production__stage-text').addClass('production__stage-text--open');
      $(this).children('.production__stage-title').addClass('production__stage-title--open');
    }
  });

  $(document).on('click', function (e) {
    if ( ! listItem.is(e.target) && listItem.has(e.target).length === 0) {
      $('.production__stage-text').removeClass('production__stage-text--open');
      $('.production__stage-title').removeClass('production__stage-title--open');
    }
  })
});





