const students = [
    "Armaan", "Arnav", "Atharv", "Ayan", "Ayushman", "Divyansh", "Gunkar", "Janvi", "Kavita", "Krishna",
    "Koushal", "Malay", "Nandini", "Navdisha", "Navyansh", "Ojassya", "Pihu", "Pranav", "Rajbir", "Ravinder",
    "Rehan", "Ritwik", "Ronak", "Saanchi", "Saumya", "Samarth", "Samicah", "Shaurya", "Sharika", "Shasta",
    "Shreya", "Toshani", "Trinav", "Uday", "Vaibhavi", "Veer", "Vridhi", "Yajur"
];

document.getElementById("minutes").value = 1;
const nameOlPopup = document.getElementById("name-ol-popup");
const randomNameDisplay = document.getElementById("random-name");
const randomizeButton = document.getElementById("randomize-button");
const eliminateButton = document.getElementById("eliminate-button");

const originalNumbers = Array.from({ length: students.length }, (_, index) => index + 1);

students.forEach((student, index) => {
    const li = document.createElement("li");
    li.className = "name-list-item";

    const numberSpan = document.createElement("span");
    numberSpan.className = "name-list-number";
    numberSpan.textContent = originalNumbers[index] + ".";

    const nameSpan = document.createElement("span");
    nameSpan.className = "name-list-text";
    nameSpan.textContent = student;

    const closeButton = document.createElement("button");
    closeButton.className = "remove-button";
    closeButton.textContent = "×";

    li.appendChild(numberSpan);
    li.appendChild(nameSpan);
    li.appendChild(closeButton);
    nameOlPopup.appendChild(li);

    closeButton.addEventListener("click", () => {
        students.splice(index, 1);
        originalNumbers.splice(index, 1);
        updateNameList();
    });
});

randomizeButton.addEventListener("click", () => {
    const filteredStudents = students.filter(student => !student.removed);

    if (filteredStudents.length === 0) {
        randomNameDisplay.textContent = "No more names";
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredStudents.length);
    const randomName = filteredStudents[randomIndex];

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

eliminateButton.addEventListener("click", () => {
    if (!randomNameDisplay.textContent || randomNameDisplay.textContent === "No more names") {
        return;
    }

    const eliminatedStudent = randomNameDisplay.textContent;
    const index = students.findIndex(student => student === eliminatedStudent);
    if (index !== -1) {
        students.splice(index, 1);
        originalNumbers.splice(index, 1);
        updateNameList();
        randomizeButton.click();
    }
});

function updateNameList() {
    nameOlPopup.innerHTML = "";

    students.forEach((student, index) => {
        if (!student.removed) {
            const li = document.createElement("li");
            li.className = "name-list-item";

            const numberSpan = document.createElement("span");
            numberSpan.className = "name-list-number";
            numberSpan.textContent = originalNumbers[index] + ".";

            const nameSpan = document.createElement("span");
            nameSpan.className = "name-list-text";
            nameSpan.textContent = student;

            const closeButton = document.createElement("button");
            closeButton.className = "remove-button";
            closeButton.textContent = "×";

            li.appendChild(numberSpan);
            li.appendChild(nameSpan);
            li.appendChild(closeButton);
            nameOlPopup.appendChild(li);

            closeButton.addEventListener("click", () => {
                students.splice(index, 1);
                originalNumbers.splice(index, 1);
                updateNameList();
            });
        }
    });
}

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

// Rest of your timer and popup code
// ...


// Rest of your timer and popup code
// ...

// ... (rest of your code)

// Rest of your timer and popup code
// ...

// ... (rest of your code)


// Rest of your timer and popup code
// ...

// ... (rest of your code)

// Rest of your code for the timer and popups

// ... (rest of your code)


// ... (rest of your code)


// ... (rest of your code)

let initialHours = 0;
let initialMinutes = 0;
let initialSeconds = 0;

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
    clearInterval(timerInterval);
    timerInterval = null;
    remainingTime = initialHours * 3600 + initialMinutes * 60 + initialSeconds;
    updateTimerDisplay();
    timerPopup.style.display = "block"; // Show the timer popup
    if (!timerInterval) {
        initialHours = parseInt(hoursInput.value) || 0;
        initialMinutes = parseInt(minutesInput.value) || 0;
        initialSeconds = parseInt(secondsInput.value) || 0;

        remainingTime = initialHours * 3600 + initialMinutes * 60 + initialSeconds;

        updateTimerDisplay();

        timerPopup.style.display = "block"; // Show the timer popup

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
    remainingTime = initialHours * 3600 + initialMinutes * 60 + initialSeconds;
    updateTimerDisplay();

    if (!isPaused) {
        startTimer();
    } else {
        pauseTimerButton.innerHTML = '<img src="play.png" alt="Play" width="34" height="34">';
        pauseTimerButton.disabled = false;
    }
});

pauseTimerButton.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseTimerButton.textContent = isPaused ? "Resume" : "Pause";

    if (isPaused) {
        pauseTimerButton.innerHTML = '<img src="play.png" alt="Play" width="34" height="34">';
    } else {
        pauseTimerButton.innerHTML = '<img src="pause.png" alt="Pause" width="24" height="24">';
        startTimer();
    }
});


function updateTimerDisplay() {
    const displayHours = Math.floor(remainingTime / 3600);
    const displayMinutes = Math.floor((remainingTime % 3600) / 60);
    const displaySeconds = remainingTime % 60;

    const formattedTime = `${String(displayHours).padStart(2, "0")}:${String(displayMinutes).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}`;

    timerDisplayPopup.textContent = formattedTime;
}

function startTimer() {
    clearInterval(timerInterval);

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

// Popup list functionality

const listButton = document.getElementById("list-button");
const nameListPopup = document.getElementById("name-list-popup");
const closeListPopupButton = document.getElementById("close-list-popup");
const closeListPopupButton2 = document.getElementById("close-list-popup_lol");


listButton.addEventListener("click", () => {
    nameListPopup.style.display = "block";
});

closeListPopupButton.addEventListener("click", () => {
    nameListPopup.style.display = "none";
});

closeListPopupButton2.addEventListener("click", () => {
    timerPopup.style.display = "none";
});
// ... (rest of the code)
// ... (previous code)

// ... (previous code)

const increaseHoursButton = document.getElementById("hours-increment");
const decreaseHoursButton = document.getElementById("hours-decrement");
const increaseMinutesButton = document.getElementById("minutes-increment");
const decreaseMinutesButton = document.getElementById("minutes-decrement");
const increaseSecondsButton = document.getElementById("seconds-increment");
const decreaseSecondsButton = document.getElementById("seconds-decrement");

increaseHoursButton.addEventListener("click", () => {
    hoursInput.value = (parseInt(hoursInput.value) || 0) + 1;
});

decreaseHoursButton.addEventListener("click", () => {
    hoursInput.value = Math.max((parseInt(hoursInput.value) || 0) - 1, 0);
});

increaseMinutesButton.addEventListener("click", () => {
    minutesInput.value = (parseInt(minutesInput.value) || 0) + 1;
});

decreaseMinutesButton.addEventListener("click", () => {
    minutesInput.value = Math.max((parseInt(minutesInput.value) || 0) - 1, 0);
});

increaseSecondsButton.addEventListener("click", () => {
    secondsInput.value = (parseInt(secondsInput.value) || 0) + 1;
});

decreaseSecondsButton.addEventListener("click", () => {
    secondsInput.value = Math.max((parseInt(secondsInput.value) || 0) - 1, 0);
});
