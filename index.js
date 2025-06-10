function moonPhaseReading() {
  const phase = document.getElementById("moonPhase").value;
  const message = document.getElementById("message");

  switch (phase) {
    case "new":
      message.textContent = "🌑 Plant intentions for healing.";
      break;
    case "full":
      message.textContent = "🌕 Release and manifest your goals and dreams.";
      break;
    case "waning":
      message.textContent = "🌘 Let go of old energy and cut the cords that no longer serve you.";
      break;
    case "waxing":
      message.textContent = "🌒 Grow your goals and create.";
      break;
    default:
      message.textContent = "🧸✨ Please choose a moon phase to receive a message.";
  }
}
