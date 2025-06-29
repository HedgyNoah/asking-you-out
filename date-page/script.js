document.addEventListener("DOMContentLoaded", () => {
  const text = "Please pick your free time, dear";
  const target = document.getElementById("typewriter");
  let index = 0;

  function typeNextChar() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeNextChar, 100); // typing speed
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

document
  .getElementById("loveForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/playgenshinimpact1706@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        // ✅ Redirect manually to your thank-you page
        window.location.href = "../thanks-page/thankspage.html";
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      alert("Submission failed!");
    }
  });
