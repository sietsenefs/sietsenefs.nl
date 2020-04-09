




// logo switch color

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

// logo animation

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




// turn on graphic design active color on load




// on scroll nav color change


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
   
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navheader a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navheader ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY + 2);
  }
}

// Captures click events of all a elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);



 

 







