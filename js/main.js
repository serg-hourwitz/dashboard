// Отримуємо всі посилання з класом nav-link
const navLinks = document.querySelectorAll('.nav-link');
// Отримуємо всі посилання з класом section-main
const pages = document.querySelectorAll('.section-main');

// Додаємо обробник події для кожного посилання
navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    // Видаляємо клас 'nav-link-active' з усіх посилань
    navLinks.forEach((link) => link.classList.remove('nav-link-active'));

    // Додаємо клас 'nav-link-active' до поточного посилання
    this.classList.add('nav-link-active');

    // Видаляємо активний клас з усіх сторінок і додаємо неактивний
    pages.forEach((page) => {
      page.classList.remove('section-main-active');
      page.classList.add('section-main-inactive');
    });

    // Отримуємо клас поточного лінку, щоб активувати відповідну сторінку
    const linkClass = Array.from(this.classList).find(
      (cls) => cls !== 'nav-link' && cls !== 'nav-link-active'
    );

    // Активуємо відповідну сторінку на основі класу посилання
    pages.forEach((page) => {
      if (page.classList.contains(linkClass)) {
        page.classList.remove('section-main-inactive');
        page.classList.add('section-main-active');
      }
    });
  });
});
