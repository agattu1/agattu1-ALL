// JavaScript
import { SpeedInsights } from "@vercel/speed-insights/next"
const headingElement = document.getElementById('typing-effect');
//const texts = ['athlete', 'engineer', 'believer'];
// const texts = ['🔺 GARMIN Software Engineer', '⚽️ Fitness', '☁️ Cloud Enthusiast'];
const texts = ['🔺 engineer', '⚽️ athlete', '☁ believer'];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    headingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100); // Typing speed (adjust as needed)
  } else {
    setTimeout(eraseText, 1000); // Delay before erasing the text (adjust as needed)
  }
}

function eraseText() {
  const currentText = headingElement.textContent;
  if (charIndex >= 0) {
    headingElement.textContent = currentText.slice(0, charIndex);
    charIndex--;
    setTimeout(eraseText, 50); // Erasing speed (adjust as needed)
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0; // Restart from the beginning once all texts are typed
    }
    setTimeout(typeText, 500); // Delay before typing the next text (adjust as needed)
  }
}

typeText();
