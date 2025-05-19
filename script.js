
// Login/Register Logic
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("register-username").value;
      const password = document.getElementById("register-password").value;
      const users = JSON.parse(localStorage.getItem("users")) || {};
      if (users[username]) {
        alert("User already exists!");
        return;
      }
      users[username] = password;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registered successfully! You can log in now.");
      window.location.href = "login.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;
      const users = JSON.parse(localStorage.getItem("users")) || {};
      if (users[username] && users[username] === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "index.html";
      } else {
        alert("Invalid credentials!");
      }
    });
  }
});
