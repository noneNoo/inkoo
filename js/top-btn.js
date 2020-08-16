(function () {
  const docElem = document.documentElement;
  const topBtn = document.getElementById('top-btn');
  let docHeight;
  let docScrollTop;
  let offset;

  // 스크롤시 탑버튼 나타나는 함수
  function scrollHandler() {
    docScrollTop = docElem.scrollTop;
    docHeight = docElem.scrollHeight;
    // 이 지점에 닿으면 이벤트 발생
    offset = docHeight / 10;

    if (docScrollTop >= offset) {
      topBtn.classList.add('showed');
    } else {
      topBtn.classList.remove('showed');
    }
  }

  // 탑버튼 클릭 함수
  function topBtnClickHandler() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', scrollHandler);
  topBtn.addEventListener('click', topBtnClickHandler);
})();
