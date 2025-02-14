// Create monkey element
const monkey = document.createElement("img");
monkey.src = chrome.runtime.getURL("/images/monkey.png");
monkey.id = "monkey";
document.body.appendChild(monkey);

// Initialize variables for smooth follow
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

// Function to smoothly move the monkey
function followCursor() {
  // Adjust monkey's position with easing effect
  currentX += (targetX - currentX) * 0.1; // The lower the multiplier, the slower the movement
  currentY += (targetY - currentY) * 0.1;
  
  monkey.style.left = `${currentX}px`;
  monkey.style.top = `${currentY}px`;

  requestAnimationFrame(followCursor);
}

// Event listener to update the target position on mousemove
document.addEventListener("mousemove", (e) => {
  targetX = e.pageX + 10; // Offset to the right of the cursor
  targetY = e.pageY + 10; // Offset below the cursor
});

// Start the animation loop
followCursor();
