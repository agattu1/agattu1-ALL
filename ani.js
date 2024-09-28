document.addEventListener('DOMContentLoaded', function() {
    const headingElement = document.getElementById('typing-effect');
    const texts = ['🔺 engineer', '⚽️ athlete', '☁ believer'];
    let textIndex = 0;  //txt typing rn
    let charIndex = 0;  //char in that txt which is typing rn

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            headingElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);  // Typing speed which can be adjusted to whatver I want
        } else {
            setTimeout(eraseText, 1000);  // Delay b4 you erase, reminds me of ECE2035 game I made lol
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            headingElement.textContent = texts[textIndex].slice(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);  // Erasing speed
        } else {
            textIndex = (textIndex + 1) % texts.length;  // Basically this move to next text in the array and if that is done, just loop back to start
            setTimeout(typeText, 500);  // Hold on a sec b4 you type the next word in array 
        }
    }

    //Bring the action ... (Race Gurram)
    typeText();
});
