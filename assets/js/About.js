console.log("About.js loaded successfully");

// Milestones data
const milestones = [
    { title: "Docker Foundations", content: "Learned Docker fundamentals and containerization techniques." },
    { title: "Freelance Work", content: "Developed projects using Flask, Python, and various web technologies." },
    { title: "Hackathon Win", content: "Winner for ML Track in HackGDSC, and secured the position of second runner-up in the the entire HackGDSC hackathon" },
    { title: "BTech Graduation", content: "Completed my BTech, and became a Computer Science graduate, with good amount of skills, experience, and exposure to different technologies." }
];

// Elements
const planets = document.querySelectorAll('.planet');
const milestoneContent = document.querySelector('.milestone-content');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const startButton = document.querySelector('.start-btn');

let currentIndex = -1;

// Update Milestone Content
function updateMilestone(index) {
    planets.forEach((planet, i) => {
        if (i === index) {
            planet.classList.add('active');
            milestoneContent.style.backgroundColor = planet.style.backgroundColor; // Set milestone background to active planet color
        } else {
            planet.classList.remove('active');
        }
    });

    if (index >= 0) {
        milestoneContent.innerHTML = ` 
            <h2><i><u>${milestones[index].title}</u></i></h2>
            <p>${milestones[index].content}</p>
        `;
    }
}

// Reset to Welcome Screen
function resetToWelcome() {
    milestoneContent.style.backgroundColor = "#ffcc00"; // Same as sun color
    milestoneContent.style.color = "black";
    milestoneContent.innerHTML = ` 
        <h2>Welcome to the Solar System Navigator</h2>
        <p>Click "Start" to explore milestones.</p>
        <button class="nav-button start-btn">Start</button>
    `;
    planets.forEach(planet => planet.classList.remove('active'));
    prevButton.disabled = true;
    nextButton.disabled = true;

    const startBtn = document.querySelector('.start-btn');
    startBtn.addEventListener('click', () => {
        startButtonHandler();
    });
}

// Start Button Handler
function startButtonHandler() {
    currentIndex = 0;
    updateMilestone(currentIndex);
    prevButton.disabled = false;
    nextButton.disabled = false;
    milestoneContent.style.backgroundColor = "#ffcc00"; // Same as sun color
    milestoneContent.style.color = "black";
    milestoneContent.innerHTML = `<h2><i><u>${milestones[currentIndex].title}</u></i></h2><p>${milestones[currentIndex].content}</p>`;
}

// Event Listeners
startButton.addEventListener('click', () => {
    startButtonHandler();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + milestones.length) % milestones.length;
    updateMilestone(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % milestones.length;
    updateMilestone(currentIndex);
});

// Initial state
resetToWelcome();