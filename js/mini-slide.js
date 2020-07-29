const miniSlideContainer = document.querySelector('#mini-slide');
let slidePos = 0;

let miniSlide = setInterval(() => {
  miniSlideContainer.style.left = -slidePos + 10 + 'px';
  slidePos = slidePos + 1;
  if (slidePos >= 236) {
    clearInterval(miniSlide);
  }
}, 10);

console.dir(miniSlideContainer);
