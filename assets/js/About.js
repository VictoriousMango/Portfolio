console.log("About.js loaded successfully");

/* =========================================================
   MILESTONES DATA
========================================================= */

const milestones = [
    { 
        title: "BTech – Computer Science Foundation", 
        content: "Built strong fundamentals in Data Structures, Algorithms, Operating Systems, and core software engineering. Worked on projects in Machine Learning, Digital Image Processing, Web Applications, Arduino-based systems, statistical data analysis, and GIS technologies, gaining hands-on experience across software, data, and hardware domains." 
    },
    { 
        title: "Minor in Business Analytics – Data-Driven Thinking", 
        content: "Gained structured understanding of data analysis, statistical modeling, and business intelligence. Worked with real-world datasets to derive insights, strengthening analytical reasoning and data-driven decision making." 
    },
    { 
        title: "Freelance Projects – Real-World Problem Solving", 
        content: "Delivered end-to-end solutions using Python, Flask, and modern web technologies. Translated client requirements into scalable applications while improving system design, deployment, and debugging capabilities." 
    },
    { 
        title: "GE Appliances – Industry Experience", 
        content: "Worked in a professional engineering environment, understanding enterprise-scale systems, collaborative workflows, and production-level problem solving." 
    },
    { 
        title: "MTech – Optical Engineering", 
        content: "MTech in Optical Engineering with core coursework in Adaptive Optics, Optical System Design, and Lasers. Pursued electives in Deep Learning and Computer Vision, which became my primary technical strengths. Implemented computer vision systems, including projects involving VSLAM and geometric estimation." 
    },
    { 
        title: "LEOS Project Traineeship – Research & Innovation", 
        content: "Contributed to technically demanding projects requiring precision, modeling, and analytical depth. Applied computational methods to solve domain-specific engineering challenges." 
    }
];

/* =========================================================
   MILESTONE LOGIC
========================================================= */

const planets = document.querySelectorAll('.planet');
const milestoneContent = document.querySelector('.milestone-content');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const startButton = document.querySelector('.start-btn');

let currentIndex = -1;

function updateMilestone(index) {
    planets.forEach((planet, i) => {
        if (i === index) {
            planet.classList.add('active');
            const computedStyle = window.getComputedStyle(planet);
            milestoneContent.style.background = computedStyle.background;
        } else {
            planet.classList.remove('active');
        }
    });

    milestoneContent.innerHTML = `
        <h2 class="milestone-title">${milestones[index].title}</h2>
        <p class="milestone-text">${milestones[index].content}</p>
        <p class="timeline-indicator">${index + 1} / ${milestones.length}</p>
    `;
}

function resetToWelcome() {
    milestoneContent.style.background = "#ffcc00";
    milestoneContent.innerHTML = `
        <h2>Career Trajectory Navigator</h2>
        <p>Explore the evolution from foundational engineering to research-driven innovation.</p>
        <button class="nav-button start-btn">Begin Journey</button>
    `;

    planets.forEach(planet => planet.classList.remove('active'));
    prevButton.disabled = true;
    nextButton.disabled = true;

    document.querySelector('.start-btn').addEventListener('click', startJourney);
}

function startJourney() {
    currentIndex = 0;
    prevButton.disabled = false;
    nextButton.disabled = false;
    updateMilestone(currentIndex);
}

startButton?.addEventListener('click', startJourney);

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + milestones.length) % milestones.length;
    updateMilestone(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % milestones.length;
    updateMilestone(currentIndex);
});

resetToWelcome();

/* =========================================================
   BADGE CAROUSEL
========================================================= */

const badgeTrack = document.getElementById("view");
const badgeCards = Array.from(badgeTrack.querySelectorAll(".card"));

let activeIndex = 0;
let autoplayTimer = null;
const AUTOPLAY_DELAY = 2500;

function centerCard(index) {
    const trackRect = badgeTrack.getBoundingClientRect();
    const cardRect = badgeCards[index].getBoundingClientRect();

    const delta =
        cardRect.left +
        cardRect.width / 2 -
        (trackRect.left + trackRect.width / 2);

    badgeTrack.scrollBy({ left: delta, behavior: "smooth" });
}

function highlightActiveCard() {
    badgeCards.forEach(card => card.classList.remove("active"));
    badgeCards[activeIndex].classList.add("active");
}

function moveToNextCard() {
    activeIndex = (activeIndex + 1) % badgeCards.length;
    centerCard(activeIndex);
    highlightActiveCard();
}

function startAutoplay() {
    autoplayTimer = setInterval(moveToNextCard, AUTOPLAY_DELAY);
}

function stopAutoplay() {
    clearInterval(autoplayTimer);
}

badgeTrack.addEventListener("mouseenter", stopAutoplay);
badgeTrack.addEventListener("mouseleave", startAutoplay);

centerCard(activeIndex);
highlightActiveCard();
startAutoplay();

/* =========================================================
   CERTIFICATIONS & RECOMMENDATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const certificateData = {
        recommendations: [
            {
                title: "Freelance Work Recommendation",
                link: "https://drive.google.com/file/d/1MU1NDoPiIjWnPjKjAGFT0vz2d2W-IWZv/view"
            },
            {
                title: "GE Appliances Internship Recommendation",
                link: "https://drive.google.com/file/d/1R8C-dvOU5d3eU6K-VwZtS7XBJv9qC97P/view"
            }
        ],
        certifications: {
            top: [
                {
                    title: "Introduction to Prompt Engineering for Generative AI",
                    link: "https://www.linkedin.com/learning/certificates/c622e30b44f7792a73cb7a3b4179c7f19890807c6e656d5e7d6b342237a65541"
                },
                {
                    title: "Docker Foundations Profesional Certificate",
                    link: "https://www.linkedin.com/learning/certificates/73dee376aaecc90e68627515671cfa519a40cd4ff71766eb996acc20524bbe32"
                },
                {
                    title: "AWS DynamoDB",
                    link: "https://www.linkedin.com/learning/certificates/eaa6052e69b0220e0602a01d6971dd8bd326ecaced4c72c8649246f606b18c93"
                }
            ],
            linkedin: "https://www.linkedin.com/in/additya-akash-mishra/details/certifications/"
        }
    };

    function renderBackSides() {

        // Recommendations
        const recBack = document.getElementById("recommendations-back");
        const recUl = document.createElement("ul");

        certificateData.recommendations.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = item.link;
            a.target = "_blank";
            a.textContent = item.title;

            li.appendChild(a);
            recUl.appendChild(li);
        });

        recBack.appendChild(recUl);

        // Certifications
        const certBack = document.getElementById("certifications-back");
        const certUl = document.createElement("ul");

        certificateData.certifications.top.forEach(cert => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = cert.link;
            a.target = "_blank";
            a.textContent = cert.title;

            li.appendChild(a);
            certUl.appendChild(li);
        });

        certBack.appendChild(certUl);

        const moreDiv = document.createElement("div");
        moreDiv.classList.add("linkedin-more");

        const moreLink = document.createElement("a");
        moreLink.href = certificateData.certifications.linkedin;
        moreLink.target = "_blank";
        moreLink.textContent = "View More on LinkedIn →";

        moreDiv.appendChild(moreLink);
        certBack.appendChild(moreDiv);
    }

    renderBackSides();

    // Flip Logic
    document.querySelectorAll(".flip-card").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });

    // One-time nudge animation
    setTimeout(() => {
        document.querySelectorAll(".flip-card").forEach(card => {
            card.classList.add("nudge");
            setTimeout(() => card.classList.remove("nudge"), 1200);
        });
    }, 800);

});

/* ==========================================
   ACHIEVEMENTS MISSION CARD SYSTEM
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const achievementData = [
        {
            title: "Mapathon Project",
            subtitle: "Electric Vehicle Adoption Map | QGIS, GIS Analysis",
            description: `
                <p>
                    As part of the IIT Bombay FOSSEE Mapathon, I developed a comprehensive
                    Electric Vehicle adoption visualization project integrating official
                    Ministry data with structured geospatial boundary layers.
                </p>

                <p><strong>Using QGIS, I designed analytical maps that enable:</strong></p>

                <ul>
                    <li>Identification of optimal EV purchase states</li>
                    <li>Charger density-based inter-state travel planning</li>
                    <li>Regional EV adoption comparison</li>
                    <li>Strategic infrastructure assessment</li>
                </ul>

                <p>
                    The project transforms spatial datasets into actionable
                    decision-support visual insights.
                </p>
            `,
            skills: [
                "QGIS",
                "Geospatial Data Analysis",
                "Cartography",
                "Spatial Visualization",
                "Excel Data Processing"
            ],
            links: [
                {
                    text: "LinkedIn Post",
                    url: "https://www.linkedin.com/posts/thota-sivasankar-11197861_niit-gismapping-geospatial-activity-7074433395044286465-HHuj/"
                }
            ]
        },
        {
            title: "Freelance Project",
            subtitle: "Billing Management System | Flask, SQLite, Python",
            description: `
                <p>
                    Developed a robust billing management web application for a law firm,
                    automating financial tracking and reducing manual workload.
                </p>

                <p><strong>Key capabilities included:</strong></p>

                <ul>
                    <li>Automated Google Document bill generation</li>
                    <li>Bank-wise filtering and structured sorting</li>
                    <li>Grand total computation across accounts</li>
                    <li>SQLite-backed persistent storage</li>
                    <li>Simplified execution via .bat scripts</li>
                </ul>

                <p>
                    The system improved financial traceability and operational efficiency.
                </p>
            `,
            skills: [
                "Python",
                "Flask",
                "SQLite",
                "Flask-SQLAlchemy",
                "System Design"
            ],
            links: [
                {
                    text: "Letter of Recommendation",
                    url: "https://drive.google.com/file/d/1MU1NDoPiIjWnPjKjAGFT0vz2d2W-IWZv/view"
                }
            ]
        },
        {
            title: "Research Project",
            subtitle: "Landslide Susceptibility Mapping | ML, Google Earth Engine",
            description: `
                <p>
                    Designed a machine learning-based Landslide Susceptibility Mapping
                    algorithm to minimize subjective bias in hazard prediction.
                </p>

                <p><strong>The workflow involved:</strong></p>

                <ul>
                    <li>Large-scale geospatial storage using Google Earth Engine</li>
                    <li>Statistical hypothesis testing during preprocessing</li>
                    <li>Machine learning modeling in Python</li>
                    <li>Automated susceptibility map generation</li>
                </ul>

                <p>
                    This research was presented at NCMLAI 2023,
                    demonstrating both academic rigor and applied relevance.
                </p>
            `,
            skills: [
                "Machine Learning",
                "Google Earth Engine",
                "Statistical Analysis",
                "Spatial Modeling",
                "Research Methodology"
            ],
            links: [
                {
                    text: "Conference Abstract, Pg:61",
                    url: "https://dcal.iimb.ac.in/NCMLAI-Trivandrum2023/pdf/Book%20of%20Abstracts.pdf"
                }
            ]
        },
        {
            title: "Cartogram Assessment Application",
            subtitle: "Streamlit Deployment | No-SQL, Deta",
            description: `
                <p>
                    Developed and deployed a Cartogram Assessment web application
                    for evaluating spatial visualization effectiveness.
                </p>

                <p><strong>The system included:</strong></p>

                <ul>
                    <li>Dynamic questionnaire generation</li>
                    <li>Structured response collection</li>
                    <li>No-SQL storage using Deta</li>
                    <li>Statistical analysis via Google Colab</li>
                </ul>

                <p>
                    The project highlights modular design, scalable deployment,
                    and user-centric spatial evaluation methodology.
                </p>
            `,
            skills: [
                "Streamlit",
                "Python",
                "No-SQL (Deta)",
                "Modular Architecture",
                "Spatial Visualization"
            ],
            links: [
                {
                    text: "Application Link",
                    url: "https://victoriousmango-cartogram-questio-cartogramassessmentapp-zo0znw.streamlit.app/"
                },
                {
                    text: "GitHub Repository",
                    url: "https://github.com/VictoriousMango/cartogram_questionaire"
                }
            ]
        }
    ];

    const container = document.getElementById("achievements-container");

    achievementData.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("mission-card");

        const front = document.createElement("div");
        front.classList.add("mission-front");

        front.innerHTML = `
            <h3>${item.title}</h3>
            <p class="mission-subtitle">${item.subtitle}</p>
            <div class="mission-tech">
                ${item.skills.map(skill => `<span>${skill}</span>`).join("")}
            </div>
        `;

        const details = document.createElement("div");
        details.classList.add("mission-details");

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("mission-description");
        descriptionDiv.innerHTML = item.description;

        const skillsDiv = document.createElement("div");
        skillsDiv.classList.add("mission-skills");

        const linksDiv = document.createElement("div");
        linksDiv.classList.add("mission-links");
        linksDiv.innerHTML = item.links.map(link =>
            `<a href="${link.url}" target="_blank">${link.text} →</a>`
        ).join("<br>");

        details.appendChild(descriptionDiv);
        details.appendChild(skillsDiv);
        details.appendChild(linksDiv);

        card.appendChild(front);
        card.appendChild(details);

        container.appendChild(card);

        card.addEventListener("click", () => {
            card.classList.toggle("expanded");
        });

    });

});