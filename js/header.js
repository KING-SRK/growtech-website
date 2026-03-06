async function loadComponents() {
  try {
    const [headerRes, footerRes] = await Promise.all([
      fetch("/html/header.html"),
      fetch("/html/footer.html"),
    ]);

    const headerData = await headerRes.text();
    const footerData = await footerRes.text();

    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = headerData;
      // হেডার লোড হওয়ার পর একটিভ ক্লাস সেট করার ফাংশন কল করছি
      setActiveNavLink();
    }
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerData;
  } catch (error) {
    console.error(error);
  }
}

// বর্তমান URL অনুযায়ী একটিভ ক্লাস সেট করার ফাংশন
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach((link) => {
    // আগের সব active ক্লাস সরিয়ে ফেলছি
    link.classList.remove("active");

    // লিঙ্কের href আর বর্তমান পাথ ম্যাচ করলে active ক্লাস দিচ্ছি
    const linkPath = link.getAttribute("href");

    if (
      currentPath.endsWith(linkPath) ||
      (currentPath === "/" && linkPath === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadComponents);

window.toggleMenu = function () {
  const navMenu = document.getElementById("navMenu");
  const toggleBtn = document.querySelector(".menu-toggle");

  if (navMenu) {
    navMenu.classList.toggle("show");
    toggleBtn.innerHTML = navMenu.classList.contains("show") ? "✖" : "☰";
  }
};

document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const toggleBtn = document.querySelector(".menu-toggle");

  if (navMenu && toggleBtn) {
    if (!navMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
      navMenu.classList.remove("show");
      toggleBtn.innerHTML = "☰";
    }
  }
});
