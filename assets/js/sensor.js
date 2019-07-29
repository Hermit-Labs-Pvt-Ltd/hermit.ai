var rating = [52, 34, 95,60,30,50,75];

var ratingBar = $(".rating-progress");




$('.ammonia .rating-progress').animate({

  "stroke-dashoffset": 100 - rating[0],

},{
  duration: 2000,
  progress: function (animate, progress) {
    $('.ammonia .reading').text(Math.round(progress * rating[0]));
  }
});

$('.temperature .rating-progress').animate({

  "stroke-dashoffset": 100 - rating[1],

},{
  duration: 2000,
  progress: function (animate, progress) {
    $('.temperature .reading').text(Math.round(progress * rating[1]));
  }
});

$('.humidity .rating-progress').animate({

  "stroke-dashoffset": 100 - rating[2],

},{
  duration: 2000,
  progress: function (animate, progress) {
    $('.humidity .reading').text(Math.round(progress * rating[2]));
  }
});

$('.pressure .rating-progress').animate({

  "stroke-dashoffset": 100 - rating[3],

},{
  duration: 2000,
  progress: function (animate, progress) {
    $('.pressure .reading').text(Math.round(progress * rating[3]));
  }
});

$('.ph .rating-progress').animate({

  "stroke-dashoffset": 100 - rating[4],

},{
  duration: 2000,
  progress: function (animate, progress) {
    $('.ph .reading').text(Math.round(progress * rating[4]));
  }
});

$('.conductivity .rating-progress').animate({

  "stroke-dashoffset": 100 - rating[5],

},{
  duration: 2000,
  progress: function (animate, progress) {
    $('.conductivity .reading').text(Math.round(progress * rating[5]));
  }
});

$('.orp .rating-progress').animate({

  "stroke-dashoffset": 100 - rating[6],

},{
  duration: 2000,
  progress: function (animate, progress) {
    $('.orp .reading').text(Math.round(progress * rating[6]));
  }
});

for (i = 0; i < ratingBar.length; i++) {
  if (rating[i] <= 50) {
    ratingBar[i].classList.add("normal-stroke");
  }
  if (50 < rating[i] && rating[i] <= 75) {
    ratingBar[i].classList.add("warning-stroke");
  }
  if (75 < rating[i]) {
    ratingBar[i].classList.add("danger-stroke");
  }
}
