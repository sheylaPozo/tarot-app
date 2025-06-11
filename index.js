// 🌙 Moon phase message logic
function moonPhaseReading() {
  const phase = document.getElementById("moonPhase").value;
  const moonMessage = document.getElementById("moonMessage");
  const messages = {
    new: "🌑 Plant intentions for healing.",
    full: "🌕 Release & manifest your dreams.",
    waning: "🌘 Let go & clear old energy.",
    waxing: "🌒 Grow your goals & create."
  };
  moonMessage.textContent = messages[phase] || "🧸✨ Please choose a moon phase.";
  moonMessage.classList.remove("revealed");
  setTimeout(() => moonMessage.classList.add("revealed"), 20);
}

// 🔮 Tarot definitions (shortened example)
const tarotCards = [
  { name: "The Fool", message: "A new journey begins — trust the path." },
  /* ... include all 78 cards here ... */
  { name: "King of Pentacles", message: "Prosperity through leadership." }
];

// 🃏 Draw single card
function drawCard() {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  localStorage.setItem('lastCard', JSON.stringify(card));

  const back = document.getElementById("cardBackResult");
  const container = document.getElementById("cardContainer");
  back.innerHTML = `🃏 <strong>${card.name}</strong><br>${card.message}`;
  container.classList.add("flipped");
}

// 🎴 Draw 3-card spread
function drawThreeCardReading() {
  const type = document.getElementById("spreadType").value;
  const positions = {
    mindBodySpirit: ["Mind","Body","Spirit"],
    loveWorkAdvice: ["Love","Work","Advice"],
    pastPresentFuture: ["Past","Present","Future"]
  }[type] || ["Card 1","Card 2","Card 3"];

  const shuffled = [...tarotCards].sort(() => 0.5 - Math.random()).slice(0, 3);
  const container = document.getElementById("threeCardContainer");
  container.innerHTML = "";

  shuffled.forEach((card, i) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "three-card";
    cardDiv.innerHTML = `
      <div class="three-card-title">${positions[i]}</div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">🔮 Tap to reveal</div>
          <div class="flip-card-back">🃏 <strong>${card.name}</strong><br>${card.message}</div>
        </div>
      </div>`;
    container.appendChild(cardDiv);
    cardDiv.querySelector(".flip-card").onclick = () => cardDiv.querySelector(".flip-card").classList.toggle("flipped");
  });

  localStorage.setItem("lastSpread", JSON.stringify({ type, spread: shuffled, date: new Date() }));
}

// 🌕 Detect moon phase via API
async function detectMoonPhase() {
  const key = 'YOUR_API_KEY_HERE';
  try {
    const r = await fetch(`https://api.ipgeolocation.io/astronomy?apiKey=${key}`);
    const raw = (await r.json()).moon_phase.toLowerCase();
    const phase = raw.includes('new') ? 'new' : raw.includes('full') ? 'full' : raw.includes('waning') ? 'waning' : raw.includes('waxing') ? 'waxing' : '';
    if (!phase) throw "no phase";
    document.getElementById("moonPhase").value = phase;
    moonPhaseReading();
  } catch {
    document.getElementById("moonMessage").textContent =
      "⚠️ Could not detect moon phase — try manual.";
  }
}

// 🌓 Toggle theme & background control
document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? 'light' : 'dark');
};
document.getElementById("bgToggleBtn").onclick = () => {
  document.body.classList.toggle("bg-on");
  document.body.classList.toggle("bg-off");
  localStorage.setItem("bgOn", document.body.classList.contains("bg-on"));
};

// 🔄 Restore on load
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === 'light')
    document.body.classList.add("light-mode");
  if (localStorage.getItem("bgOn") === 'true')
    document.body.classList.add("bg-on");
  else
    document.body.classList.add("bg-off");

  const lastCard = localStorage.getItem('lastCard');
  if (lastCard) {
    const c = JSON.parse(lastCard);
    document.getElementById("cardBackResult").innerHTML =
      `🃏 <strong>${c.name}</strong><br>${c.message}`;
    document.getElementById("cardContainer").classList.add("flipped");
  }

  const lastSpread = localStorage.getItem("lastSpread");
  if (lastSpread) console.log("Last spread:", JSON.parse(lastSpread));
});
