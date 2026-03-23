// Loader.html ফাইলটি পড়ার জন্য (Fetch)
fetch("/html/loder.html")
  .then((response) => response.text())
  .then((data) => {
    // যেখানে প্লেসহোল্ডার আছে সেখানে কোডটা ঢুকিয়ে দেওয়া হচ্ছে
    document.getElementById("loader-placeholder").innerHTML = data;
  })
  .catch((error) => console.log("Loader load hote somosya: ", error));

// পেজ লোড হয়ে গেলে লোডার সরিয়ে ফেলার জন্য
window.addEventListener("load", function () {
  const loader = document.getElementById("loader-placeholder");

  // ১ সেকেন্ড পর সরিয়ে দেওয়া (যাতে সুন্দর করে দেখা যায়)
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // ভ্যানিশ হওয়ার ট্রানজিশন টাইম
  }, 1000);
});
