var currentQuestion = 0;
var score = 0;
var totalquestions = questions.length;

var container = document.getElementById("Quizcontainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nxtbutton = document.getElementById("nextbutton");
var prevbutton = document.getElementById("prevbutton");
var resultcontent = document.getElementById("result");

function loadquestion (questioniIndex) {
    var q = questions[questioniIndex];
    questionEl.textContent = (questioniIndex + 1) + " " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
function loadnextquestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert("please select option");
        return;
    }
    var answer = selectedOption.Value;
    if(questions[currentQuestion].answer == answer){
        score += 8;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalquestions - 1){
        nxtbutton.textContent = 'finish';
    }
    if(currentQuestion == totalquestions){
        container.style.display = 'none';
        resultcontent.style.display = '';
        resultcontent.textContent = "your score: " + score;
        return;
    }
    loadquestion(currentQuestion);        
};
loadquestion(currentQuestion);