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
let whoDisplay = false;

whoBtn.addEventListener("click", whoToggle);

function whoToggle() {
  whoDisplay = !whoDisplay;

  if (whoDisplay === true) {
    who.style.display = "flex";
  } else {
    who.style.display = "none";
  }
}

// WHAT
const whatBtn = document.querySelector("#whatBtn");
const what = document.querySelector("#what");
whatDisplay = false;

whatBtn.addEventListener("click", whatToggle);

function whatToggle() {
  whatDisplay = !whatDisplay;

  if (whatDisplay === true) {
    what.style.display = "flex";
  } else {
    what.style.display = "none";
  }
}
