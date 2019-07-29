var $window = $(window);
var $header = $('#header'); 
var pause;

    
//function to check if window has scrolled past header
var fixHeader = function() {
  var windowTop = $window.scrollTop(); 
  var headerHeight = $header.outerHeight();
  if(windowTop > headerHeight * 3) {   
    $header.addClass('raise');
    setTimeout(function() {
      $header.removeClass('raise').addClass('fixed');
      if($window.scrollTop() <= 1) {
        $header.removeClass('fixed raise');
      }
    }, 1000);
  } else {
    $header.removeClass('fixed raise');
  }
};

//get height of hero and set bg height
var bgHeight = function() {
  var heroHeight = $('.hero').outerHeight();
  $('.bg').css('height', heroHeight);
};
bgHeight();

//make sure window height is larger than section wraps and change height value if not.
var windowCheck = function() {
  if($window.outerHeight() < $('.section .wrap').outerHeight()) {
    $('.section').css('height', 'auto');
  }
  
};


// run functions after throttle
var throttle = function() {
  bgHeight();
  windowHeight();
};

//on scroll event;
$window.on('scroll', function() {
  clearTimeout(pause);
  pause = setTimeout(fixHeader(), 300);
});

//on scroll event;
$window.on('resize', function() {
  clearTimeout(pause);
  pause = setTimeout(throttle(), 300);
});

//nav toggle
$('.nav-toggle').on('click', function() {
  $header.toggleClass('opened');
  $('nav').slideToggle(); 
  return false;
});

$('.services a').on('click', function() {
  if($window.outerWidth() > 700) {
    return false;
  }
});

//client slide
var clientSlide = function() {
  var i = 0,
      clients = [],
      $clients = $('.client-wrap'),
      clientFadeIn = function(num) {
        $('.' + clients[num]).delay(4000).fadeIn(4000); 
      };
  $clients.each( function() {
      clients.push( this.id );
  });
  while( i < $clients.length - 1 ) {
    $('.' + clients[i]).fadeOut(4000, clientFadeIn(i + 1)); 
    i++;
  }
  $('.' + clients[$clients.length - 1]).fadeOut(4000, clientFadeIn(0)); 
  i = 0;
  setTimeout(clientSlide, 4000 );
  
};

clientSlide();
