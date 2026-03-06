function toggleMenu() {
        const menu = document.getElementById("navMenu");
        menu.classList.toggle("show");
      }

      function toggleTheme() {
        const body = document.body;
        const btn = document.querySelector(".theme-toggle");
        body.classList.toggle("dark-mode");
        btn.innerHTML = body.classList.contains("dark-mode")
          ? "☀️ Light Mode"
          : "🌙 Dark Mode";
        localStorage.setItem(
          "theme",
          body.classList.contains("dark-mode") ? "dark" : "light"
        );
      }

      window.onload = () => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
          document.body.classList.add("dark-mode");
          document.querySelector(".theme-toggle").innerHTML = "☀️ Light Mode";
        }
      };
      