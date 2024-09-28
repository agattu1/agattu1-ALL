document.addEventListener('DOMContentLoaded', function() {
    const headingElement = document.getElementById('typing-effect');
    const texts = ['🔺 engineer', '⚽️ athlete', '☁ believer']; // Array of texts to display
    let textIndex = 0;  // Which text is currently being typed
    let charIndex = 0;  // Which character within that text is currently being typed

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            headingElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);  // Typing speed
        } else {
            setTimeout(eraseText, 1000);  // Delay before erasing
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            headingElement.textContent = texts[textIndex].slice(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);  // Erasing speed
        } else {
            textIndex = (textIndex + 1) % texts.length;  // Move to next text, loop back to start
            setTimeout(typeText, 500);  // Delay before starting to type the next text
        }
    }

    // Initialize the typing effect
    typeText();
});
