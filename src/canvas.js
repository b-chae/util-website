const colorRGB = {
  white: "#FFFFFF",
  black: "#000000",
  grey: "#555555",
  blue: "#0000FF",
};

const WIDTH = 200;

const clearBackground = () => {
  const background = backgroundSelectElement.value;
  ctx.clearRect(0, 0, WIDTH, WIDTH);
  ctx.fillStyle = colorRGB[background];
  ctx.fillRect(0, 0, WIDTH, WIDTH);
};

const fillText = () => {
  const text = inputElement.value;
  const textSize = textSizeElement.value;
  const textColor = textColorSelectElement.value;

  ctx.font = `${textSize}px malgun gothic`;
  const textWidth = ctx.measureText(text).width;

  ctx.fillStyle = colorRGB[textColor];
  ctx.fillText(text, WIDTH / 2 - textWidth / 2, WIDTH / 2 + textSize / 2);
};

buttonElement.addEventListener("click", () => {
  clearBackground();
  fillText();
});

downloadButtonElement.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = document.getElementById("canvas").toDataURL();
  link.click();
});

canvas.addEventListener("dragstart", (e) => {
  console.log(e);
});
