// Starry background animation
document.addEventListener("DOMContentLoaded", () => {
  const stars = 100;
  for (let i = 0; i < stars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(star);
  }
});
