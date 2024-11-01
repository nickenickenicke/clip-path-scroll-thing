const scrollElements = document.getElementsByClassName("scroll-block");

window.addEventListener("scroll", () => {
  scrollElements[0].style.backgroundPositionY = `-${window.scrollY}px`;
  scrollElements[1].style.backgroundPositionY = `${window.scrollY}px`;
  scrollElements[2].style.backgroundPositionX = `-${window.scrollY}px`;
  scrollElements[3].style.backgroundPositionX = `${window.scrollY}px`;
  scrollElements[4].style.backgroundPositionY = `${window.scrollY}px`;

  // for (const element of scrollElements) {
  //   element.style.backgroundPositionY = `-${window.scrollY}px`;
  // }
});
