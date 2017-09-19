$(document).ready(function() {
  $('div.hidden').fadeIn(4000).removeClass('hidden');

  $('#contact-form').submit(function() {
    alert("Form submitted, talk to you soon!");
  });
});

function scroll_to_div(div_id) {
  $('html,body').animate({
    scrollTop: $("#"+div_id).offset().top - 58
  }, 'slow');
};
