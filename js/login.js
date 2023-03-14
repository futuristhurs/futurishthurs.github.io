if (username === "example" && password === "password") {
  window.location.href = "home.html";
} else if (usernameExistsInDatabase(username)) {
  errorMessage.textContent = "Incorrect password. Please try again.";
} else {
  errorMessage.textContent = "No account found with that username. Please sign up.";
}
