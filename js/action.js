'use struct';

var b = document.querySelector(".header");

function E() {
  window.pageYOffset > 0 ? (b.classList.add("header--sticky"),
    !b.classList.contains("header--dark")) : (b.classList.remove("header--sticky"),
    !b.classList.contains("header--dark"));
}
window.addEventListener("scroll", E),
  window.addEventListener("scroll", function () {
    "up" === window.pageYOffset > 0 ? b.classList.add("header--visible") : b.classList.remove("header--visible")
  }),
  window.addEventListener("load", E);


var iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
var event = "click";
if (iOS != null)
  event = "touchstart";

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

var menuList = document.querySelectorAll(".main-nav__group");
var data = menuList[0];
var result = menuList[1];

var arrowData = data.querySelector(".nav-arrow");
var arrowResult = result.querySelector(".nav-arrow");

var subData = data.nextSibling.nextSibling;
var subResult = result.nextSibling.nextSibling;

data.addEventListener(touchEvent, function (event) {
  arrowData.classList.toggle('open');
  subData.classList.toggle('close');

});

result.addEventListener(touchEvent, function (event) {
  arrowResult.classList.toggle('open');
  subResult.classList.toggle('close');
});

var viewportWidth = document.body.clientWidth;

var tabletWidth = 1000;

var titleMenu = document.querySelectorAll('.main-nav__title');
var subMenu = document.querySelectorAll('.sub');



var header = document.querySelector('.prog-header');
var toggle = document.querySelector('.prog-header__toggle');
var navList = document.querySelector('.main-nav__list');
var navSetting = document.querySelector('.main-nav__setting');

toggle.addEventListener(touchEvent, () => {
  header.classList.toggle('header--opened');
  navList.classList.toggle('main-nav--opened');
  navSetting.classList.toggle('main-nav--opened');
});