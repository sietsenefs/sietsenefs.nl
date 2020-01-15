
// ==== Logo color switch ================================

function logoSwitch () {
  $('.altLogo').each(function() {
    
    var distance = $('.startLogo').offset().top - $(this).closest('.row').offset().top;
    
    TweenLite.to(this,0,{y:distance, force3D:true});
    
    //$(this).css('top',
   //   $('.startLogo').offset().top -  $(this).closest('.row').offset().top
   // );
  });
};

$(document).scroll(function() {logoSwitch();});

logoSwitch();

// ==== Logo animation ================================

console.clear();
var tl = new TimelineLite({paused: true});
var dur = .5;
tl.to(".OO", dur, {drawSVG: 0, ease: Sine.easeInOut});
tl.fromTo(".OO", dur, 
      {drawSVG:"100% 100%", ease: Sine.easeIn},
      {drawSVG: "100% 0%", ease: Sine.easeOut, immediateRender: false})


$(".animate").mouseenter(function(){
  if ( !tl.isActive() ) {
    tl.play(0);
  }
});







