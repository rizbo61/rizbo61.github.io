$(document).ready(function () {


  $("section").slideDown(2000);

  $("#web-development").click(function () {
    $("#description").fadeIn(200);
    $("#intro").css("margin-bottom", "0");
    $("button:not(#web-development)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("teal");

    $("#description > div").stop(true, true);   // STOPS THE ANIMATION OVERLAP!!
    $("#description > div:not(#web-development-description)").fadeOut(200).promise().done(function () {
      $("#web-development-description").fadeToggle(200);
    });

  });

  $("#html").click(function () {
    $("#description").fadeIn(200);
    $("#intro").css("margin-bottom", "0");
    $("button:not(#html)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("purple");

    $("#description > div").stop(true, true);
    $("#description > div:not(#html-description)").fadeOut(200).promise().done(function () {
      $("#html-description").fadeToggle(200);
    });

  });

  $("#css").click(function () {
    $("#description").fadeIn(200);
    $("#intro").css("margin-bottom", "0");
    $("button:not(#css)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("yellow");

    $("#description > div").stop(true, true);
    $("#description > div:not(#css-description)").fadeOut(200).promise().done(function () {
      $("#css-description").fadeToggle(200);
    });

  });

  $("#javascript").click(function () {
    $("#description").fadeIn(200);
    $("#intro").css("margin-bottom", "0");
    $("button:not(#javascript)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("blue");

    $("#description > div").stop(true, true);
    $("#description > div:not(#javascript-description)").fadeOut(200).promise().done(function () {
      $("#javascript-description").fadeToggle(200);
    });

  });

  $("#jquery").click(function () {
    $("#description").fadeIn(200);
    $("#intro").css("margin-bottom", "0");
    $("button:not(#jquery)").removeClass();
    $(this).blur();
    $(this).stop().toggleClass("orange");

    $("#description > div").stop(true, true);
    $("#description > div:not(#jquery-description)").fadeOut(200).promise().done(function () {
      $("#jquery-description").fadeToggle(200);
    });

  });

  $(document).click(function () {
    $("button").removeClass();
    $("#description > div").fadeOut(200);
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