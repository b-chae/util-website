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
