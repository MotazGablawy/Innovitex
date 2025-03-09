document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu
  const menuIcon = document.querySelector(".links .icon");
  const menuList = document.querySelector(".links ul");
  if (menuIcon && menuList) {
    menuIcon.addEventListener("click", function () {
      menuList.classList.toggle("active");
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
//
// animation for sections
//
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".services, .portfolio, .about, .contact");

  sections.forEach((section) => {
    section.classList.add("animate");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
//
// animation for sections
//
