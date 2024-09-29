// MachineLearningShowSkill
// CloudServicesShowSkill
// FrontEndShowSkill
// DataBaseShowSkill
// BackEndShowSkill
// FrameWorksShowSkill

skills = {
    "CartogramAssessment" : {
        "BackEndShowSkill" : ["Python"],
        "DataBaseShowSkill" : ["Deta", "No-SQL"],
        "FrontEndShowSkill" : ["Streamlit"],
        "CloudServicesShowSkill" : ["Google Collab"],
        "MachineLearningShowSkill" : [],
        "FrameWorksShowSkill" : []
    },
    "CCA" : {
        "BackEndShowSkill" : ["Python"],
        "DataBaseShowSkill" : [],
        "FrontEndShowSkill" : ["HTML", "CSS", "Bootstrap"],
        "CloudServicesShowSkill" : [],
        "MachineLearningShowSkill" : ["Random Forest", "Linear Regression"], //, "Logistic Regression", "SVM"
        "FrameWorksShowSkill" : ["Flask"]
    }
}

function ShowSkills(project) {
    console.log(project);
    var skillContent= "";
    for (cardName in skills[project]){
        skillContent= "";
        for (skill in skills[project][cardName]){
            console.log(cardName + " : " + skills[project][cardName][skill]);
            skillContent += `<li>${skills[project][cardName][skill]}</li>`
            
        }
        if (skillContent != ""){
            document.getElementById(cardName).innerHTML = skillContent;
        }
        else {
            document.getElementById(cardName).innerHTML = "";
        }
    }
}