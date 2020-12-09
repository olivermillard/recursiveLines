var mainContainer = document.getElementById("mainContainer");
var svg = document.getElementById("svgID");
var letter0 = document.getElementById("letter0");
var letter1 = document.getElementById("letter1");
var letter2 = document.getElementById("letter2");
var letter3 = document.getElementById("letter3");
var letter4 = document.getElementById("letter4");
var letter5 = document.getElementById("letter5");
var letter6 = document.getElementById("letter6");
var letter7 = document.getElementById("letter7");
var letter8 = document.getElementById("letter8");
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

function lineGenerator() {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const makeLines = async () => {
    var pageWidth = getWidth();
    var pageHeight = getHeight();
    var startingX = pageWidth / 2;
    var startingY = pageHeight / 2;
    var counter = 0;
    var x1 = [0, 0, 0, 0];
    var y1 = [0, 0, 0, 0];
    var x2 = [0, 0, 0, 0];
    var y2 = [0, 0, 0, 0];
    var verticalMod = [0, 0, 0, 0];
    var horizontalMod = [0, 0, 0, 0];
    for (var i = 0; i <= 150; i++) {
      if (i == 0) {
        await 1000;
      }
      var line0 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      var line1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      var line2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      var line3 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      if (i == 0) {
        x1 = [startingX, startingX, startingX, startingX];
        y1 = [startingY, startingY, startingY, startingY];
        verticalMod = [
          pageHeight / 2,
          pageHeight / 2,
          pageHeight / 2,
          pageHeight / 2,
        ];
        horizontalMod = [
          pageWidth / 2,
          pageWidth / 2,
          pageWidth / 2,
          pageWidth / 2,
        ];
      }

      //0 = bottom left
      //1 = top left
      switch (counter) {
        case 0:
          //line0 down
          x2[0] = x1[0];
          y2[0] = y1[0] + verticalMod[0];
          verticalMod[0] = verticalMod[0] * 0.95;
          //line1 up
          x2[1] = x1[1];
          y2[1] = y1[1] - verticalMod[1];
          verticalMod[1] = verticalMod[1] * 0.95;
          //line2 down
          x2[2] = x1[2];
          y2[2] = y1[2] + verticalMod[2];
          verticalMod[2] = verticalMod[2] * 0.95;
          //line3 up
          x2[3] = x1[3];
          y2[3] = y1[3] - verticalMod[3];
          verticalMod[3] = verticalMod[3] * 0.95;

          counter = 1;
          break;
        case 1:
          //line0 left
          x2[0] = x1[0] - horizontalMod[0];
          y2[0] = y1[0];
          horizontalMod[0] = horizontalMod[0] * 0.95;
          //line1 left
          x2[1] = x1[1] - horizontalMod[1];
          y2[1] = y1[1];
          horizontalMod[1] = horizontalMod[1] * 0.95;
          //line2 right
          x2[2] = x1[2] + horizontalMod[2];
          y2[2] = y1[2];
          horizontalMod[2] = horizontalMod[2] * 0.95;
          //line3 right
          x2[3] = x1[3] + horizontalMod[3];
          y2[3] = y1[3];
          horizontalMod[3] = horizontalMod[3] * 0.95;
          counter = 2;
          break;
        case 2:
          //line0 up
          x2[0] = x1[0];
          y2[0] = y1[0] - verticalMod[0];
          verticalMod[0] = verticalMod[0] * 0.95;
          //line1 down
          x2[1] = x1[1];
          y2[1] = y1[1] + verticalMod[1];
          verticalMod[1] = verticalMod[1] * 0.95;
          //line2 up
          x2[2] = x1[2];
          y2[2] = y1[2] - verticalMod[2];
          verticalMod[2] = verticalMod[2] * 0.95;
          //line3 down
          x2[3] = x1[3];
          y2[3] = y1[3] + verticalMod[3];
          verticalMod[3] = verticalMod[3] * 0.95;
          counter = 3;
          break;
        case 3:
          //line0 right
          x2[0] = x1[0] + horizontalMod[0];
          y2[0] = y1[0];
          horizontalMod[0] = horizontalMod[0] * 0.95;
          //line1 right
          x2[1] = x1[1] + horizontalMod[1];
          y2[1] = y1[1];
          horizontalMod[1] = horizontalMod[1] * 0.95;
          //line2 left
          x2[2] = x1[2] - horizontalMod[2];
          y2[2] = y1[2];
          horizontalMod[2] = horizontalMod[2] * 0.95;
          //line3 left
          x2[3] = x1[3] - horizontalMod[3];
          y2[3] = y1[3];
          horizontalMod[3] = horizontalMod[3] * 0.95;
          counter = 0;
          break;
      }
      line0.setAttributeNS(null, "x1", x1[0]);
      line0.setAttributeNS(null, "y1", y1[0]);
      line0.setAttributeNS(null, "x2", x2[0]);
      line0.setAttributeNS(null, "y2", y2[0]);
      if (i == 0) {
        line0.setAttributeNS(null, "style", "stroke:rgb(0,0,0);stroke-width:2");
      } else {
        line0.setAttributeNS(
          null,
          "style",
          "stroke:rgb(139,0,139);stroke-width:2"
        );
      }
      var line0ID = "0-" + i;
      line0.setAttributeNS(null, "id", line0ID);
      svg.appendChild(line0);
      y1[0] = y2[0];
      x1[0] = x2[0];

      line1.setAttributeNS(null, "x1", x1[1]);
      line1.setAttributeNS(null, "y1", y1[1]);
      line1.setAttributeNS(null, "x2", x2[1]);
      line1.setAttributeNS(null, "y2", y2[1]);
      if (i == 0) {
        line1.setAttributeNS(null, "style", "stroke:rgb(0,0,0);stroke-width:2");
      } else {
        line1.setAttributeNS(
          null,
          "style",
          "stroke:rgb(139,0,139);stroke-width:2"
        );
      }
      var line1ID = "1-" + i;
      line1.setAttributeNS(null, "id", line1ID);
      svg.appendChild(line1);
      y1[1] = y2[1];
      x1[1] = x2[1];

      line2.setAttributeNS(null, "x1", x1[2]);
      line2.setAttributeNS(null, "y1", y1[2]);
      line2.setAttributeNS(null, "x2", x2[2]);
      line2.setAttributeNS(null, "y2", y2[2]);
      if (i == 0) {
        line2.setAttributeNS(null, "style", "stroke:rgb(0,0,0);stroke-width:2");
      } else {
        line2.setAttributeNS(
          null,
          "style",
          "stroke:rgb(139,0,139);stroke-width:2"
        );
      }
      var line2ID = "2-" + i;
      line2.setAttributeNS(null, "id", line2ID);
      svg.appendChild(line2);
      y1[2] = y2[2];
      x1[2] = x2[2];

      line3.setAttributeNS(null, "x1", x1[3]);
      line3.setAttributeNS(null, "y1", y1[3]);
      line3.setAttributeNS(null, "x2", x2[3]);
      line3.setAttributeNS(null, "y2", y2[3]);
      if (i == 0) {
        line3.setAttributeNS(null, "style", "stroke:rgb(0,0,0);stroke-width:2");
      } else {
        line3.setAttributeNS(
          null,
          "style",
          "stroke:rgb(139,0,139);stroke-width:2"
        );
      }
      svg.appendChild(line3);
      var line3ID = "3-" + i;
      line3.setAttributeNS(null, "id", line3ID);
      y1[3] = y2[3];
      x1[3] = x2[3];

      if (i == 10 * 1) {
        letter0.style.color = "rgb(139,0,139)";
      }
      if (i == 10 * 2) {
        letter1.style.color = "rgb(139,0,139)";
      }
      if (i == 10 * 3) {
        letter2.style.color = "rgb(139,0,139)";
      }
      if (i == 10 * 4) {
        letter3.style.color = "rgb(139,0,139)";
      }
      if (i == 10 * 5) {
        letter4.style.color = "rgb(139,0,139)";
      }
      if (i == 10 * 6) {
        letter5.style.color = "rgb(139,0,139)";
      }
      if (i == 10 * 7) {
        letter6.style.color = "rgb(139,0,139)";
      }
      if (i == 10 * 8) {
        letter7.style.color = "rgb(139,0,139)";
      }
      if (i == 10 * 9) {
        letter8.style.color = "rgb(139,0,139)";
      }
      if (i == 150) {
        deleteLines();
      }
      await sleep(10);
    }
  };
  makeLines();
}

function deleteLines() {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const deleteLines = async () => {
    for (x = 150; x >= 0; x--) {
      var id0 = "0-" + x;
      var id1 = "1-" + x;
      var id2 = "2-" + x;
      var id3 = "3-" + x;
      var delete0 = document.getElementById(id0);
      var delete1 = document.getElementById(id1);
      var delete2 = document.getElementById(id2);
      var delete3 = document.getElementById(id3);
      svg.removeChild(delete0);
      svg.removeChild(delete1);
      svg.removeChild(delete2);
      svg.removeChild(delete3);
      if (x == 10 * 1) {
        letter8.style.color = "black";
      }
      if (x == 10 * 2) {
        letter7.style.color = "black";
      }
      if (x == 10 * 3) {
        letter6.style.color = "black";
      }
      if (x == 10 * 4) {
        letter5.style.color = "black";
      }
      if (x == 10 * 5) {
        letter4.style.color = "black";
      }
      if (x == 10 * 6) {
        letter3.style.color = "black";
      }
      if (x == 10 * 7) {
        letter2.style.color = "black";
      }
      if (x == 10 * 8) {
        letter1.style.color = "black";
      }
      if (x == 10 * 9) {
        letter0.style.color = "black";
      }
      await sleep(10);
      if (x == 0) {
        lineGenerator();
      }
    }
  };
  deleteLines();
}
//else {
//   x1 = prevX;
//   y1 = prevY;
// }

// var newX = x1;
// var xMod = getRandomInt(50);

// if (getRandomInt(2) == 0) {
//   if (pageWidth + -1 * (newX + xMod) >= 0 && lastModX == 0) {
//     newX = -1 * (newX + xMod);
//     lastModX = 1;
//   } else {
//     newX = newX + xMod;
//     lastModX = 0;
//   }
// }

// var newY = y1;
// var yMod = getRandomInt(50);
// if (getRandomInt(2) == 0) {
//   if (pageHeight + -1 * (newY + yMod) >= 0 && lastModY == 0) {
//     newY = -1 * (newY + yMod);
//     lastModY = 1;
//   } else {
//     newY = newY - yMod;
//     lastModY = 0;
//   }
// }

// var directionMod = getRandomInt(2);
// if (directionMod == 0) {
//   x2 = newX;
//   y2 = y1;
// } else {
//   x2 = x1;
//   y2 = newY;
// }

// prevX = x2;
// prevY = y2;
// var newX = x1;
// var xMod = getRandomInt(50);

// if (getRandomInt(2) == 0) {
//   if (pageWidth + -1 * (newX + xMod) >= 0 && lastModX == 0) {
//     newX = -1 * (newX + xMod);
//     lastModX = 1;
//   } else {
//     newX = newX + xMod;
//     lastModX = 0;
//   }
// }

// var newY = y1;
// var yMod = getRandomInt(50);
// if (getRandomInt(2) == 0) {
//   if (pageHeight + -1 * (newY + yMod) >= 0 && lastModY == 0) {
//     newY = -1 * (newY + yMod);
//     lastModY = 1;
//   } else {
//     newY = newY - yMod;
//     lastModY = 0;
//   }
// }

// var directionMod = getRandomInt(2);
// if (directionMod == 0) {
//   x2 = newX;
//   y2 = y1;
// } else {
//   x2 = x1;
//   y2 = newY;
// }

// prevX = x2;
// prevY = y2;
