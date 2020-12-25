let playerList = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
];

const playerListEl = document.getElementById("player-list");

function renderPlayers() {
  playerListEl.innerHTML = ``;
  playerList.forEach((player, i) => {
    playerListEl.innerHTML += `<li data-index="${i}">  ${player.player} ${player.score} </li>`;
  });
}

renderPlayers();

function orderScoreAsc() {
  playerList = playerList.sort((a, b) => a.score - b.score);
}

function orderScoreDsc() {
  playerList = playerList.sort((a, b) => b.score - a.score);
}

function orderPlayerAsc() {
  playerList = playerList.sort((a, b) => a.player.localeCompare(b.player));
}

function orderPlayerDsc() {
  playerList = playerList.sort((a, b) => -a.player.localeCompare(b.player));
}

document.getElementById("ordering").addEventListener("change", (e) => {
  const option = e.target.value * 1;

  switch (option) {
    case 1:
      orderScoreDsc();
      break;

    case 2:
      orderScoreAsc();
      break;

    case 3:
      orderPlayerDsc();
      break;

    case 4:
      orderPlayerAsc();
      break;
  }

  renderPlayers();
});

function fillInDetails(player) {
  document.querySelector("#player-description .name").innerHTML = player.player;
  document.querySelector("#player-description .score").innerHTML = player.score;
}

playerListEl.addEventListener("click", (e) => {
  fillInDetails(playerList[e.target.dataset.index]);
});
