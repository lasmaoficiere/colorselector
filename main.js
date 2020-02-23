"use strict";

const colorSelector = document.querySelector("body > input");
const colorBox = document.querySelector(".colorbox");

colorSelector.addEventListener("input", updateColor);
//Show the color
function updateColor(colorSelector) {
  colorBox.style.backgroundColor = colorSelector.target.value;
}

const hexcode = document.querySelector(".hexcode");
const rgbvalue = document.querySelector(".rgbvalue");
const hslvalue = document.querySelector(".hslvalue");
colorSelector.addEventListener("input", showHex);

//Show the Hex Code
function showHex(colorSelector) {
  const hexValue = colorSelector.target.value;

  hexcode.textContent = `HEX Code:${hexValue}`;
  rgbvalue.textContent = `RGB Value:(${hex2rgb(hexValue).r}, ${hex2rgb(hexValue).g}, ${hex2rgb(hexValue).b})`;
  const red = hex2rgb(hexValue).r;
  const green = hex2rgb(hexValue).g;
  const blue = hex2rgb(hexValue).b;
  hslvalue.textContent = `HSL Value:(${RGBToHSL(red, green, blue).h}%, ${RGBToHSL(red, green, blue).s}%, ${RGBToHSL(red, green, blue).l}%)`;
}
//Convert HEX to RGB
function hex2rgb(showHex) {
  //split the hex code in three substrings
  const rvalue = showHex.substring(1, 3);
  const gvalue = showHex.substring(3, 5);
  const bvalue = showHex.substring(5, 7);
  return {
    r: parseInt(rvalue, 16),
    g: parseInt(gvalue, 16),
    b: parseInt(bvalue, 16)
  };
}

//Convert RGB to HSL
function RGBToHSL(red, green, blue) {
  // Make r, g, and b fractions of 1
  red /= 255;
  green /= 255;
  blue /= 255;

  let min = Math.min(red, green, blue),
    max = Math.max(red, green, blue),
    h = 0,
    s = 0,
    l = 0;

  if (max === min) {
    h = 0;
  } else if (max === red) {
    h = 60 * (0 + (green - blue) / (max - min));
  } else if (max === green) {
    h = 60 * (2 + (blue - red) / (max - min));
  } else if (max === blue) {
    h = 60 * (4 + (red - green) / (max - min));
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

  h = Math.round((h * 100) / 100);
  s = Math.round((s * 100) / 100);
  l = Math.round((l * 100) / 100);

  return {
    h,
    s,
    l
  };
}
console.log(RGBToHSL(255, 255, 255));

