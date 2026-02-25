document.getElementById("year").textContent = new Date().getFullYear();

const lastUpdatedEl = document.getElementById("last-updated");
if (lastUpdatedEl) {
  const modified = new Date(document.lastModified);
  const formatted = modified.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  lastUpdatedEl.textContent = formatted;
}

const setAnchorOffset = () => {
  const nav = document.querySelector(".top-nav");
  if (!nav) return;
  const rect = nav.getBoundingClientRect();
  const extraGap = 10;
  const offset = Math.ceil(rect.bottom + extraGap);
  document.documentElement.style.setProperty("--anchor-offset", `${offset}px`);
};

setAnchorOffset();
window.addEventListener("resize", setAnchorOffset);
window.addEventListener("load", setAnchorOffset);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(setAnchorOffset);
}
