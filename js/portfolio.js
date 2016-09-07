$(document).ready(function() {

  $("#web-development").click(function() {
    if ($("#web-development-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").fadeIn(300).children().fadeOut(0);
      $("#web-development-description").fadeIn(300);
    } else {
        $("#web-development-description").fadeOut(300);
    }
  })

  $("#html").click(function() {
    if ($("#html-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").fadeIn(300).children().fadeOut(0);
      $("#html-description").fadeIn(300);
    } else {
      $("#html-description").fadeOut(300);
    }
  })

   $("#css").click(function() {
    if ($("#css-description").css("display") === "none") { 
      $("#skills").css("padding", "0");
      $("#description").fadeIn(300).children().fadeOut(0);
      $("#css-description").fadeIn(300);
    } else {
        $("#css-description").fadeOut(300);
    }
  })

  $("#javascript").click(function() {
    if ($("#javascript-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").fadeIn(300).children().fadeOut(0);
      $("#javascript-description").fadeIn(300);
    } else {
        $("#javascript-description").fadeOut(300);
    }
  })

  $("#jquery").click(function() {
    if ($("#jquery-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").fadeIn(300).children().fadeOut(0);
      $("#jquery-description").fadeIn(300);
    } else {
        $("#jquery-description").fadeOut(300);
    }
  })

});