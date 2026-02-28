console.log("About.js loaded successfully");

// Milestones data
const milestones = [
    { 
        title: "BTech – Computer Science Foundation", 
        content: "Built strong fundamentals in Data Structures, Algorithms, Operating Systems, and core software engineering principles. Developed projects in Machine Learning and Computer Vision, combining theory with implementation." 
    },
    { 
        title: "Minor in Business Analytics – Data-Driven Thinking", 
        content: "Gained structured understanding of data analysis, statistical modeling, and business intelligence. Worked with real-world datasets to derive insights, strengthening analytical reasoning and decision-making skills." 
    },
    { 
        title: "Freelance Projects – Real-World Problem Solving", 
        content: "Delivered end-to-end solutions using Python, Flask, and modern web technologies. Translated client requirements into scalable applications, improving system design, deployment, and debugging capabilities." 
    },
    { 
        title: "GE Appliances – Industry Experience", 
        content: "Worked in a professional engineering environment, understanding enterprise-scale systems, collaborative workflows, and production-level problem solving." 
    },
    { 
        title: "MTech – Optical Engineering & Advanced AI", 
        content: "Deepened expertise in Computer Vision, Adaptive Optics, and advanced Machine Learning. Focused on mathematical rigor, research thinking, and implementation of complex systems such as SLAM and deep learning models." 
    },
    { 
        title: "LEOS Project Traineeship – Research & Innovation", 
        content: "Contributed to technically demanding projects requiring precision, modeling, and analytical depth. Applied computational methods to solve domain-specific engineering challenges." 
    }
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