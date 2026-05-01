document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".team-card"); // ✅ FIXED
  const details = document.getElementById("teamDetails");
  const container = document.querySelector(".team-cards");

  cards.forEach((card) => {
    card.addEventListener("click", () => {

      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      container.classList.add("shrink");

      const name = card.dataset.name;
      const role = card.dataset.role;
      const avatar = card.dataset.avatar;
      const desc = card.dataset.desc;

      details.classList.add("show");

      details.innerHTML = `
        <button onclick="closePanel()">✖</button>
        <img src="${avatar}" />
        <h2>${name}</h2>
        <p>${role}</p>
        <p>${desc}</p>
      `;
    });
  });

});

function closePanel() {
  document.querySelector(".team-cards").classList.remove("shrink");
  document.getElementById("teamDetails").classList.remove("show");
  document
    .querySelectorAll(".team-card") // ✅ FIXED
    .forEach((c) => c.classList.remove("active"));
}