$(document).ready(function() {

  $("#web-development").click(function() {
    if ($("#web-development-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").children().fadeOut(0);
      $("#description").fadeIn(300);
      $("#web-development-description").fadeIn(300);
      $("#web-development:focus").css("background-color", "#2aa198", "!important");
    } else {
        $("#web-development-description").fadeOut(300);
        $("#web-development:focus").css("background-color", "transparent", "!important");
    }
  })

  $("#html").click(function() {
    if ($("#html-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").children().fadeOut(0);
      $("#description").fadeIn(300);
      $("#html-description").fadeIn(300);
      $("#html:focus").css("background-color", "#d33682", "!important");
    } else {
      $("#html-description").fadeOut(300);
      $("#html:focus").css("background-color", "transparent", "!important");
    }
  })

   $("#css").click(function() {
    if ($("#css-description").css("display") === "none") { 
      $("#skills").css("padding", "0");
      $("#description").children().fadeOut(0);
      $("#description").fadeIn(300);
      $("#css-description").fadeIn(300);
      $("#css:focus").css("background-color", "#edac35", "!important");
    } else {
        $("#css-description").fadeOut(300);
        $("#css:focus").css("background-color", "transparent", "!important");
    }
  })

  $("#javascript").click(function() {
    if ($("#javascript-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").children().fadeOut(0);
      $("#description").fadeIn(300);
      $("#javascript-description").fadeIn(300);
      $("#javascript:focus").css("background-color", "#268bd2", "!important");
    } else {
        $("#javascript-description").fadeOut(300);
        $("#javascript:focus").css("background-color", "transparent", "!important");
    }
  })

  $("#jquery").click(function() {
    if ($("#jquery-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").children().fadeOut(0);
      $("#description").fadeIn(300);
      $("#jquery-description").fadeIn(300);
      $("#jquery:focus").css("background-color", "#cb4b16", "!important");
    } else {
        $("#jquery-description").fadeOut(300);
        $("#jquery:focus").css("background-color", "transparent", "!important");
    }
  })

})