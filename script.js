function redirectToHomePage() {
  setTimeout(function() {
      window.location.href = "home.html"; // Change "home.html" to the URL of your home page
  }, 5000); // 5000 milliseconds = 5 seconds
}

// Call the function when the page loads
window.onload = redirectToHomePage;

function toggleRegistrationType() {
  var checkbox = document.getElementById("registrationType");
  var individualLabel = document.getElementById("individualLabel");
  var companyLabel = document.getElementById("companyLabel");

  if (checkbox.checked) {
      individualLabel.style.display = "none";
      companyLabel.style.display = "inline";
  } else {
      individualLabel.style.display = "inline";
      companyLabel.style.display = "none";
  }
}

// to enable sort functionality

