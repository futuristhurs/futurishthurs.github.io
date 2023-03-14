// Login form validation
function validateLoginForm() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("login-error-message");

  if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
    errorMessage.textContent = "Please enter a valid username and password.";
    return false;
  }
  return true;
}

// Signup form validation
function validateSignupForm() {
  const newUsernameInput = document.getElementById("new-username");
  const newPasswordInput = document.getElementById("new-password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const errorMessage = document.getElementById("signup-error-message");

  if (newUsernameInput.value.trim() === "") {
    errorMessage.textContent = "Please enter a valid username.";
    return false;
  }

  if (newPasswordInput.value.trim() === "" || newPasswordInput.value !== confirmPasswordInput.value) {
    errorMessage.textContent = "Please enter a valid password and make sure the passwords match.";
    return false;
  }
  return true;
}
