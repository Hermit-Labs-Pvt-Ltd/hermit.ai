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