"use strict";

const colorSelector = document.querySelector("body > input");
const colorBox = document.querySelector(".colorbox");

colorSelector.addEventListener("input", updateColor);
//Show the color
function updateColor(colorSelector) {
  colorBox.style.backgroundColor = colorSelector.target.value;
}

const hexcode = document.querySelector(".hexcode");
colorSelector.addEventListener("input", showHex);

//Show the Hex Code
function showHex(colorSelector) {
  hexcode.textContent = colorSelector.target.value;
}

//Convert HEX to RGB
function hex2rgb(showHex) {
  //split the hex code in three substrings
  const rvalue = showHex.substr(0, 2);
  const gvalue = showHex.substr(2, 2);
  const bvalue = showHex.substr(4);

  return {
    r: parseInt(rvalue, 16),
    g: parseInt(gvalue, 16),
    b: parseInt(bvalue, 16)
  };
}

colorSelector.addEventListener("input", showRGB);
function showRGB(colorSelector) {
  const hexValue = colorSelector.target.value;
  const newHex = hexValue.substr(1, hexValue.length);
  const rgbValue = hex2rgb(newHex);
}
//Show RGB

//Convert RGB to HSL
function RGBToHSL(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  let min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    h = 0,
    s = 0,
    l = 0;

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  s *= 100;
  l *= 100;
  return "hsl(" + h + "," + s + "%," + l + "%)";
}
//console.log(RGBToHSL(48, 149, 167));

//Show HSL
//colorSelector.addEventListener("input", showHSL);
