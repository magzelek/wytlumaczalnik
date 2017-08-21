$(document).ready(function() {

  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });

  $('#menu').on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
  });

  $('.arrDown').on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
  });

  /* $(document).on('mouseenter', 'a', function(event){
    event.preventDefault();
    if ($('h1')) {
      $('h1').addClass('h1Hover');
    } else if ($('h2')) {
      $('h2').addClass('h2Hover');
    } else if ($('h3')) {
      $('h3').addClass('h3Hover');
    } else if ($('h4')) {
      $('h4').addClass('h4Hover');
  });

  $(document).on('mouseleave', 'a', function(event){
    event.preventDefault();
    $('nav').removeClass('shrink');
  }); */

});

/*import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );

});*/
