import "./style.css";

function hamburgerClicked() {
  const hamburger = document.querySelector(".menu");

  hamburger.addEventListener("click", dropDown);
}

// Drop down items
function dropDown() {
  console.log("event clicked");
  const hamburgerItems = document.querySelector(".menu-items");
  hamburgerItems.classList.toggle("hidden");
}

function consoleTest() {
  console.log("drop-downingling says hi!");
}

hamburgerClicked();

export { dropDown, hamburgerClicked, consoleTest };
