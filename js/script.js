const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach((card) => {
  const trigger = card.querySelector(".faq-trigger");

  trigger.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    // Close other open cards
    faqCards.forEach((c) => c.classList.remove("active"));

    // Toggle current card
    if (!isActive) {
      card.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".gt-neural-stats");
  const counters = document.querySelectorAll(".stat-number");
  let animated = false;

  const startAnimation = () => {
    statsSection.classList.add("active");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const increment = target / 50; // স্পিড কন্ট্রোল

      const updateCount = () => {
        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current);
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target + "+";
        }
      };
      updateCount();
    });
  };

  // Intersection Observer স্ক্রল ডিটেক্ট করার জন্য
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !animated) {
        startAnimation();
        animated = true; // একবারই এনিমেট হবে
      }
    },
    { threshold: 0.5 },
  );

  if (statsSection) observer.observe(statsSection);
});
