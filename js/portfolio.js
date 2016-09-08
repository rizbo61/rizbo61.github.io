$(document).ready(function () {


  $("#web-development").click(function () {
    if ($("#web-development-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").show().children().hide();
      $("#web-development-description").fadeIn(500);
    } else {
      $("#web-development-description").fadeOut(500);
    }
  })

  $("#html").click(function () {
    if ($("#html-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").show().children().hide();
      $("#html-description").fadeIn(500);
    } else {
      $("#html-description").fadeOut(500);
    }
  })

  $("#css").click(function () {
    if ($("#css-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").show().children().hide();
      $("#css-description").fadeIn(500);
    } else {
      $("#css-description").fadeOut(500);
    }
  })

  $("#javascript").click(function () {
    if ($("#javascript-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").show().children().hide();
      $("#javascript-description").fadeIn(500);
    } else {
      $("#javascript-description").fadeOut(500);
    }
  })

  $("#jquery").click(function () {
    if ($("#jquery-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").show().children().hide();
      $("#jquery-description").fadeIn(500);
    } else {
      $("#jquery-description").fadeOut(500);
    }
  })



  var offset = 50;

  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $("#go-top").css("opacity", "1");
    } else {
      $("#go-top").css("opacity", "0");
    }
  })

  $("#go-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  })
  $("#go-about").click(function (e) {
    e.preventDefault();
    var about = $("#about").offset();
    $("html, body").animate({ scrollTop: about.top }, 300);
    return false;
  })
  $("#go-projects").click(function (e) {
    e.preventDefault();
    var projects = $("#projects").offset();
    $("html, body").animate({ scrollTop: projects.top }, 300);
    return false;
  })
  $("#go-contact").click(function (e) {
    e.preventDefault();
    var contact = $("#contact").offset();
    $("html, body").animate({ scrollTop: contact.top }, 300);
    return false;
  })


});