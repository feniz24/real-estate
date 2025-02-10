// Mobile Menu Toggle
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Active Navigation on Scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

const observerOptions = {
  root: null,
  rootMargin: "-50% 0px",
  threshold: 0,
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove active class from all nav items
      navItems.forEach((item) => item.classList.remove("active"));

      // Add active class to corresponding nav item
      const id = entry.target.getAttribute("id");
      let correspondingNavItem;

      switch (id) {
        case "hero":
          correspondingNavItem = document.querySelector('a[href="#hero"]');
          break;
        case "services":
          correspondingNavItem = document.querySelector('a[href="#services"]');
          break;
        case "contact":
          correspondingNavItem = document.querySelector('a[href="#contact"]');
          break;
      }

      if (correspondingNavItem) {
        correspondingNavItem.classList.add("active");
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
