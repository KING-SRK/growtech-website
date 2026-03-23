// Loader.html ফাইলটি পড়ার জন্য (Fetch)
fetch("/html/loder.html")
  .then((response) => response.text())
  .then((data) => {
    // যেখানে প্লেসহোল্ডার আছে সেখানে কোডটা ঢুকিয়ে দেওয়া হচ্ছে
    document.getElementById("loader-placeholder").innerHTML = data;
  })
  .catch((error) => console.log("Loader load hote somosya: ", error));

window.addEventListener("load", function () {
  const loader = document.getElementById("loader-placeholder");
  const mainContent = document.getElementById("main-content"); // মেইন কন্টেন্ট ধরলাম

  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0"; // লোডার আবছা হয়ে যাবে

      // ১. মেইন কন্টেন্ট এখন দেখাও
      if (mainContent) {
        mainContent.style.display = "block";
      }

      // ২. স্ক্রল ফিরিয়ে দাও
      document.body.style.overflow = "auto";

      setTimeout(() => {
        loader.style.display = "none"; // লোডার পুরোপুরি ভ্যানিশ
      }, 500);
    }
  }, 1000);
});
