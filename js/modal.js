document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('myModal');

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
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('myModal');
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

document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modal = document.getElementById('myModal');
  const body = document.body;

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
    body.classList.add('modal-open'); // Добавляем класс для блокировки прокрутки фона
  });

  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    body.classList.remove('modal-open'); // Удаляем класс для разблокировки прокрутки фона
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      body.classList.remove('modal-open'); // Удаляем класс для разблокировки прокрутки фона
    }
  });
});
