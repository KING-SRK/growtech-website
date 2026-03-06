const particleWrapper = document.getElementById("particleWrapper");
      const bubbleCount = 30; // 🔢 Change this to add more or fewer bubbles

      for (let i = 0; i < bubbleCount; i++) {
        const span = document.createElement("span");

        const size = 12 + Math.random() * 30; // Size: 12px to 42px
        span.style.width = `${size}px`;
        span.style.height = `${size}px`;

        const left = Math.random() * 100; // Horizontal position (0% to 100%)
        span.style.left = `${left}%`;

        const delay = Math.random() * 15; // Animation delay up to 15s
        span.style.animationDelay = `${delay}s`;

        const blur = Math.random() * 3; // Slight blur effect
        span.style.filter = `blur(${blur}px)`;

        const colors = [
          "#00ffff88",
          "#66ffff55",
          "#ffffff33",
          "#80e0ff66",
          "#33ffe099",
        ];
        span.style.background =
          colors[Math.floor(Math.random() * colors.length)];

        particleWrapper.appendChild(span);
      }