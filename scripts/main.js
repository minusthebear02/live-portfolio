$(document).ready(function() {
  $('div.hidden').fadeIn(5000).removeClass('hidden');

  $('#contact-form').submit(function() {
    alert("Thanks for reaching out, talk to you soon!");
  });
});

function scroll_to_div(div_id) {
  $('html,body').animate({
    scrollTop: $("#"+div_id).offset().top - 58
  }, 'slow');
};
