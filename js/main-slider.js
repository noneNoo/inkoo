//ul
const slideContainer = document.getElementById('slider-container'),
  slideItems = document.getElementsByClassName('slide-item'),
  slideBtnPrev = document.getElementById('prev-btn'),
  slideBtnNext = document.getElementById('next-btn'),
  pagerContainer = document.getElementById('pager');

let timer = null;
//아이템을 옆으로 정렬
//

for (let i = 0; i < slideItems.length; i++) {
  slideItems[i].style.left = i * 100 + '%';
}
let currentIndex = 0;

function goToSlide(idx) {
  slideContainer.style.left = idx * -100 + '%';
}

function slideBtnHandler(e) {
  let eventTarget = e.target;

  // 이벤트 상속 처리
  while (eventTarget.nodeName != 'BUTTON') {
    eventTarget = eventTarget.parentNode;
  }

  if (eventTarget.id == 'next-btn') {
    currentIndex = currentIndex + 1;
    if (currentIndex >= slideItems.length) {
      currentIndex = 0;
    }
  } else if (eventTarget.id == 'prev-btn') {
    currentIndex = currentIndex - 1;
    if (currentIndex <= -1) {
      currentIndex = slideItems.length - 1;
    }
  }
  goToSlide(currentIndex);
}
// item갯수만큼 pager 도트 생성
function pagerAdd() {
  console.log(pagerContainer);
  for (let i = 0; i < slideItems.length; i++) {
    let newPagerDot = document.createElement('span');
    newPagerDot.classList.add('pager-dot');
    newPagerDot.id = i;
    pagerContainer.appendChild(newPagerDot);
  }
}
pagerAdd();

//자동 슬라이드 함수
function autoSlide() {
  timer = setInterval(() => {
    if (currentIndex >= slideItems.length) {
      currentIndex = 0;
    }
    goToSlide(currentIndex);
    currentIndex = currentIndex + 1;
  }, 2000);
  return timer;
}

function bannerMouseLeaveHandler() {
  autoSlide();
}
function bannerMouseEnterHandler() {
  clearInterval(timer);
}
autoSlide();

slideBtnNext.addEventListener('click', slideBtnHandler);
slideBtnPrev.addEventListener('click', slideBtnHandler);
slideContainer.addEventListener('mouseenter', bannerMouseEnterHandler);
slideContainer.addEventListener('mouseleave', bannerMouseLeaveHandler);
