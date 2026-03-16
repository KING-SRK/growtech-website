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
