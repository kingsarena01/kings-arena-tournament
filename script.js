const tournament = {
  season: "Season 32",
  format: "Champions League Format",
  registration: "OPEN"
};

const seasonTitle = document.getElementById("seasonTitle");
const formatText = document.getElementById("formatText");
const registrationStatus = document.getElementById("registrationStatus");

if (seasonTitle) {
  seasonTitle.innerText = tournament.season + " Coming Soon";
}

if (formatText) {
  formatText.innerText = tournament.season + " : " + tournament.format;
}

if (registrationStatus) {
  registrationStatus.innerText =
    "🟢 Registration Status : " + tournament.registration;
}
function saveTournament() {
  const season = document.getElementById("season").value;
  const format = document.getElementById("format").value;
  const registration = document.getElementById("registration").value;

  localStorage.setItem("season", season);
  localStorage.setItem("format", format);
  localStorage.setItem("registration", registration);

  alert("Tournament settings saved!");
}
const savedSeason = localStorage.getItem("season");
const savedFormat = localStorage.getItem("format");
const savedRegistration = localStorage.getItem("registration");
if (savedSeason && document.getElementById("seasonTitle")) {
  document.getElementById("seasonTitle").innerText =
    savedSeason + " Coming Soon";
}

if (savedFormat && document.getElementById("formatText")) {
  document.getElementById("formatText").innerText =
    savedSeason + " : " + savedFormat;
}

if (savedRegistration && document.getElementById("registrationStatus")) {
  document.getElementById("registrationStatus").innerText =
    "🟢 Registration Status : " + savedRegistration;
}
