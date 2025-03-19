function toggleMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile");
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
    menuToggle.textContent = "✖";
  } else {
    mobileMenu.style.display = "none";

    menuToggle.textContent = "☰";
  }
}

toggleMenu();
