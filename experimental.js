/*

Inspired by the work of the guys at Tubik Studio.
Dribble: https://dribbble.com/Tubik.
https://dribbble.com/shots/2710181-Tubik-Studio-Ice.

*/


var initialSlide = $('.slides-container [data-order="1"]');
var initalSelected = $('.slide-navigation__txt [data-order="1"]');
var mq_medium = window.matchMedia( '(min-width: 860px)' );
var mq_big = window.matchMedia( '(min-width: 1200px)' );


function activate_slide(order){
    
  var unactiveSlide = $('.slide.active');
  var activeSlide = $('.slides-container [data-order="'+order+'"]');
  
  if( !(activeSlide.hasClass('active')) ){
      slide_in(activeSlide);
      slide_out(unactiveSlide);
  }
}

function slide_in(slide) {
  
  var _this = slide;
  
  animation_in(slide);
  _this.addClass('active');
  TweenMax.to(_this, 1, {autoAlpha:1}, '-=1');
  
}

function slide_out(slide){
  
  var _this = slide;
  
  _this.css( 'z-index', '2' );
  _this.removeClass('active');
  TweenMax.to(_this, 1, {autoAlpha:0, onComplete: removeZ});
  
  function removeZ(){
    _this.css( 'z-index', '1' );
  }  
  
  animation_out(slide);
}

function animation_in(slide){
  
  var title = slide.find('h1');
  var subtitle = $(slide).find('h2');
  var text = $(slide).find('p');
  var button = $(slide).find('button');
  var image = $(slide).find('img');
  
  TweenMax.fromTo(title, 0.6,{autoAlpha:0, x:100}, {autoAlpha:0.6, x:0, ease: Power2.easeOut});
  TweenMax.fromTo(subtitle, 0.5,{autoAlpha:0, x:-200}, {autoAlpha:1, x:0, ease: Power2.easeOut},'-0.1');
  TweenMax.fromTo(text, 0.8,{autoAlpha:0, x:50}, {autoAlpha:1, x:0, ease: Power2.easeOut});
  TweenMax.fromTo(button, 0.5,{autoAlpha:0 }, {autoAlpha:1});
  TweenMax.to(image, 0, {autoAlpha:1,scale:1});
}

function animation_out(slide){
  
  var title = slide.find('h1');
  var subtitle = $(slide).find('h2');
  var text = $(slide).find('p');
  var button = $(slide).find('button');
  var image = $(slide).find('img');
  
  TweenMax.to(title, 0.6, {autoAlpha:0, x:0});
  TweenMax.to(subtitle, 0.5, {autoAlpha:0, x:200});
  TweenMax.to(text, 0.5,{autoAlpha:0});
  TweenMax.to(button, 0.5,{autoAlpha:0});
  TweenMax.to(image, 1, {scale:1.1});
  
}

$('.slide-navigation__txt span').on('click', function(){
  
  var _this = $(this);
  var order = _this.data('order');
  var spans = $('.slide-navigation__txt span');
  var current = $('.active').data('order');
  
  spans.removeClass('active');
  _this.addClass('active');
  activate_slide(order); 
  stagger_squares(order, current);
});

function stagger_squares(order, current) {
  var mq = 0.7;
  var moveY;
  var squares = $('.slide-navigation__squares .square');
  var staggerTime = -0.12;
  
  if( order < current ) {
    staggerTime = staggerTime * -1; 
  }
  
  if( mq_medium.matches) { mq = 1 }
  if( mq_big.matches) { mq = 1.3 }
  
    
  
  moveY = (order-1) * (15 * mq );
  TweenMax.staggerTo(squares, 0.1, {y: moveY}, staggerTime);
  
}



$(document).ready(function() {
  
  initialSlide.addClass('active');
  initalSelected.addClass('active');
  TweenMax.to(initialSlide, 0.5, {autoAlpha:1});
  
});


// function([string1, string2],target id,[color1,color2])    
consoleText([' gcc -Wall -g -c projects.c', ' gcc -o projects projects.o', ' ./projects'], 'text',['rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0]) 
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}