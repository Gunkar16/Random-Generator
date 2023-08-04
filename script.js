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
    console.log(students.length);
    const randomIndex = Math.floor(Math.random() * students.length + 1);
    const randomName = students[randomIndex];

    randomNameDisplay.classList.remove("fly-in");
    randomNameDisplay.style.transition = "none"; // Disable transition during setup

    const centerX = 0;
    const centerY = 0;
    const radius = getRandomValue(400, 400); // Increase the range for a larger radius
    const startAngle = getRandomValue(0, 360);
    const rotations = getRandomValue(1, 3); // Number of rotations
    const rotationAngle = 360 * rotations;
    const randomRotation = getRandomValue(-180, 180);

    // Calculate the final position using circular motion formulas
    const endAngle = startAngle + rotationAngle;
    const startX = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
    const startY = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
    const endX = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
    const endY = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

    randomNameDisplay.style.transform = `translate(${startX}px, ${startY}px) rotate(${randomRotation}deg)`;

    // Enable transition to trigger animation
    randomNameDisplay.style.transition = "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    randomNameDisplay.style.transform = `translate(${endX}px, ${endY}px) rotate(${randomRotation}deg)`; // Final position

    // Apply the flying-in animation
    setTimeout(() => {
        randomNameDisplay.textContent = randomName;
        randomNameDisplay.classList.add("fly-in");
        randomNameDisplay.style.transition = "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        randomNameDisplay.style.transform = "translate(0, 0) rotate(0deg)"; // Reset transform
    }, 1000); // Delay to ensure proper animation
});

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}
