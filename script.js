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

const overlay = document.getElementById("bgOverlay");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    // Add fade-in effect for elements
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }

    // Dark overlay logic
    if (
      entry.target.classList.contains("panel-img") ||
      entry.target.classList.contains("large-panel-img") ||
      entry.target.classList.contains("parchment-wrapper")
    ) {
      if (entry.isIntersecting) {
        overlay.style.background = "rgba(0,0,0,0.45)";
      } else {
        overlay.style.background = "rgba(0,0,0,0)";
      }
    }

  });
}, { threshold: 0.6 });

document.querySelectorAll(
  ".scroll-text, .panel-img, .large-panel-img, .parchment-wrapper"
).forEach(el => observer.observe(el));

document.querySelectorAll(".scroll-text, .panel-img, .large-panel-img")
  .forEach(el => observer.observe(el));

// Generate floating YES buttons on Page 1

const yesContainer = document.getElementById("yesContainer");

const yesOptions = [
  { text: "Yes (but in red)", color: "#e63946" },
  { text: "Yes (but in blue)", color: "#4361ee" },
  { text: "Yes (but in green)", color: "#2a9d8f" },
  { text: "Yes (but in purple)", color: "#9d4edd" },
  { text: "Yes (but in orange)", color: "#f77f00" },
  { text: "Yes (but in pink)", color: "#ff69b4" },
  { text: "Yes (but in yellow)", color: "#ffb703" },
  { text: "Yes (but in teal)", color: "#00b4d8" }
];

// Define protected center area (so they don't block your main title)
const centerZone = {
  topMin: 35,
  topMax: 65,
  leftMin: 15, // Widened the protected area slightly so text remains fully visible
  leftMax: 85
};

// Loop 30 times to create 30 scattered buttons
for (let i = 0; i < 30; i++) {
  // Pick a random style/text from your options array
  const randomOption = yesOptions[Math.floor(Math.random() * yesOptions.length)];
  
  const btn = document.createElement("button");
  btn.classList.add("floating-yes");
  btn.textContent = randomOption.text;
  btn.style.background = randomOption.color;

  let topPercent, leftPercent;

  do {
    // Generate positions between 5% and 90% to span the whole screen 
    // without completely falling off the edges
    topPercent = 5 + (Math.random() * 85);
    leftPercent = 5 + (Math.random() * 85);
  } while (
    topPercent > centerZone.topMin &&
    topPercent < centerZone.topMax &&
    leftPercent > centerZone.leftMin &&
    leftPercent < centerZone.leftMax
  );

  btn.style.top = topPercent + "%";
  btn.style.left = leftPercent + "%";

  btn.onclick = (e) => handleYesClick(e);

  yesContainer.appendChild(btn);
}

function handleNextClick(event, nextPageId) {
  // Fire the glitter effect where the mouse clicked
  createGlitter(event);

  // Wait 500ms so she can see the glitter explode before the page changes
  setTimeout(() => {
    goToPage(nextPageId);
  }, 500);
}