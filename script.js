// Global variable example
let animationActive = false;

// Function with parameters & return value
function toggleAnimation(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
    animationActive = false;
    return false; // animation stopped
  } else {
    element.classList.add(className);
    animationActive = true;
    return true; // animation started
  }
}

// Local scope example
function logAnimationStatus(status) {
  let message = status ? "Animation started!" : "Animation stopped!";
  console.log(message);
}

// Part 3: Combine CSS & JS
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", () => {
  let status = toggleAnimation(box, "bounce");
  logAnimationStatus(status);
});

// Modal logic
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 500); // matches CSS transition
});
