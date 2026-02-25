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
