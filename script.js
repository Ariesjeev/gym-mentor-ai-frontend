const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const demoVideo = document.getElementById("demoVideo");
const demoFrame = document.querySelector(".demo-frame");

/* Mobile navigation */
function closeMenu() {
  menuToggle.classList.remove("active");
  navLinks.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = !navLinks.classList.contains("open");
  menuToggle.classList.toggle("active", isOpen);
  navLinks.classList.toggle("open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) closeMenu();
});

/* Demo video: only reveal video UI when the local file exists and is usable. */
demoVideo?.addEventListener("loadedmetadata", () => {
  demoFrame?.classList.add("video-ready");
});

demoVideo?.addEventListener("error", () => {
  demoFrame?.classList.remove("video-ready");
});

/* Scroll reveal */
const revealItems = document.querySelectorAll(
  ".feature-card, .exercise-card, .stack-card, .pipeline, .demo-frame"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("reveal"));
}
