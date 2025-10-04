// Highlight active nav link dynamically
document.querySelectorAll(".nav-menu a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
