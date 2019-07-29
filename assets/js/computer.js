jQuery.fn.shuffle = function() {
  var j;
  for (var i = 0; i < this.length; i++) {
    j = Math.floor(Math.random() * this.length);
    $(this[i]).before($(this[j]));
  }
  return this;
};
for (i = 0; i < 39; i++) {
  $('#key').clone().attr('id', 'key' + i).appendTo('.keyboard');
}
var $code = $('.codeblock');
var t1 = new TimelineMax({
  repeat: -1
});
var $keys = $('.key');
var t2 = new TimelineMax({
  repeat: -1
});
var size = [150, 20, 20, 80, 30, 30, 20, 100, 50, 30, 140, 180, 20, 80, 30];
$code.each(function(index, element) {
  t1.fromTo(element, .3, {
    width: 0,
    ease: Power1.easeOut
  }, {
    width: size[index],
    ease: Power1.easeOut
  });
});
$keys.shuffle().each(function(index, element) {
  t2.to(element, 0.5, {
    backgroundColor: "#BBB",
    boxShadow: "0 0px 0 rgba(0, 0, 0, 0.3), 0 0px 0 #fff",
    ease: Power1.easeOut,
    onComplete: function() {
      TweenMax.to(element, 0.6, {
        boxShadow: "0 3px 0 rgba(0, 0, 0, 0.3), 0 1px 0 #fff",
        backgroundColor: "white",
        ease: Power1.easeOut
      });
    }
  });
});