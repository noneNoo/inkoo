(function () {
  const modalOpenBtn = document.getElementById('login-modal-open-btn');
  const modalContainer = document.getElementById('modal-container');
  const modalFilter = document.getElementById('modal-overlay');

  function modalBtnClickHandler() {
    modalContainer.classList.add('showing');
  }

  function modalFilterClickHandler() {
    modalContainer.classList.remove('showing');
  }

  modalOpenBtn.addEventListener('click', modalBtnClickHandler);
  modalFilter.addEventListener('click', modalFilterClickHandler);
})();
