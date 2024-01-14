document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.getElementById('openModalBtn2');
  const closeModalBtn = document.getElementById('closeModalBtn2');
  const modal = document.getElementById('myModal2');

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.getElementById('openModalBtn2');
  const closeModalBtn = document.getElementById('closeModalBtn2');
  const modal = document.getElementById('myModal2');
  const body = document.body;

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
    body.style.overflow = 'hidden'; // Запрет прокрутки фона
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    body.style.overflow = 'auto'; // Разрешение прокрутки фона
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      body.style.overflow = 'auto'; // Разрешение прокрутки фона
    }
  });
});