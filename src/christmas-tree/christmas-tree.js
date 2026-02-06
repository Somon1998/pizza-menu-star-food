function showTreeIfWinter() {
  const today = new Date();
  const month = today.getMonth(); // 0 — январь, 11 — декабрь
  const day = today.getDate();

  const isWinter =
    month === 11 || // декабрь
    month === 0 || // январь
    (month === 1 && day <= 28); // февраль до 28

  const treeElement = document.getElementById("tree");

  if (treeElement) {
    treeElement.classList.toggle("hidden", !isWinter);
  }
}

export { showTreeIfWinter };
