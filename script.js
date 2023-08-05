const students = [
    "Armaan", "Arnav", "Atharv", "Ayan", "Ayushman", "Divyansh", "Gunkar", "Janvi", "Kavita", "Krishna",
    "Koushal", "Malay", "Nandini", "Navdisha", "Navyansh", "Ojassya", "Pihu", "Pranav", "Rajbir", "Ravinder",
    "Rehan", "Ritwik", "Ronak", "Saanchi", "Saumya", "Samarth", "Samicah", "Shaurya", "Sharika", "Shasta",
    "Shreya", "Toshani", "Trinav", "Uday", "Vaibhavi", "Veer", "Vridhi", "Yajur"
];

const nameOl = document.getElementById("name-ol");
const randomNameDisplay = document.getElementById("random-name");
const randomizeButton = document.getElementById("randomize-button");

students.forEach((student) => {
    const li = document.createElement("li");
    li.innerText = student;
    nameOl.appendChild(li);
});

randomizeButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * students.length);
    const randomName = students[randomIndex];

    randomNameDisplay.classList.remove("fly-in");
    randomNameDisplay.style.transition = "none";

    const centerX = 0;
    const centerY = 0;
    const radius = getRandomValue(400, 400);
    const startAngle = getRandomValue(0, 360);
    const rotations = getRandomValue(1, 3);
    const rotationAngle = 360 * rotations;
    const randomRotation = getRandomValue(-180, 180);

    const endAngle = startAngle + rotationAngle;
    const startX = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
    const startY = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
    const endX = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
    const endY = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

    randomNameDisplay.style.transform = `translate(${startX}px, ${startY}px) rotate(${randomRotation}deg)`;
    randomNameDisplay.style.transition = "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    randomNameDisplay.style.transform = `translate(${endX}px, ${endY}px) rotate(${randomRotation}deg)`;

    setTimeout(() => {
        randomNameDisplay.textContent = randomName;
        randomNameDisplay.classList.add("fly-in");
        randomNameDisplay.style.transition = "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        randomNameDisplay.style.transform = "translate(0, 0) rotate(0deg)";
    }, 1000);
});

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startTimerButton = document.getElementById("start-timer-button");
const resetTimerButton = document.getElementById("reset-timer-popup-button");
const pauseTimerButton = document.getElementById("pause-timer-popup-button");
const timerPopup = document.getElementById("timer-popup");
const timerDisplayPopup = document.getElementById("timer-display-popup");

let timerInterval = null;
let isPaused = false;
let remainingTime = 0;

startTimerButton.addEventListener("click", () => {
    if (!timerInterval) {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;

        remainingTime = hours * 3600 + minutes * 60 + seconds;

        updateTimerDisplay();

        timerInterval = setInterval(() => {
            if (!isPaused) {
                if (remainingTime <= 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    timerDisplayPopup.textContent = "Time's up!";
                } else {
                    remainingTime--;
                    updateTimerDisplay();
                }
            }
        }, 1000);
    }
});

resetTimerButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    isPaused = false;
    remainingTime = 0;
    updateTimerDisplay();
});

pauseTimerButton.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseTimerButton.textContent = isPaused ? "Resume" : "Pause";
});

function updateTimerDisplay() {
    const displayHours = Math.floor(remainingTime / 3600);
    const displayMinutes = Math.floor((remainingTime % 3600) / 60);
    const displaySeconds = remainingTime % 60;

    const formattedTime = `${String(displayHours).padStart(2, "0")}:${String(displayMinutes).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}`;

    timerDisplayPopup.textContent = formattedTime;
}
