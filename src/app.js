function search(event) {
  event.preventDefault();
  let nameInput = document.querySelector("#name-input");
  let dinoInput = document.querySelector("#dino-name-input");
  let hedyName = document.querySelector(` #namChange`);
  let hedyName1 = document.querySelector(` #namChange1`);
  let hedyName2 = document.querySelector(` #namChange2`);
  let hedyName3 = document.querySelector(` #namChange3`);
  let hedyName4 = document.querySelector(` #namChange4`);
  let hedyName5 = document.querySelector(` #namChange5`);
  let hedyName6 = document.querySelector(` #namChange6`);
  let hedyName7 = document.querySelector(` #namChange7`);
  let hedyName8 = document.querySelector(` #namChange8`);
  let dino = document.querySelector("#dinoName");
  let dino1 = document.querySelector("#dinoName1");
  let dino2 = document.querySelector("#dinoName2");
  let dino3 = document.querySelector("#dinoName3");
  let dino4 = document.querySelector("#dinoName4");
  let dino5 = document.querySelector("#dinoName5");
  let dino6 = document.querySelector("#dinoName6");
  let dino7 = document.querySelector("#dinoName7");
  hedyName.innerHTML = nameInput.value;
  hedyName1.innerHTML = nameInput.value;
  hedyName2.innerHTML = nameInput.value;
  hedyName3.innerHTML = nameInput.value;
  hedyName4.innerHTML = nameInput.value;
  hedyName5.innerHTML = nameInput.value;
  hedyName6.innerHTML = nameInput.value;
  hedyName7.innerHTML = nameInput.value;
  hedyName8.innerHTML = nameInput.value;
  dino.innerHTML = dinoInput.value;
  dino1.innerHTML = dinoInput.value;
  dino2.innerHTML = dinoInput.value;
  dino3.innerHTML = dinoInput.value;
  dino4.innerHTML = dinoInput.value;
  dino5.innerHTML = dinoInput.value;
  dino6.innerHTML = dinoInput.value;
  dino7.innerHTML = dinoInput.value;
}

let now = new Date();
let getDate = document.querySelector("#day-data");
let hours = now.getHours();
let minutes = now.getMinutes();
let clock = document.querySelector("#timeMachine");
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
clock.innerHTML = `${hours}:${minutes}`;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
getDate.innerHTML = day;
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
