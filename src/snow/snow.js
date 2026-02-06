function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";

  const snowContainer = document.querySelector(".snow-container");

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = Math.random() * 3 + 3 + "s";

  snowContainer.appendChild(snowflake);

  setTimeout(() => snowflake.remove(), 12000);
}

// Автоматически запускаем снегопад зимой
function startSnow() {
  const today = new Date();
  const month = today.getMonth(); // 0–11
  const day = today.getDate();

  const isWinter =
    month === 11 || // Декабрь
    month === 0 || // Январь
    (month === 1 && day <= 28); // До конца февраля

  if (isWinter) {
    setInterval(createSnowflake, 80);
  }
}
export { startSnow };
