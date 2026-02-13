function goToPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function handleYesClick(event) {
  const music = document.getElementById("bgMusic");
  music.play();

  createGlitter(event);

  setTimeout(() => {
    goToPage("page3");
  }, 500);
}

function createGlitter(event) {
  for (let i = 0; i < 40; i++) {
    let glitter = document.createElement("div");
    glitter.classList.add("glitter");

    glitter.style.left = event.clientX + "px";
    glitter.style.top = event.clientY + "px";

    let randomX = (Math.random() - 0.5) * 300 + "px";
    let randomY = (Math.random() - 0.5) * 300 + "px";

    glitter.style.setProperty('--x', randomX);
    glitter.style.setProperty('--y', randomY);

    document.body.appendChild(glitter);
    setTimeout(() => glitter.remove(), 700);
  }
}


// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll(".scroll-text").forEach(el => {
  observer.observe(el);
});
