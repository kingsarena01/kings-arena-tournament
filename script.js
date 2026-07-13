const tournament = {
  season: "Season 32",
  format: "Champions League Format",
  registration: "OPEN"
};

document.getElementById("seasonTitle").innerText =
tournament.season + " Coming Soon";
document.getElementById("formatText").innerText =
tournament.season + " : " + tournament.format;
document.getElementById("registrationStatus").innerText =
"🟢 Registration Status : " + tournament.registration;