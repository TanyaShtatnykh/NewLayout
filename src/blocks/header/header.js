$(function () {
  $('.header__burger-btn').on('click', function() {
    $(this).children().toggleClass('header__burger-line--open');
    $('.header__info').toggleClass('header__info--open');
  });
});