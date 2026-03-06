function typeText() {
  const textElement = document.querySelector(".typing-text");
  const words = ["Web Development", "App Development", "Game Development"];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 300;
    }

    setTimeout(type, typeSpeed);
  }

  document.addEventListener("DOMContentLoaded", type);
}

typeText();

function heroSwiper() {
  const heroSwiper = new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    centeredSlides: false, // এটা off করে দেখ

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      waitForTransition: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    effect: "slide",
  });
}

heroSwiper();
