(function () {
  const saleItems = document.getElementsByClassName('sale-item');
  const packageItems = document.getElementsByClassName('package-item');
  const bestItems = document.getElementsByClassName('best-item');
  let docScroll;
  let windowBottom;

  // 윈도우 스크롤시 이벤트
  function scrollHandler() {
    docScroll = document.documentElement.scrollTop;
    windowBottom = docScroll + window.innerHeight;
    contentShowing(saleItems);
    contentShowing(packageItems);
    contentShowing(bestItems);
  }

  // 컨텐츠 보여주는 함수
  function contentShowing(content) {
    for (let i = 0; i < content.length; i++) {
      if (content[i].offsetTop <= windowBottom) {
        content[i].classList.add('active');
      }
    }
  }

  scrollHandler();

  window.addEventListener('scroll', scrollHandler);
})();
