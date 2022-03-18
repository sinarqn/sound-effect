const startBtn = document.querySelector("#startBtn");
const container = document.querySelector(".inside");
const colors = [
  "#FF00FF", //1
  "#FF00E1", //2
  "#FF00BB", //3
  "#FF009D", //4
  "#FF0087", //5
  "#FF0072", //6
  "#FF005B", //7
  "#FF0045", //8
  "#FF002F", //9
  "#FF001B", //10
];
started = false;
let colorIndex = 0;
let colorCount = 1;
let colorOrder = true;
startBtn.addEventListener("click", startInterval);

function startInterval() {
  if (!started) {
    myInterval = setInterval(startEffect, 15);
    started = true;
    startBtn.innerText = "Stop";
  } else {
    clearInterval(myInterval);
    started = false;
    startBtn.innerText = "Start";
  }
}
function startEffect() {
  const maxHeight = 7;
  const random = Math.random();
  const height = random * maxHeight;
  const color = colors[colorIndex];
  colorCount++;
  if (colorCount == 20) {
    if (colorOrder) {
      colorIndex++;
      if (colorIndex == colors.length - 1) {
        colorOrder = false;
      }
    } else {
      colorIndex--;
      if (colorIndex == 0) {
        colorOrder = true;
      }
    }
    colorCount = 1;
  }

  const elem = document.createElement("div");
  elem.style.width = "0.1rem";
  elem.style.height = `${height}rem`;
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0px 0px 100px ${color}`
  startBtn.style.background = `linear-gradient(to right, ${color}, ${colors[colorIndex + 1]})`
  startBtn.style.boxShadow = `0px 0px 40px ${color}`
  container.appendChild(elem);
}
