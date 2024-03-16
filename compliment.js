// Array of compliments
const compliments = [
    "You have a great smile!",
    "You're an inspiration to others.",
    "You're a ray of sunshine on a cloudy day.",
    "You're doing great!",
    "You have a heart of gold.",
    "You're incredibly talented.",
    "You're making a difference in the world.",
    "You're a true friend.",
    "You're beautiful inside and out.",
    "You're amazing just the way you are."
    
  ];
  
  // Function to generate a random compliment
  function generateCompliment() {
    // Get a random index from the compliments array
    const randomIndex = Math.floor(Math.random() * compliments.length);
    // Display the random compliment
    document.getElementById("compliment").innerText = compliments[randomIndex];
  }
  
  // Event listener for the button click
  document.getElementById("generateBtn").addEventListener("click", generateCompliment);
  
  // Generate a compliment when the page loads
  generateCompliment();