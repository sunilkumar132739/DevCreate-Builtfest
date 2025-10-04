function joinChallenge(challengeId) {
  alert("You joined the challenge: " + challengeId);

  // Example: redirect to a challenge detail page
  if (challengeId === "plastic") {
    window.location.href = "/Hackathon/HTML/Challenge-Plastic.html";
  } else if (challengeId === "commute") {
    window.location.href = "/Hackathon/HTML/Challenge-Commute.html";
  } else if (challengeId === "water") {
    window.location.href = "/Hackathon/HTML/Challenge-Water.html";
  }
}
