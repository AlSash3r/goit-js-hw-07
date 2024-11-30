"use strict";
const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", () => {
  const trimmedInputValue = inputEl.value.trim();
  outputEl.textContent = trimmedInputValue ? trimmedInputValue : "Anonymous";
});
