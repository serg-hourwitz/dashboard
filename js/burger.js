document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.querySelector('.burger-icon');
  const closeIcon = document.querySelector('.close-icon');
  const sidebar = document.querySelector('.sidebar');

  // Функція для відкриття/закриття сайдбару
  function closeSidebar() {
    sidebar.classList.add('hidden');
  }

  // Обробник події для бургер-іконки
  burgerIcon.addEventListener('click', closeSidebar);

  function openSidebar() {
    sidebar.classList.remove('hidden');
  }

  // Обробник події для бургер-іконки
  closeIcon.addEventListener('click', openSidebar);
});

  
  


