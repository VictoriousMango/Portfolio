document.addEventListener("DOMContentLoaded", () => {

    const projects = [
        {
            id: "vslam",
            title: "V-SLAM",
            mediaType: "image",
            mediaSrc: "../assets/img/VSLAM.png",
            description: [
                "Built modular Visual SLAM pipeline with feature detection and pose estimation.",
                "Implemented Bag-of-Visual-Words loop closure using KMeans.",
                "Designed Streamlit dashboard for trajectory inspection."
            ],
            skills: ["Python", "Streamlit","Feature Detection","Feature Matching","Pose Estimation","K-Means","Pandas","NumPy"]
        },
        {
            id: "visionflow",
            title: "Vision-Flow",
            mediaType: "video",
            mediaSrc: "../assets/img/VisionFlowIcon.mp4",
            description: [
                "Developed workflow diagram analyzer generating Python/SQL schemas.",
                "Implemented OpenCV shape detection and Tesseract OCR.",
                "Integrated Groq API achieving 90% classification accuracy."
            ],
            skills: ["Python","OpenCV","Tesseract OCR","Groq API","Google Colab"]
        },
        {
            id: "cartogram",
            title: "Cartogram Assessment",
            mediaType: "image",
            mediaSrc: "https://github.com/VictoriousMango/cartogram_questionaire/blob/main/WelcomePage.gif?raw=true",
            description: [
                "Developed interactive cartogram suitability evaluation platform.",
                "Built using Streamlit and Deta No-SQL backend.",
                "Designed modular atomic components for scalability."
            ],
            skills: ["Python","Streamlit","Deta","No-SQL"]
        },
        {
            id: "churn",
            title: "Customer Churn Analysis",
            mediaType: "image",
            mediaSrc: "https://github.com/VictoriousMango/Portfolio/blob/main/assets/CCA.png?raw=true",
            description: [
                "Developed Flask-based churn prediction dashboard.",
                "Integrated Random Forest, Linear Regression and SVM.",
                "Provided business insights for retention strategies."
            ],
            skills: ["Python","Flask","HTML","CSS","Bootstrap","Random Forest","Linear Regression","SVM"]
        },
        {
            id: "understanding",
            title: "Understanding Data",
            mediaType: "image",
            mediaSrc: "https://github.com/VictoriousMango/Portfolio/blob/main/assets/CCA.png?raw=true",
            description: [
                "Data preprocessing and ML training toolkit.",
                "Implemented correlation and multicollinearity assessment.",
                "Integrated Random Forest and Decision Trees."
            ],
            skills: ["Python","Flask","HTML","CSS","Bootstrap","Correlation","Multicollinearity","Decision Trees"]
        }
    ];

    const projectsContainer = document.getElementById("projectsContainer");
    const skillsContainer = document.getElementById("skillsContainer");

    const skillFrequency = {};
    const allSkills = new Set();

    projects.forEach(project => {
        project.skills.forEach(skill => {
            allSkills.add(skill);
            skillFrequency[skill] = (skillFrequency[skill] || 0) + 1;
        });
    });

    /* =========================
       RENDER SKILLS
    ========================= */

    function renderSkills() {
        skillsContainer.innerHTML = "";

        Array.from(allSkills)
            .sort((a, b) => skillFrequency[b] - skillFrequency[a])
            .forEach(skill => {

                const bubble = document.createElement("div");
                bubble.className = "skill-bubble";
                bubble.dataset.skill = skill;

                bubble.innerHTML = `
                    ${skill}
                    <span class="skill-count">${skillFrequency[skill]}</span>
                `;

                bubble.addEventListener("click", () => activateSkill(skill));
                skillsContainer.appendChild(bubble);
            });
    }

    /* =========================
       RENDER PROJECTS
    ========================= */

    function renderProjects() {

        projectsContainer.innerHTML = "";

        projects.forEach(project => {

            const card = document.createElement("div");
            card.className = "project-card";
            card.dataset.projectId = project.id;

            const mediaHTML = project.mediaType === "video"
                ? `<video autoplay loop muted>
                        <source src="${project.mediaSrc}" type="video/mp4">
                   </video>`
                : `<img src="${project.mediaSrc}" alt="${project.title}">`;

            const descriptionHTML = project.description
                .map(item => `<li>${item}</li>`)
                .join("");

            card.innerHTML = `
                ${mediaHTML}
                <div class="project-title">${project.title}</div>
                <div class="project-overlay">
                    <h3>${project.title}</h3>
                    <div class="project-overlay-content">
                        <ul>${descriptionHTML}</ul>
                    </div>
                </div>
            `;

            card.addEventListener("click", () => activateProject(project.id));
            projectsContainer.appendChild(card);
        });
    }

    /* =========================
       ACTIVATE PROJECT
    ========================= */

    function activateProject(projectId) {

        document.querySelectorAll(".project-card")
            .forEach(card => {
                card.classList.remove("active");
                if (card.dataset.projectId === projectId) {
                    card.classList.add("active");
                }
            });

        const selectedProject = projects.find(p => p.id === projectId);

        document.querySelectorAll(".skill-bubble")
            .forEach(bubble => {
                if (selectedProject.skills.includes(bubble.dataset.skill)) {
                    bubble.classList.add("active");
                    bubble.classList.remove("dim");
                } else {
                    bubble.classList.remove("active");
                    bubble.classList.add("dim");
                }
            });

        /* =========================================
           1) GO TO HIGHEST FREQUENCY SKILL
        ========================================= */

        const sorted = [...selectedProject.skills]
            .sort((a, b) => skillFrequency[b] - skillFrequency[a]);

        const highest = sorted[0];
        const lowest = sorted[sorted.length - 1];

        const topBubble = document.querySelector(`[data-skill="${highest}"]`);
        const bottomBubble = document.querySelector(`[data-skill="${lowest}"]`);

        if (!topBubble || !bottomBubble) return;

        // Jump immediately to highest
        skillsContainer.scrollTop =
            topBubble.offsetTop -
            skillsContainer.offsetTop -
            skillsContainer.clientHeight / 2 +
            topBubble.clientHeight / 2;

        /* =========================================
           2) WAIT 2 SECONDS
           3) SCROLL DOWN IN 3 SECONDS
        ========================================= */

        setTimeout(() => {

            const start = skillsContainer.scrollTop;

            const target =
                bottomBubble.offsetTop -
                skillsContainer.offsetTop -
                skillsContainer.clientHeight / 2 +
                bottomBubble.clientHeight / 2;

            const distance = target - start;
            const duration = 3000;
            let startTime = null;

            function animateScroll(timestamp) {

                if (!startTime) startTime = timestamp;

                const progress = timestamp - startTime;
                const percent = Math.min(progress / duration, 1);

                const ease = percent < 0.5
                    ? 4 * percent * percent * percent
                    : 1 - Math.pow(-2 * percent + 2, 3) / 2;

                skillsContainer.scrollTop = start + distance * ease;

                if (progress < duration) {
                    requestAnimationFrame(animateScroll);
                }
            }

            requestAnimationFrame(animateScroll);

        }, 2000);
    }

    /* =========================
       ACTIVATE SKILL
    ========================= */

    function activateSkill(skill) {

        document.querySelectorAll(".skill-bubble")
            .forEach(bubble => {
                if (bubble.dataset.skill === skill) {
                    bubble.classList.add("active");
                    bubble.classList.remove("dim");
                } else {
                    bubble.classList.remove("active");
                    bubble.classList.add("dim");
                }
            });

        document.querySelectorAll(".project-card")
            .forEach(card => {
                const project = projects.find(p => p.id === card.dataset.projectId);
                card.classList.remove("active");
                if (project.skills.includes(skill)) {
                    card.classList.add("active");
                }
            });
    }

    renderProjects();
    renderSkills();
});