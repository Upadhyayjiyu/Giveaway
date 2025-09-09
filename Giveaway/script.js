const form = document.getElementById("giveawayForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("🎉 Thank you for entering the giveaway! Good luck!");
  form.reset();
});
