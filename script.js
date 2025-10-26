document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", function () {
    let current = "";
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav a");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 75;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
});

// --- Generic Scroll Animation ---
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll("[data-anim]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.animDelay || 0;

          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // ... (keep your smooth scroll and active nav link script here)
});

// --- Footer Animation on Scroll ---
document.addEventListener("DOMContentLoaded", function () {
  const footerCards = document.querySelectorAll(".footer-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a staggered delay for a nicer effect
          const delay = entry.target.dataset.index * 100; // 100ms delay between cards
          setTimeout(() => {
            entry.target.style.transition =
              "opacity 0.6s ease-out, transform 0.6s ease-out";
            entry.target.classList.add("fade-in");
          }, delay);
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the card is visible
    }
  );

  footerCards.forEach((card, index) => {
    card.dataset.index = index; // Store index for staggered delay
    observer.observe(card);
  });
});
