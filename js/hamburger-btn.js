(function () {
  const hamBtn = document.getElementById('hamburger-btn');
  const menuContainer = document.getElementById('menu');

  function hamBtnClickHandler() {
    if (menuContainer.classList.contains('active')) {
      menuContainer.classList.remove('active');
    } else {
      menuContainer.classList.add('active');
    }
  }
  hamBtn.addEventListener('click', hamBtnClickHandler);
})();
