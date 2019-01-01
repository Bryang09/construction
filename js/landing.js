const hero = document.querySelector("#hero");
const heroBtn = document.querySelector("#heroButton");
const section1 = document.querySelector("#section1");
let fullScreen = true;

console.log(fullScreen);

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

console.log(fullScreen);
