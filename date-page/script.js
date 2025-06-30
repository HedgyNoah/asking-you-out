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
        window.location.href = "../thanks-page/thankspage.html";
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      alert("Submission failed!");
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const hourSelects = document.querySelectorAll(".hour-select");
  const minuteSelects = document.querySelectorAll(".minute-select");

  for (let h = 0; h < 24; h++) {
    const option = document.createElement("option");
    option.value = h.toString().padStart(2, "0");
    option.textContent = h.toString().padStart(2, "0");
    hourSelects.forEach((select) => select.appendChild(option.cloneNode(true)));
  }

  for (let m = 0; m < 60; m++) {
    const option = document.createElement("option");
    option.value = m.toString().padStart(2, "0");
    option.textContent = m.toString().padStart(2, "0");
    minuteSelects.forEach((select) =>
      select.appendChild(option.cloneNode(true))
    );
  }

  const startHour = document.querySelector("[name='start-hour']");
  const startMinute = document.querySelector("[name='start-minute']");
  const endHour = document.querySelector("[name='end-hour']");
  const endMinute = document.querySelector("[name='end-minute']");
  const startHidden = document.getElementById("start-hidden");
  const endHidden = document.getElementById("end-hidden");

  function updateHiddenInputs() {
    startHidden.value = `${startHour.value}:${startMinute.value}`;
    endHidden.value = `${endHour.value}:${endMinute.value}`;
  }

  [startHour, startMinute, endHour, endMinute].forEach((select) =>
    select.addEventListener("change", updateHiddenInputs)
  );

  startHour.value = "08";
  startMinute.value = "00";
  endHour.value = "17";
  endMinute.value = "00";
  updateHiddenInputs();
});
