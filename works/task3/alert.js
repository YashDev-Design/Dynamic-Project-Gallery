function welcomeUser() {
    var username = document.getElementById("username").value.trim();
    var message = username
      ? "Welcome to JS, " + username + "!"
      : "Please enter a username.";
    document.getElementById("welcome-message").textContent = message;
  }
  
  document.getElementById("enterButton").addEventListener("click", welcomeUser);
  