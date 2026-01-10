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

/* =========================================================
   BADGE CAROUSEL (Circular Queue, Infinite)
========================================================= */

const badgeTrack = document.getElementById("view");
const badgeCards = Array.from(badgeTrack.querySelectorAll(".card"));

let activeIndex = 0;
let autoplayTimer = null;
const AUTOPLAY_DELAY = 2500;

/* -----------------------------
   Helpers
----------------------------- */

// Scroll a given card to the visual center
function centerCard(index) {
    const trackRect = badgeTrack.getBoundingClientRect();
    const cardRect = badgeCards[index].getBoundingClientRect();

    const delta =
        cardRect.left +
        cardRect.width / 2 -
        (trackRect.left + trackRect.width / 2);

    badgeTrack.scrollBy({ left: delta, behavior: "smooth" });
}

// Update glow / highlight
function highlightActiveCard() {
    badgeCards.forEach(card => card.classList.remove("active"));
    badgeCards[activeIndex].classList.add("active");
}

/* -----------------------------
   Circular Queue Logic
----------------------------- */

function moveToNextCard() {
    activeIndex = (activeIndex + 1) % badgeCards.length;
    centerCard(activeIndex);
    highlightActiveCard();
}

/* -----------------------------
   Autoplay Control
----------------------------- */

function startAutoplay() {
    autoplayTimer = setInterval(moveToNextCard, AUTOPLAY_DELAY);
}

function stopAutoplay() {
    clearInterval(autoplayTimer);
}

/* -----------------------------
   User Interaction
----------------------------- */

badgeTrack.addEventListener("mouseenter", stopAutoplay);
badgeTrack.addEventListener("mouseleave", startAutoplay);

/* -----------------------------
   Init
----------------------------- */

centerCard(activeIndex);
highlightActiveCard();
startAutoplay();
