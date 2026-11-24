(() => {
  const toggle = document.querySelector(".mobile-menu-button");
  const panel = document.querySelector(".header-right");
  if (!toggle || !panel) return;

  const mobile = window.matchMedia("(max-width: 900px)");
  if (!panel.id) panel.id = "primary-menu";
  toggle.setAttribute("aria-controls", panel.id);

  function setOpen(open) {
    panel.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("mobile-nav-open", open);
  }

  toggle.addEventListener("click", () => {
    setOpen(!panel.classList.contains("open"));
  });

  panel.addEventListener("click", (event) => {
    const control = event.target.closest("a, button");
    if (!control || !panel.classList.contains("open")) return;
    setOpen(false);
    if (control.matches("button.lang-button")) toggle.focus();
  });

  function closeWhenOutside(event) {
    if (panel.classList.contains("open") &&
        !panel.contains(event.target) && !toggle.contains(event.target)) {
      setOpen(false);
    }
  }

  document.addEventListener("click", closeWhenOutside);
  document.addEventListener("focusin", closeWhenOutside);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panel.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  mobile.addEventListener("change", () => setOpen(false));
  window.addEventListener("pageshow", () => setOpen(false));
})();
