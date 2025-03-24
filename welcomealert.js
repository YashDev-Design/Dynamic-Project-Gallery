document.addEventListener('DOMContentLoaded', function() {
    // Create blur background element
    var blurBg = document.createElement("div");
    blurBg.id = "blurBg";
    blurBg.style.position = "fixed";
    blurBg.style.top = "0";
    blurBg.style.left = "0";
    blurBg.style.width = "100%";
    blurBg.style.height = "100%";
    blurBg.style.zIndex = "999"; // Below the alert box
    blurBg.style.backdropFilter = "blur(5px)"; // Apply blur
    document.body.appendChild(blurBg);
  
    // Create alert box
    var alertBox = document.createElement("div");
    alertBox.id = "welcomeAlert";
    alertBox.innerHTML = `
      <h2>Welcome to my Gallery of Projects!</h2>
      <p>My name is Javeed Quadri Mohammad, a Graduate Student in Master's of Computer Science at Auburn University at Montgomery.</p>
      <p>Here I present you 15 basic to advanced HTML, CSS, and JS tasks performed from the beginning of my semester to the mid-semester.</p>
      <button onclick="closeAlert()">Got it!</button>
    `;
    document.body.appendChild(alertBox);
  
    // Close alert function
    window.closeAlert = function() {
      var alertBox = document.getElementById("welcomeAlert");
      var blurBg = document.getElementById("blurBg");
      alertBox.style.display = "none";
      blurBg.style.display = "none"; // Hide blur background
    };
  
    // Add CSS styles dynamically
    var style = document.createElement('style');
    style.innerHTML = `
      #welcomeAlert {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(240, 248, 255, 0.95);
        border: 3px solid #1e90ff;
        padding: 30px;
        z-index: 1000;
        width: 90%;
        max-width: 800px;
        text-align: center;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        border-radius: 12px;
        font-family: sans-serif;
        color: #333;
        font-size: 1.1em;
      }
  
      #welcomeAlert h2 {
          color: #1e90ff;
          font-size: 1.8em;
          margin-bottom: 15px;
      }
  
      #welcomeAlert button {
        background-color: #1e90ff;
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 20px;
        font-size: 1.1em;
      }
    `;
    document.head.appendChild(style);
  });