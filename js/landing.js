ScrollOut();

// HERO
const hero = document.querySelector("#hero");
const heroBtn = document.querySelector("#heroButton");
const section1 = document.querySelector("#section1");
let fullScreen = true;

heroBtn.addEventListener("click", heroDisplay);

function heroDisplay() {
  fullScreen = !fullScreen;

  if (fullScreen === false) {
    hero.style.height = "70vh";
    section1.style.display = "flex";
  } else {
    hero.style.height = "100vh";
    section1.style.display = "none";
  }
}

// WHO
const who = document.querySelector("#who");
const whoBtn = document.querySelector("#whoBtn");
const whoMouse = document.querySelector("#whoMouse");
let whoDisplay = false;

whoBtn.addEventListener("click", whoToggle);

function whoToggle() {
  whoDisplay = !whoDisplay;

  if (whoDisplay === true) {
    who.style.display = "flex";
    whoMouse.innerHTML = `<img src="https://img.icons8.com/ios/50/edd88f/mouse-scrolling-filled.png">`;
  } else {
    who.style.display = "none";
    whoMouse.innerHTML = ``;
  }
}

// WHAT
const whatBtn = document.querySelector("#whatBtn");
const what = document.querySelector("#what");
const whatMouse = document.querySelector("#whatMouse");
whatDisplay = false;

whatBtn.addEventListener("click", whatToggle);

function whatToggle() {
  whatDisplay = !whatDisplay;

  if (whatDisplay === true) {
    what.style.display = "flex";
    whatMouse.innerHTML = `<img src="https://img.icons8.com/ios/50/edd88f/mouse-scrolling-filled.png">`;
  } else {
    what.style.display = "none";
    whatMouse.innerHTML = ``;
  }
}

// CONTACT

const whyBtn = document.querySelector("#whyBtn");
const why = document.querySelector("#why");
const whyMouse = document.querySelector("#whyMouse");
whyDisplay = false;

whyBtn.addEventListener("click", whyToggle);
