// 🌙 Moon phase reading logic
function moonPhaseReading() {
  const phase = document.getElementById("moonPhase").value;
  const moonMessage = document.getElementById("moonMessage");

  const moonMessages = {
    new: "🌑 Plant intentions for healing.",
    full: "🌕 Release and manifest your goals and dreams.",
    waning: "🌘 Let go of old energy and cut the cords that no longer serve you.",
    waxing: "🌒 Grow your goals and create.",
  };

  moonMessage.textContent = moonMessages[phase] || "🧸✨ Please choose a moon phase to receive a message.";
}
moonMessage.classList.remove("revealed");
setTimeout(() => moonMessage.classList.add("revealed"), 50);

// 🔮 Tarot card definitions
const tarotCards = [
  // Major Arcana
  { name: "The Fool", message: "A new journey begins — trust the path." },
  { name: "The Magician", message: "You have all the tools — act now." },
  { name: "The High Priestess", message: "Listen to your intuition." },
  { name: "The Empress", message: "Nurture your creativity and yourself." },
  { name: "The Emperor", message: "Take the lead with confidence." },
  { name: "The Hierophant", message: "Seek wisdom from tradition or mentors." },
  { name: "The Lovers", message: "Align with your heart's truth." },
  { name: "The Chariot", message: "Stay focused — you're on the right path." },
  { name: "Strength", message: "Inner strength and patience guide you." },
  { name: "The Hermit", message: "Seek answers within." },
  { name: "Wheel of Fortune", message: "Change is inevitable — embrace it." },
  { name: "Justice", message: "Balance and fairness are key." },
  { name: "The Hanged Man", message: "Surrender and gain new perspective." },
  { name: "Death", message: "Transformation is coming — let it flow." },
  { name: "Temperance", message: "Balance brings peace." },
  { name: "The Devil", message: "Face your shadows and break free." },
  { name: "The Tower", message: "Sudden change clears the way." },
  { name: "The Star", message: "Hope and inspiration are with you." },
  { name: "The Moon", message: "Things may be unclear — trust your dreams." },
  { name: "The Sun", message: "Joy and success shine on you." },
  { name: "Judgement", message: "Reflect and rise anew." },
  { name: "The World", message: "You’ve completed a journey — celebrate!" },

  // Minor Arcana - Wands
  { name: "Ace of Wands", message: "New inspiration sparks action." },
  { name: "Two of Wands", message: "A decision opens the path forward." },
  { name: "Three of Wands", message: "Expansion and growth are coming." },
  { name: "Four of Wands", message: "Celebrate milestones with others." },
  { name: "Five of Wands", message: "Healthy competition brings clarity." },
  { name: "Six of Wands", message: "Victory is yours — be proud." },
  { name: "Seven of Wands", message: "Defend your vision confidently." },
  { name: "Eight of Wands", message: "Fast movement — stay focused." },
  { name: "Nine of Wands", message: "You’re close — stay resilient." },
  { name: "Ten of Wands", message: "Release what’s no longer yours to carry." },
  { name: "Page of Wands", message: "A new passion is calling." },
  { name: "Knight of Wands", message: "Take bold action now." },
  { name: "Queen of Wands", message: "Lead with charisma and confidence." },
  { name: "King of Wands", message: "Inspire others with your vision." },

  // Minor Arcana - Cups
  { name: "Ace of Cups", message: "New love or emotional beginnings." },
  { name: "Two of Cups", message: "Deep connection or partnership." },
  { name: "Three of Cups", message: "Joyful reunions and celebration." },
  { name: "Four of Cups", message: "Pause and reflect emotionally." },
  { name: "Five of Cups", message: "Let go of regret and look forward." },
  { name: "Six of Cups", message: "Nostalgia and healing from the past." },
  { name: "Seven of Cups", message: "Dream big, but stay grounded." },
  { name: "Eight of Cups", message: "Walk away from what no longer serves." },
  { name: "Nine of Cups", message: "Your wishes are within reach." },
  { name: "Ten of Cups", message: "Emotional fulfillment and harmony." },
  { name: "Page of Cups", message: "Surprise emotions or creative ideas." },
  { name: "Knight of Cups", message: "Romantic or emotional journey begins." },
  { name: "Queen of Cups", message: "Lead with empathy and sensitivity." },
  { name: "King of Cups", message: "Balance your emotions with wisdom." },

  // Minor Arcana - Swords
  { name: "Ace of Swords", message: "A breakthrough is here." },
  { name: "Two of Swords", message: "Time to make a clear choice." },
  { name: "Three of Swords", message: "Allow your heart to heal." },
  { name: "Four of Swords", message: "Rest and recovery are essential." },
  { name: "Five of Swords", message: "Pick your battles wisely." },
  { name: "Six of Swords", message: "A transition brings peace." },
  { name: "Seven of Swords", message: "Use strategy or protect your energy." },
  { name: "Eight of Swords", message: "You’re not as trapped as you feel." },
  { name: "Nine of Swords", message: "Release anxiety and fear." },
  { name: "Ten of Swords", message: "The end is here — healing begins." },
  { name: "Page of Swords", message: "Curiosity fuels your mind." },
  { name: "Knight of Swords", message: "Charge ahead, but stay sharp." },
  { name: "Queen of Swords", message: "Clarity and truth empower you." },
  { name: "King of Swords", message: "Lead with logic and fairness." },

  // Minor Arcana - Pentacles
  { name: "Ace of Pentacles", message: "New opportunities in abundance." },
  { name: "Two of Pentacles", message: "Balance is key right now." },
  { name: "Three of Pentacles", message: "Collaboration brings success." },
  { name: "Four of Pentacles", message: "Hold steady — but don’t cling." },
  { name: "Five of Pentacles", message: "Support is closer than you think." },
  { name: "Six of Pentacles", message: "Give and receive with grace." },
  { name: "Seven of Pentacles", message: "Patience — growth takes time." },
  { name: "Eight of Pentacles", message: "Mastery through dedication." },
  { name: "Nine of Pentacles", message: "Celebrate your independence." },
  { name: "Ten of Pentacles", message: "Legacy and abundance await." },
  { name: "Page of Pentacles", message: "Time to build and learn." },
  { name: "Knight of Pentacles", message: "Steady progress wins." },
  { name: "Queen of Pentacles", message: "Nurture what you value." },
  { name: "King of Pentacles", message: "Prosperity through leadership." },
];

// 🔁 Draw a tarot card
function drawCard() {
  const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  localStorage.setItem('lastCard', JSON.stringify(card));

  const result = document.getElementById("cardResult");
  const container = document.getElementById("cardContainer");

  result.innerHTML = `🃏 <strong>${card.name}</strong><br>${card.message}`;
  container.classList.add("flipped");

  container.onclick = () => container.classList.toggle("flipped");
}

function drawThreeCardReading() {
  const shuffled = tarotCards.sort(() => 0.5 - Math.random());
  const spread = shuffled.slice(0, 3); // Unique 3 cards

  const positions = ["Past", "Present", "Future"];
  const container = document.getElementById("threeCardContainer");
  container.innerHTML = ""; // Clear previous

  spread.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("three-card");

    cardDiv.innerHTML = `
      <div class="three-card-title">${positions[index]}</div>
      <div class="flip-card">
        <div class="flip-card-inner flipped">
          <div class="flip-card-front">🔮 Tap to reveal...</div>
          <div class="flip-card-back">
            <strong>${card.name}</strong><br>
            ${card.message}
          </div>
        </div>
      </div>
    `;

    container.appendChild(cardDiv);

    const flipCard = cardDiv.querySelector(".flip-card");
    flipCard.onclick = () => {
      flipCard.classList.toggle("flipped");
    };
  });
}

// 🌕 Fetch current moon phase on demand
async function detectMoonPhase() {
  const apiKey = '72847c6823ed44888d7b379b5797fcac';
  const url = `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const raw = data.moon_phase.toLowerCase();

    let phase = '';
    if (raw.includes('new')) phase = 'new';
    else if (raw.includes('full')) phase = 'full';
    else if (raw.includes('waning')) phase = 'waning';
    else if (raw.includes('waxing')) phase = 'waxing';

    if (phase) {
      document.getElementById('moonPhase').value = phase;
      moonPhaseReading();  // Mostrar el mensaje
    } else {
      document.getElementById('moonMessage').textContent =
        "⚠️ Moon phase not detected. Please choose manually.";
    }
  } catch (err) {
    console.error('🪐 Failed to fetch moon phase:', err);
    document.getElementById('moonMessage').textContent =
      "🚫 Could not connect to moon phase service.";
  }
}

// 🧙‍♀️ Load state on page load
window.addEventListener('load', () => {
  // Theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  // Last card
  const lastCard = JSON.parse(localStorage.getItem('lastCard'));
  if (lastCard) {
    document.getElementById("cardResult").innerHTML = `🃏 <strong>${lastCard.name}</strong><br>${lastCard.message}`;
    document.getElementById("cardContainer").classList.add("flipped");
  }

  // Moon
  fetchMoonPhase();
});

document.getElementById("cardBackResult").innerHTML = `🃏 <strong>${card.name}</strong><br>${card.message}`;

// 🌓 Toggle theme
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme", theme);
});

// Fondo ON/OFF al hacer toggle
document.getElementById("bgToggleBtn").addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("bg-on");
  body.classList.toggle("bg-off");

  // Puedes guardar el estado si deseas usar localStorage más adelante
});

function getSpreadPositions(type) {
  switch (type) {
    case 'mindBodySpirit':
      return ['Mind', 'Body', 'Spirit'];
    case 'loveWorkAdvice':
      return ['Love', 'Work', 'Advice'];
    case 'pastPresentFuture':
      return ['Past', 'Present', 'Future'];
    default:
      return ['Card 1', 'Card 2', 'Card 3'];
  }
}

cards.forEach((card, i) => {
  card.style.setProperty('--delay', `${i * 0.5}s`);
});

const reading = {
  spreadType: selectedSpread,
  cards: [card1, card2, card3], // o como sea tu estructura de cartas
  date: new Date().toISOString(),
};

localStorage.setItem("lastReading", JSON.stringify(reading));

window.addEventListener("DOMContentLoaded", () => {
  const last = localStorage.getItem("lastReading");
  if (last) {
    const reading = JSON.parse(last);
    // Puedes reconstruir la tirada aquí si quieres mostrarla
    console.log("Last saved reading:", reading);
  }
});
