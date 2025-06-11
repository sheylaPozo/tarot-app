// Moon phase reading function
function moonPhaseReading() {
  const phase = document.getElementById("moonPhase").value;
  const message = document.getElementById("message");

  const tarotCards = [
    { name: "The Fool", message: "A new journey begins — trust the path." },
    { name: "The High Priestess", message: "Listen to your intuition." },
    { name: "The Tower", message: "Sudden change clears the way." },
    { name: "The Star", message: "Hope and renewal are near." },
    { name: "The Empress", message: "Nurture your creations and self." }
    // Add more cards as you like
  ];

  // Pick random card
  const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  switch (phase) {
    case "new":
      message.innerHTML = `🌑 Plant intentions for healing.<br><br>🔮 Your card: <strong>${randomCard.name}</strong> — ${randomCard.message}`;
      break;
    case "full":
      message.innerHTML = `🌕 Manifest your goals.<br><br>🔮 Your card: <strong>${randomCard.name}</strong> — ${randomCard.message}`;
      break;
    case "waning":
      message.innerHTML = `🌘 Release the old.<br><br>🔮 Your card: <strong>${randomCard.name}</strong> — ${randomCard.message}`;
      break;
    case "waxing":
      message.innerHTML = `🌒 Grow your dreams.<br><br>🔮 Your card: <strong>${randomCard.name}</strong> — ${randomCard.message}`;
      break;
    default:
      message.textContent = "🧸✨ Please choose a moon phase to receive a message.";
  }
}
