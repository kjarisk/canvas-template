import "../styles/style.css";
import { distance, randomIntFromRange, randomColor } from "./utils";
import ObjectClass from "./classes/ObjectClass";

const canvas = document.querySelector("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// Event Listeners
addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

let objects;
const init = () => {
  objects = [];

  for (let i = 0; i < 20; i++) {
    objects.push();
  }
};

// Animation Loop
const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // objects.forEach((object) => {
  //   object.update();
  // });
};

init();
animate();
