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
