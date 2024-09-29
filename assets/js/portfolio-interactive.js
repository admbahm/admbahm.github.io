const canvas = document.getElementById('portfolioCanvas');
const ctx = canvas.getContext('2d');

let inactivityTimer;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(clearScreen, 30000); // 30 seconds
}

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBox();
}

function drawBox() {
    ctx.strokeStyle = '#fff';
    ctx.strokeRect(50, 50, 700, 500);
}

// Initial box drawing
drawBox();

// Handle click events
canvas.addEventListener('click', (event) => {
    resetInactivityTimer();
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x > 50 && x < 750 && y > 50 && y < 550) {
        createFirework(x, y);
    }
});

// Start the initial timer
resetInactivityTimer();
function createFirework(x, y) {
    const particles = 50;
    for (let i = 0; i < particles; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 1;
        const size = Math.random() * 3 + 1;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

        animateParticle(x, y, angle, speed, size, color);
    }
}

function animateParticle(x, y, angle, speed, size, color) {
    let frame = 0;
    const maxFrames = 60;

    function draw() {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        x += Math.cos(angle) * speed;
        y += Math.sin(angle) * speed + 0.1 * frame;

        frame++;

        if (frame < maxFrames) {
            requestAnimationFrame(draw);
        }
    }

    draw();
}
