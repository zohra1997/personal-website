$(document).ready(function(){

  $('.jobs').slick({

    arrows:false,

    dots:true,

    appendDots:'.slider-dots',

    dotsClass:'dots'

  });



let hamburger = document.querySelector('.hamburger');

let times = document.querySelector('.times');

let mobileNav = document.querySelector('.mobile-nav');

let menues = document.querySelector('.menues');

let menuesButton = document.querySelector('.menues-button');



hamburger.addEventListener('click',function(){

mobileNav.classList.add('open');

});



times.addEventListener('click',function(){

mobileNav.classList.remove('open');

});



menues.addEventListener('click',function(){

mobileNav.classList.remove('open');

});



menuesButton.addEventListener('click',function(){

mobileNav.classList.remove('open');

});



});
