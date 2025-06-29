document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.querySelectorAll("button")[0]; // YES
  const noButton = document.querySelectorAll("button")[1]; // NO

  let yesScale = 1;
  let noScale = 1;
  const maxScale = 3;
  const minScale = 0.1;

  noButton.addEventListener("mouseenter", () => {
    moveButtonRandomly(noButton);
    growYesButton();
  });

  function moveButtonRandomly(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }

  function growYesButton() {
    if (yesScale < maxScale) {
      yesScale += 0.2;
      yesButton.style.transform = `scale(${yesScale})`;
    }
    if (noScale > minScale) {
      noScale -= 0.15;
      noButton.style.transform = `scale(${noScale})`;
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const text =
    "Hey, I'm just wondering if you're free tomorrow... for no special reason at all 👀💕";
  const target = document.getElementById("typewriter");
  let index = 0;

  function typeNextChar() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeNextChar, 50);
    } else {
      blinkCursor();
    }
  }

  function blinkCursor() {
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.animation = "blink 1s infinite";
    target.appendChild(cursor);
  }

  typeNextChar();
});

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
  "Say yes 😚",
  "💖",
  "🍓",
  "You know you want to",
  "🥺",
  "💕",
  "Date time?",
];

setInterval(() => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  createBalloon(msg);
}, 2000);

const gif = document.getElementById("emotion-gif");

let currentGif = "default";
let gifResetTimeout = null;

noButton.addEventListener("mouseenter", () => {
  if (currentGif !== "crying") {
    gif.src = "./assets/crying.gif";
    currentGif = "crying";
  }

  if (gifResetTimeout) {
    clearTimeout(gifResetTimeout);
  }

  gifResetTimeout = setTimeout(() => {
    gif.src = "./assets/default.gif";
    currentGif = "default";
    gifResetTimeout = null;
  }, 6000);
});

yesButton.addEventListener("mousedown", () => {
  gif.src = "./assets/happy.gif";
  currentGif = "happy";
  if (gifResetTimeout) {
    clearTimeout(gifResetTimeout);
    gifResetTimeout = null;
  }
});
