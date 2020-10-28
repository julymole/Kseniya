//@@include('alert.js')


$('.header__main').css('display', 'none');

$(document).ready(function () {
  $('.header').animate({
    'padding-left': '8vw'
  }, 1000);
  $('.header__main').fadeIn(2500);


  $('.header__burger').on('click', function (event) {
    event.preventDefault();
    $('.header__burger, .header__nav').toggleClass('active');
  });
  
  $('nav li a').on('click', function() {
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('body,html').animate({scrollTop: destination}, 1500);
  });
   $('#btn-up').on('click', function() {
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('body,html').animate({scrollTop: destination}, 1500);
  });
});
