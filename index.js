// Your code here
const DODGER = document.getElementById('dodger');

function moveDodgerLeft() {
  let currentLeft = parseInt(DODGER.style.left || 0, 10);
  DODGER.style.left = `${currentLeft - 5}px`;
}

function moveDodgerRight() {
  let currentLeft = parseInt(DODGER.style.left || 0, 10);
  DODGER.style.left =`${currentLeft + 5}px`;
}