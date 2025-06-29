function createBalloon(message) {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.textContent = message;

  balloon.style.left = `${Math.random() * 90}vw`;
  balloon.style.animationDuration = `${5 + Math.random() * 4}s`;

  balloon.addEventListener("click", () => {
    balloon.classList.add("pop");
    setTimeout(() => balloon.remove(), 100);
  });

  document.getElementById("balloons-container").appendChild(balloon);
}

const messages = [
  "I love you so much 😚",
  "💖",
  "I miss you already",
  "💕",
  "Looking forward to our date",
];

setInterval(() => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  createBalloon(msg);
}, 2000);
