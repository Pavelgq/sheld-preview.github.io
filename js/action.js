'use struct';


var menuList = document.querySelectorAll(".main-nav__group");
var data = menuList[0];
var result = menuList[1];

var arrowData = data.querySelector(".nav-arrow");
var arrowResult = result.querySelector(".nav-arrow");

var subData = data.nextSibling.nextSibling;
var subResult = result.nextSibling.nextSibling;

data.addEventListener("click", function(event) {
  arrowData.classList.toggle('open');
  subData.classList.toggle('close');

});

result.addEventListener("click", function(event) {
  arrowResult.classList.toggle('open');
  subResult.classList.toggle('close');
});

