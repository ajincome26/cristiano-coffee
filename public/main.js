window.addEventListener("load", function () {
  const menu = document.querySelector("#menu");
  const toggleMenu = document.querySelector("#toggle-menu");
  const menuItem = document.querySelectorAll("#menu li");
  function handleClickToggle(e) {
    if (e.target.matches("#toggle-menu")) {
      menu.classList.toggle("hidden");
      menu.classList.toggle("cr-menu-toggle");
      [...menuItem].forEach((item) => item.classList.add("cr-after-hidden"));
    } else if (!menu.contains(e.target)) {
      menu.classList.add("hidden");
      menu.classList.remove("cr-menu-toggle");
    }
  }
  document.addEventListener("click", handleClickToggle);
});
