const colors = [
  { color: "#ff1493", text: "Yes (but in hot pink) 💖" },
  { color: "#ff4d6d", text: "Yes (but in red) ❤️" },
  { color: "#4CAF50", text: "Yes (but in green) 💚" },
  { color: "#ff85c1", text: "Yes (but softer) 🌸" },
  { color: "#ff69b4", text: "Yes (but dramatic) ✨" },
  { color: "#ff6ec7", text: "Yes (but sparkly) 💅" }
];

const music = document.getElementById("bgMusic");

// MAIN centered bigger Yes button
function createMainYesButton() {
  let btn = document.createElement("button");
  btn.classList.add("yes-btn");
  btn.innerText = "Yes 💘";
  btn.style.background = "linear-gradient(45deg, #ff1493, #ff69b4)";
  btn.style.padding = "16px 40px";
  btn.style.fontSize = "20px";
  btn.style.position = "relative";
  btn.style.marginTop = "30px";
  btn.onclick = (e) => handleYesClick(e);

  document.getElementById("page1").appendChild(btn);
}

// Surrounding Yes buttons arranged in a circle
function createSurroundingYesButtons() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2 + 50; // slightly below title
  const radius = 250;

  colors.forEach((item, index) => {
    let angle = (index / colors.length) * (2 * Math.PI);

    let x = centerX + radius * Math.cos(angle);
    let y = centerY + radius * Math.sin(angle);

    let btn = document.createElement("button");
    btn.classList.add("yes-btn");
    btn.innerText = item.text;
    btn.style.background = item.color;
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    btn.onclick = (e) => handleYesClick(e);

    document.body.appendChild(btn);
  });
}

function handleYesClick(event) {
  music.play();
  createGlitter(event);

  setTimeout(() => {
    document.querySelectorAll(".yes-btn").forEach(btn => btn.remove());
    goToPage("page2");
  }, 500);
}

function goToPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "page3") {
    startPage3Animation();
  }
}

function createGlitter(event) {
  for (let i = 0; i < 50; i++) {
    let glitter = document.createElement("div");
    glitter.classList.add("glitter");

    glitter.style.left = event.clientX + "px";
    glitter.style.top = event.clientY + "px";

    let randomX = (Math.random() - 0.5) * 400 + "px";
    let randomY = (Math.random() - 0.5) * 400 + "px";

    glitter.style.setProperty('--x', randomX);
    glitter.style.setProperty('--y', randomY);

    document.body.appendChild(glitter);
    setTimeout(() => glitter.remove(), 700);
  }
}

// Initialize page1 buttons
createMainYesButton();
createSurroundingYesButtons();


function startPage3Animation() {
  setTimeout(() => {
    document.getElementById("p3-line2").classList.remove("hidden-text");
  }, 1200);

  setTimeout(() => {
    document.getElementById("p3-line3").classList.remove("hidden-text");
  }, 2400);

  setTimeout(() => {
    document.getElementById("p3-next").classList.remove("hidden-text");
  }, 3500);
}

function goToRomcom(event) {
  createGlitter(event);

  setTimeout(() => {
    goToPage("page4");
    startRomcomSequence();
  }, 600);
}

function startRomcomSequence() {
  setTimeout(() => {
    document.getElementById("r1").classList.remove("hidden-text");
  }, 800);

  setTimeout(() => {
    document.getElementById("r2").classList.remove("hidden-text");
  }, 2500);

  setTimeout(() => {
    document.getElementById("r2img").classList.remove("hidden-text");
  }, 3500);

  setTimeout(() => {
    document.getElementById("r3").classList.remove("hidden-text");
  }, 5200);

  setTimeout(() => {
    document.getElementById("r3img").classList.remove("hidden-text");
  }, 6200);

  setTimeout(() => {
    document.getElementById("r4").classList.remove("hidden-text");
  }, 8000);

  setTimeout(() => {
  goToPage("page5");
}, 10500);  // 2-3 seconds after final line appears
}


// Scroll reveal
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

// Live answer heart
function showHeart() {
  document.getElementById("heartResponse").innerHTML = "💖";
}
