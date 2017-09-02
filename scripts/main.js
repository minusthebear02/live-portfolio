$(document).ready(function() {
  $('div.hidden').fadeIn(3000).removeClass('hidden');
  
  $('#contact-form').submit(function() {
    alert("Form submitted, talk to you soon!");
  });
});