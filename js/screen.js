
var mainScreen = document.querySelector('.main-screen');
var activationScreen = document.querySelector('.activation');
var netScreen = document.querySelector('.net-screen');
var cableScreen = document.querySelector('.cable-screen');
var trackScreen = document.querySelector('.track-screen');
var settingScreen = document.querySelector('.setting-screen');
var twoWayScreen = document.querySelector('.two-way-screen');
var oneWayScreen = document.querySelector('.one-way-screen');
var idealScreen = document.querySelector('.ideal-screen');
var notIdealScreen = document.querySelector('.not-ideal-screen');
var paramScreen = document.querySelector('.param-screen');

var screens = [
  {
    screen: mainScreen,
    button: mainButton
  },
  {
    screen: activationScreen,
    button: keyButton
  },
  {
    screen: netScreen,
    button: menu11
  },
  {
    screen: cableScreen,
    button: menu12
  },
  {
    screen: trackScreen,
    button: menu13
  },
  {
    screen: settingScreen,
    button: menu14
  },
  {
    screen: twoWayScreen,
    button: menu21
  },
  {
    screen: oneWayScreen,
    button: menu22
  },
  {
    screen: idealScreen,
    button: menu23
  },
  {
    screen: notIdealScreen,
    button: menu24
  },
  {
    screen: paramScreen,
    button: menu25
  },
  {
    screen: activationScreen,
    button: mainKeyButton,
    active: keyButton
  }
];

window.addEventListener('load', () => {
  screens.forEach((item) => {
    if (item.button.id === mainButton.id) {
      item.screen.style.display = 'block';
     
      if (item.hasOwnProperty('active')) {
        addActive(item.active);
      } else {
        addActive(item.button);
      }
      
    }
    else {
      item.screen.style.display = 'none';
      // let mainClass = item.screen.classList;
      // if (mainClass[mainClass.length-1].indexOf('--active')) {
      //   item.screen.classList.remove(mainClass[mainClass.length-1]);
      // }   
      removeActive(item.button);
    }
  });
});

function changeScreen(event) {
  screens.forEach((item) => {
    let current = item.button;
   
    if (current.id === event.currentTarget.id) {
      item.screen.style.display = 'block';

      if (item.hasOwnProperty('active')) {
        current = item.active;
      }
      addActive(current);
    }
    else {
      if (!item.hasOwnProperty('active')) {
        item.screen.style.display = 'none';
      }
      // let mainClass = item.screen.classList;
      // if (mainClass[mainClass.length-1].indexOf('--active')) {
      //   item.screen.classList.remove(mainClass[mainClass.length-1]);
      // }   
      removeActive(item.button);
    }
  });
}

function addActive(block) {
  let classes = block.parentElement.classList;

  for (let i = 0; i < classes.length; i++) {
    const element = classes[i];
    if (element.indexOf('--active') !== -1) {
      return 0;
    }
  }
  let classAdd = block.parentElement.classList[classes.length-1] + '--active';
  block.parentElement.classList.add(classAdd);
}

function removeActive(block) {
  let classes = block.parentElement.classList;

  for (let i = 0; i < classes.length; i++) {
    const element = classes[i];
    if (element.indexOf('--active') !== -1) {
      block.parentElement.classList.remove(element);
    }
  }
}