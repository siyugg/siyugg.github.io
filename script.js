document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".text-animation");
  texts.forEach((text) => {
    let letters = text.textContent.split("");
    text.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      text.appendChild(span);
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("ul li a");

  function onScroll() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((a) => {
      a.classList.remove("active");
      if (a.href.includes(current)) {
        a.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const sectionHeaders = document.querySelectorAll(".section-header");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionHeaders.forEach((header) => {
            header.classList.remove("text-pink-500");
          });
          entry.target.classList.add("text-pink-500");
        }
      });
    },
    { threshold: 0.1 }
  );

  sectionHeaders.forEach((header) => {
    observer.observe(header);
  });
});

document
  .getElementById("resumeLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default action of the link

    // Toggle the visibility of the resume thumbnail
    var resumeThumbnail = document.getElementById("resumeThumbnail");
    resumeThumbnail.classList.toggle("visible");
  });

// Hide the loading screen after 2 seconds
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
  }, 2000);
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("left-column").classList.remove("hidden");
    document.getElementById("right-column").classList.remove("hidden");
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelectorAll(".tag").forEach(function (techStack) {
      techStack.classList.remove("hidden");
    });
  }, 2000);
});
