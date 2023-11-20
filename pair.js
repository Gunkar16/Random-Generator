const students = [
    "Armaan", "Arnav", "Atharv", "Ayan", "Ayushman", "Divyansh", "Gunkar", "Janvi", "Kavita", "Krishna",
    "Koushal", "Malay", "Nandini", "Navdisha", "Navyansh", "Ojassya", "Pihu", "Pranav", "Rajbir", "Ravinder",
    "Rehan", "Ritwik", "Ronak", "Saanchi", "Saumya", "Samarth", "Samicah", "Shaurya", "Sharika", "Shasta",
    "Shreya", "Toshani", "Trinav", "Uday", "Vaibhavi", "Veer", "Vridhi", "Yajur"
];

const randomNameDisplay = document.getElementById("random-name");
const randomNameDisplay2 = document.getElementById("random-name2");
const randomizeButton = document.getElementById("randomize-button");
const eliminateButton = document.getElementById("eliminate-button");

const originalNumbers = Array.from({ length: students.length }, (_, index) => index);


randomizeButton.addEventListener("click", () => {
    const filteredStudents = students.filter(student => !student.removed);

    if (filteredStudents.length === 0) {
        randomNameDisplay.textContent = "No more names";
        randomNameDisplay2.textContent = "No more names"
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredStudents.length);
    const randomName = filteredStudents[randomIndex];
    
    const randomIndex2 = Math.floor(Math.random() * filteredStudents.length);
    const randomName2 = filteredStudents[randomIndex2];

        randomNameDisplay.textContent = randomName;
        randomNameDisplay2.textContent = randomName2;
});

eliminateButton.addEventListener("click", () => {
    if (randomNameDisplay.textContent === "No more names" && randomNameDisplay.textContent == "No more names") {
        return;
    }

    const eliminatedStudent = randomNameDisplay.textContent;
    const index = students.findIndex(student => student === eliminatedStudent);
    if (index !== -1) {
        students.splice(index, 1);
        originalNumbers.splice(index, 1);
        randomizeButton.click();
    }

    const eliminatedStudent2 = randomNameDisplay2.textContent;
    const index2 = students.findIndex(student => student === eliminatedStudent2);
    if (index2 !== -1) {
        students.splice(index2, 1);
        originalNumbers.splice(index2, 1);
        randomizeButton.click();
    }
});

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

