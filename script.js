// JavaScript code goes here
// Example: Script to add a 'highlight' class to the nav items when their corresponding section is in the viewport
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("highlight");
    if (link.href.includes(current)) {
      link.classList.add("highlight");
    }
  });
});
