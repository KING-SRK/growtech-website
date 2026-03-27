function openVideo(videoUrl) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("appVideo");
  const source = video.querySelector("source");

  source.src = videoUrl;
  video.load();
  modal.style.display = "flex";
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("appVideo");

  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".gt-app-card");

  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // শুধু মোবাইল বা ট্যাবলেটের জন্য (768px এর নিচে)
      if (window.innerWidth <= 768) {
        // যদি সরাসরি বাটনের ওপর ক্লিক হয়, তবে যেন কার্ড বন্ধ না হয়
        if (e.target.closest(".gt-btn")) return;

        // অন্য ইভেন্টগুলো থামিয়ে দেওয়া যাতে কনফ্লিক্ট না হয়
        e.stopImmediatePropagation();

        // বাকি সব কার্ড থেকে ক্লাস সরিয়ে দেওয়া (একটি খোলা থাকলে অন্যটি বন্ধ হবে)
        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.remove("is-active");
          }
        });

        // বর্তমান কার্ডে টগল করা (আসবে এবং যাবে)
        const isActive = this.classList.contains("is-active");
        if (isActive) {
          this.classList.remove("is-active");
        } else {
          this.classList.add("is-active");
        }
      }
    });
  });

  // কার্ডের বাইরে কোথাও ক্লিক করলে যেন মেনু বন্ধ হয়ে যায়
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".gt-app-card")) {
      cards.forEach((card) => card.classList.remove("is-active"));
    }
  });
});

// গেমিং কার্ডের জন্য লজিক
document.querySelectorAll(".gt-game-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      if (e.target.closest(".gt-btn")) return;

      // অন্য গেম কার্ড বন্ধ করা
      document.querySelectorAll(".gt-game-card").forEach((c) => {
        if (c !== this) c.classList.remove("is-active");
      });

      this.classList.toggle("is-active");
      e.stopPropagation();
    }
  });
});

document.querySelectorAll(".gt-work-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      // বাটনে ক্লিক করলে যেন কার্ড বন্ধ না হয়ে লিঙ্কে যায়
      if (e.target.closest(".gt-visit-btn")) return;

      e.stopPropagation();

      // অন্য সব কার্ড বন্ধ করা
      document.querySelectorAll(".gt-work-card").forEach((c) => {
        if (c !== this) c.classList.remove("is-active");
      });

      // বর্তমান কার্ড টগল করা
      this.classList.toggle("is-active");
    }
  });
});
