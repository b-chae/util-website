const inputElement = document.getElementsByName("text")[0];
const lengthHelperTextElement = document.getElementById(
  "text-length-helper-text",
);
const buttonElement = document.getElementById("submit");
const textSizeElement = document.getElementById("text-size");
const textColorSelectElement = document.getElementsByName("text-color")[0];
const backgroundSelectElement =
  document.getElementsByName("background-color")[0];
const ctx = document.getElementById("canvas").getContext("2d");
const downloadButtonElement = document.getElementById("download");
