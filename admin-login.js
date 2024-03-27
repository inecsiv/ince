document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var adminId = document.getElementById("admin-id").value;
    var adminPassword = document.getElementById("admin-password").value;
    
    // Check if admin ID and password are correct (you can replace this with your own authentication logic)
    if (adminId === "ssaikia" && adminPassword === "saikia7896") {
      // Redirect to admin panel page after successful login
      window.location.href = "admin-panel.html"; // Change the URL to your admin panel page
    } else {
      document.getElementById("login-error").textContent = "Invalid admin ID or password.";
    }
  });
  
