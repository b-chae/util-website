const inputElement = document.getElementsByName("text")[0];
const lengthHelperTextElement = document.getElementById(
  "text-length-helper-text",
);
const buttonElement = document.getElementById("submit");
const textColorSelectElement = document.getElementsByName("text-color")[0];
const backgroundSelectElement =
  document.getElementsByName("background-color")[0];
const ctx = document.getElementById("canvas").getContext("2d");

inputElement.addEventListener("input", (e) => {
  const input = e.currentTarget.value;
  const length = input.length;

  if (length > 10) {
    e.currentTarget.value = input.slice(0, 10);
    return;
  }

  if (input.includes("\n") && input.split("\n").length === 3) {
    e.currentTarget.value = input.slice(0, length - 1);
    return;
  }

  lengthHelperTextElement.innerText = `${length}/10`;
});

const colorRGB = {
  white: "#FFFFFF",
  black: "#000000",
  grey: "#555555",
  blue: "#0000FF",
};

buttonElement.addEventListener("click", () => {
  const text = inputElement.value;
  const textColor = textColorSelectElement.value;
  const background = backgroundSelectElement.value;

  ctx.clearRect(0, 0, 400, 400);
  ctx.fillStyle = colorRGB[background];
  ctx.fillRect(0, 0, 400, 400);
  ctx.font = "20px malgun gothic";
  ctx.fillStyle = colorRGB[textColor];
  ctx.fillText(text, 5, 30);
});
