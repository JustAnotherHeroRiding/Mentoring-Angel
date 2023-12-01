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
  console.log("click");
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
//
const mouseDownHandler = (event) => {
  const timer = setTimeout(() => {
    mouseDownElement.style.display = "block";
  }, 1000);
};

function executeHandler(handlerFn) {
  return handlerFn;
}

const handlerNames = ["click", "mouseover", "mousedown"];

const handlerDefinition = {
  [handlerNames[0]]: executeHandler(mainClickHandler),
  [handlerNames[1]]: executeHandler(mainClickHandler),
  [handlerNames[2]]: executeHandler(mainClickHandler),
};

function registerHandlers(handlerDefinitions) {
  let definitions = Object.keys(handlerDefinitions).map((key) => [
    key,
    handlerDefinitions[key],
  ]);
  return definitions.reduce((prev, curr) => {
    const value = Object.values(curr)[0];
    return [
      ...prev,
      {
        nameOfHandler: curr[0],
        handler: curr[1],
      },
    ];
  }, []);
}

const registeredHandlers = registerHandlers(handlerDefinition);

const globalHandler = function (element, singleHandler) {
  element.addEventListener(singleHandler.nameOfHandler, singleHandler.handler);
};

// HOF

function executeFn(fn) {
  return fn;
}

function functionGenerator(executeFn) {
  return () => executeFn;
}

const sayHello = () => console.log("hello");
const supplier = () => functionGenerator(executeFn(sayHello))()();
