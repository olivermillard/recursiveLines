var mainContainer = document.getElementById("mainContainer");
var svg = document.getElementById("svgID");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

var lineCounter = 0;
var prevX = 0;
var prevY = 0;
var lastModX = 0;
var lastModY = 0;
function lineGenerator() {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const makeLines = async () => {
    var pageWidth = getWidth();
    var pageHeight = getHeight();

    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    if (lineCounter == 0) {
      //   x1 = pageWidth / 2;
      //   y1 = pageHeight / 2;
    } else {
      x1 = prevX;
      y1 = prevY;
    }

    var newX = x1;
    var xMod = getRandomInt(50);

    if (getRandomInt(2) == 0) {
      if (pageWidth + -1 * (newX + xMod) >= 0 && lastModX == 0) {
        newX = -1 * (newX + xMod);
        lastModX = 1;
      } else {
        newX = newX + xMod;
        lastModX = 0;
      }
    }

    var newY = y1;
    var yMod = getRandomInt(50);
    if (getRandomInt(2) == 0) {
      if (pageHeight + -1 * (newY + yMod) >= 0 && lastModY == 0) {
        newY = -1 * (newY + yMod);
        lastModY = 1;
      } else {
        newY = newY - yMod;
        lastModY = 0;
      }
    }

    var directionMod = getRandomInt(2);
    if (directionMod == 0) {
      x2 = newX;
      y2 = y1;
    } else {
      x2 = x1;
      y2 = newY;
    }

    prevX = x2;
    prevY = y2;

    console.log(x1, y1, x2, y2);
    line.setAttributeNS(null, "x1", x1);
    line.setAttributeNS(null, "y1", y1);
    line.setAttributeNS(null, "x2", x2);
    line.setAttributeNS(null, "y2", y2);
    line.setAttributeNS(null, "style", "stroke:rgb(255,0,0);stroke-width:2");
    svg.appendChild(line);
    //await sleep(10);
  };
  for (var i = 0; i < 1000; i++) {
    makeLines();
    lineCounter += 1;
  }
}
