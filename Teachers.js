const students = [
    "Arun Sir", "Deepti Ma'am", "Karamjeet Ma'am", "Manju Ma'am", "Nikita Ma'am", "Nidhi Ma'am", "Rekha Ma'am", "Sangeeta Ma'am"
];


const nameOlPopup = document.getElementById("name-ol-popup");
const randomNameDisplay = document.getElementById("random-name");
const randomizeButton = document.getElementById("randomize-button");
const eliminateButton = document.getElementById("eliminate-button");

const originalNumbers = Array.from({ length: students.length }, (_, index) => index + 1);

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

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}






// Popup list functionality


