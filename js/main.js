document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = year;
  document.querySelectorAll(".year").forEach(el => el.textContent = year);
});