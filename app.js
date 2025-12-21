"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");

      tabs.forEach((b) => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-selected", b === btn ? "true" : "false");
      });

      panels.forEach((sec) => sec.classList.toggle("is-visible", sec.id === target));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Theme
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll(".theme-btn");
  const saved = localStorage.getItem("theme");

  if (saved) {
    root.setAttribute("data-theme", saved);
    themeButtons.forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.theme === saved ? "true" : "false")
    );
  }

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const t = btn.dataset.theme;
      root.setAttribute("data-theme", t);
      localStorage.setItem("theme", t);

      themeButtons.forEach((b) =>
        b.setAttribute("aria-pressed", b === btn ? "true" : "false")
      );
    });
  });

  // Year
  const y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());
});
