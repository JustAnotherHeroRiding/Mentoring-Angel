const main = document.querySelector(".main");
const body = document.querySelector("body");
const x = document.querySelector(".x");
const y = document.querySelector(".y");
const mouseDownElement = document.querySelector(".mouse-down");

mouseDownElement.style.display = "none";

let startOfClick;
let endOfClick;
let timer;
const mainClickHandler = function (event) {
  if (!startOfClick) {
    startOfClick = new Date().getTime();
    timer = setTimeout(() => {
      body.style.backgroundColor = "white";
      startOfClick = undefined;
      endOfClick = undefined;
    }, 600);
  } else {
    endOfClick = new Date().getTime();
    const diff = endOfClick - startOfClick;
    console.log(diff);
    if (diff <= 500) {
      clearTimeout(timer);
      body.style.backgroundColor = "blue";
      startOfClick = undefined;
      endOfClick = undefined;
    }
  }
};

const mouseOverHandler = function (event) {
  x.textContent = +event.clientX;
  y.textContent = +event.clientY;
  body.style.backgroundColor = `rgb(${20}, ${x.textContent}, ${y.textContent}`;
};

let mouseUpTimer;
const mouseDownHandler = (event) => {
  mouseUpTimer = setTimeout(() => {
    mouseDownElement.style.display = "block";
  }, 1000);
};

const mouseUpHandler = (event) => {
  clearTimeout(mouseUpTimer);
};

main.addEventListener("click", mainClickHandler);
main.addEventListener("mouseover", mouseOverHandler);
main.addEventListener("mousedown", mouseDownHandler);
main.addEventListener("mouseup", mouseUpHandler);
