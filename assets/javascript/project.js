// MachineLearningShowSkill
// CloudServicesShowSkill
// FrontEndShowSkill
// DataBaseShowSkill
// BackEndShowSkill
// FrameWorksShowSkill

skills = {
    "CartogramAssessment": {
        "Back-End": ["Python"],
        "Database": ["Deta", "No-SQL"],
        "Front-End": ["Streamlit"],
        "Cloud Services": ["Google Collab"]
    },
    "CCA": {
        "Back-End": ["Python"],
        "Front-End": ["HTML", "CSS", "Bootstrap"],
        "Machine Learning": ["Random Forest", "Linear Regression"], //, "Logistic Regression", "SVM"
        "Frameworks": ["Flask"]
    }
}

function ShowSkills(project) {
    var skillContent = "";
    document.getElementById("skillsList").innerHTML = "";
    for (cardName in skills[project]) {
        skillContent = "";
        for (skill in skills[project][cardName]) {
            skillContent += `<li>${skills[project][cardName][skill]}</li>`

        }

        let skillCard=`<div class="col"><div class="card"><h5 class="card-title"> ${cardName}</h5><hr><div class="card-body">${skillContent}</div></div></div>`
        document.getElementById("skillsList").innerHTML += skillCard;
    }
}