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