$(document).ready(function () {


  $("#web-development").click(function () {
    $("#description").show();
    $("#skills").css("padding", "0");
    $("button:not(#web-development)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("teal");
    $("#description > div:not(#web-development-description)").fadeOut(300).promise().done(function () {

      $("#web-development-description").fadeToggle(300);
    });

    /* if ($("#web-development-description").css("display") === "none") {
       $("#skills").css("padding", "0");
       $("#description").show().children().hide();
       $("#web-development-description").fadeIn(500);
     } else {
       $("#web-development-description").fadeOut(500);
     }*/
  });

  $("#html").click(function () {
    $("#description").show();
    $("#skills").css("padding", "0");
    $("button:not(#html)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("purple");
    $("#description > div:not(#html-description)").fadeOut(300).promise().done(function () {

      $("#html-description").fadeToggle(300);
    });


    /*if ($("#html-description").css("display") === "none") {
      $("#skills").css("padding", "0");
      $("#description").show().children().hide();
      $("#html-description").fadeIn(500);
    } else {
      $("#html-description").fadeOut(500);
    }*/
  });

  $("#css").click(function () {
    $("#description").show();
    $("#skills").css("padding", "0");
    $("button:not(#css)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("yellow");
    $("#description > div:not(#css-description)").fadeOut(300).promise().done(function () {

      $("#css-description").fadeToggle(300);
    });

  });

  $("#javascript").click(function () {
    $("#description").show();
    $("#skills").css("padding", "0");
    $("button:not(#javascript)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("blue");
    $("#description > div:not(#javascript-description)").fadeOut(300).promise().done(function () {

      $("#javascript-description").fadeToggle(300);
    });

  });

  $("#jquery").click(function () {
    $("#description").show();
    $("#skills").css("padding", "0");
    $("button:not(#jquery)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("orange");
    $("#description > div:not(#jquery-description)").fadeOut(300).promise().done(function () {

      $("#jquery-description").fadeToggle(300);
    });

  });

  $(document).click(function () {
    $("button").removeClass();
    $("#description > div").fadeOut(500);
  });

  $("button").click(function (e) {
    e.stopPropagation(); // this stops the event from bubbling up to the body
  });



  var offset = 50;

  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $("#go-top").css("opacity", "1");
    } else {
      $("#go-top").css("opacity", "0");
    }
  });

  $("#go-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
  $("#go-about").click(function (e) {
    e.preventDefault();
    var about = $("#about").offset();
    $("html, body").animate({ scrollTop: about.top }, 300);
    return false;
  });
  $("#go-projects").click(function (e) {
    e.preventDefault();
    var projects = $("#projects").offset();
    $("html, body").animate({ scrollTop: projects.top }, 300);
    return false;
  });
  $("#go-contact").click(function (e) {
    e.preventDefault();
    var contact = $("#contact").offset();
    $("html, body").animate({ scrollTop: contact.top }, 300);
    return false;
  });


});