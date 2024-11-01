const scrollElements = document.getElementsByClassName("scroll-block");

window.addEventListener("scroll", () => {
  for (const element of scrollElements) {
    element.style.backgroundPositionY = `-${window.scrollY}px`;
  }
});
