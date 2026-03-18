function faq() {
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
}

faq();

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

function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.2, // স্ক্রল কতক্ষণ ধরে হবে (সেকেন্ডে)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ইজিং ফাংশন (স্মুথনেস)
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false, // টাচ ডিভাইসে (ফোনে) ডিফল্ট স্ক্রল রাখা ভালো
    touchMultiplier: 2,
    infinite: false,
  });

  // ২. রিকোয়েস্ট অ্যানিমেশন ফ্রেম (এটি স্ক্রলকে সচল রাখে)
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // ৩. ঐচ্ছিক: লগ চেক করার জন্য (প্রয়োজন না হলে বাদ দিতে পারিস)
  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" },
    );
  });
}

smoothScroll();

function cursor() {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" },
    );
  });

  // মাউস যখন স্ক্রিনের বাইরে চলে যাবে (গায়েব করার জন্য)
  document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = "0";
    cursorOutline.style.opacity = "0";
  });

  // মাউস যখন আবার স্ক্রিনে ফিরে আসবে (দেখানোর জন্য)
  document.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = "1";
    cursorOutline.style.opacity = "1";
  });

  // এখানে আমরা সব লিঙ্ক, বাটন, ইমেজ এবং টিম কার্ড সিলেক্ট করছি
  const hoverElements = document.querySelectorAll(
    "a, button, img, .gt-team-card, .user-img-box, .orbit-item",
  );

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursorOutline.classList.add("cursor-hover");
      // ছবি বা কার্ডের ওপর গেলে কার্সারটা আরও একটু গ্লো করবে
      cursorOutline.style.backgroundColor = "rgba(0, 255, 255, 0.15)";
    });

    element.addEventListener("mouseleave", () => {
      cursorOutline.classList.remove("cursor-hover");
      cursorOutline.style.backgroundColor = "transparent";
    });
  });
}

cursor();
