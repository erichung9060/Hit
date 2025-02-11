let count = 0;
const countDisplay = document.getElementById('count');
const pleaDisplay = document.getElementById('plea');
const boyImage = document.querySelector('.boy img');
const punchButton = document.getElementById('punchButton');

const pleas = [
    "求求你，別打了!",
    "我錯了，放過我吧!",
    "再打我就哭了!",
    "我會告訴媽媽的!"
];

punchButton.addEventListener('mousedown', () => {
    boyImage.src = 'boy.gif';
    punchButton.interval = setInterval(() => {
        count++;
        countDisplay.textContent = count;
        boyImage.style.transform = 'translateX(-10px)';
        
        if (count % 5 === 0) {
            pleaDisplay.textContent = pleas[(count / 5 - 1) % pleas.length];
        }
    }, 100);
});

punchButton.addEventListener('mouseup', () => {
    clearInterval(punchButton.interval);
    boyImage.style.transform = 'translateX(0)';
    boyImage.src = 'boy.png';
});