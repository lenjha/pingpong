$(document).ready(function() {
  $("#signup").submit(function(event) {
    event.preventDefault();
    var email = $("#email").val();
    $("#signup").hide();
    $("#solution").prepend("<p>" + email + " has been added to my list! </p>");
  });
});
