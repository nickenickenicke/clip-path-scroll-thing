const scrollElements = document.getElementsByClassName("scroll-block");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  for (const element of scrollElements) {
    element.style.backgroundPositionY = `-${window.scrollY}px`;
  }
});
