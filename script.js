const questions = [
	{
		question: "Who is the president of America",
		optionA: "Buhari",
		optionB: "Trump",
		optionC: "Osinbajo",
		optionD: "Yaradua",
		answer: "Trump"
	},
	{
		question: "What is 2 x 2",
		optionA: "8",
		optionB: "4",
		optionC: "7",
		optionD: "10",
		answer: "4"
	},
	{
		question: "Who won last presidential election",
		optionA: "Buhari",
		optionB: "Mugbalu",
		optionC: "Sowore",
		optionD: "Obasanjo",
		answer: "Buhari"
	},
	{
		question: "What is CSS used for",
		optionA: "styling",
		optionB: "HyperText",
		optionC: "syntax",
		optionD: "Calculation",
		answer: "styling"
	},
	{
		question: "What is JS",
		optionA: "Javascript",
		optionB: "Hypertext",
		optionC: "syntax",
		optionD: "Jquery syntax",
		answer: "Javascript"
	},
];

let content = document.querySelector("#content");
let questionContainer = document.querySelector("#questionContainer");
let optionAContainer = document.querySelector("#optionAContainer");
let optionBContainer = document.querySelector("#optionBContainer");
let optionCContainer = document.querySelector("#optionCContainer");
let optionDContainer = document.querySelector("#optionDContainer");
let prevButton = document.querySelector("#prevButton");
let nextButton = document.querySelector("#nextButton");
// let submit = document.querySelector("#submit");

let questionNum = document.querySelector('#questionNum');
// questionContainer.innerHTML = questions[0].question;
// optionAContainer.innerHTML = `
// 	<input type="radio" name="option">${questions[0].optionA}<br>
// 	<input type="radio" name="option">${questions[0].optionB}<br>
// 	<input type="radio" name="option">${questions[0].optionC}<br>
// 	`
// submit.innerHTML = `<button>Submit</button>`

let j = 1;

function loadQuestionum() {
questionNum.innerHTML = `Question ${j} of ${questions.length}`;
	// if (j <= (questions.length)) {
		
		j++;
	}
nextButton.addEventListener('click', loadQuestionum)
loadQuestionum();

let i = 0;
let score = 0;
let k = 0;
function nextQuestion() {
	if (i <= (questions.length-1)) {
		questionContainer.innerHTML = questions[i].question;
		optionAContainer.innerHTML =  `<input type="radio" class="options" name="option" value="${questions[i].optionA}" >${questions[i].optionA}`;
		optionBContainer.innerHTML =  `<input type="radio" class="options" name="option" value="${questions[i].optionB}" >${questions[i].optionB}`;
		optionCContainer.innerHTML =  `<input type="radio" class="options" name="option" value="${questions[i].optionC}" >${questions[i].optionC}`;
		optionDContainer.innerHTML =  `<input type="radio" class="options" name="option" value="${questions[i].optionD}" >${questions[i].optionD}`;
		// submit.innerHTML = `<input type="submit" onclick="checkAnswer()" name="submit">`;
		i++;
	}else{
		content.innerHTML = `
		<h2>Congratulations</h2>
		<p>You have a score of ${score}/${questions.length}</p>
		<p>You have a percentile of ${(score * 100) / questions.length} %</p>
		`;
	}
}

function prevQuestion() {
	if (i <= (questions.length-1)) {
		questionContainer.innerHTML = questions[i].question;
		optionAContainer.innerHTML =  `<input type="radio" class="options" name="option" value="${questions[i].optionA}" >${questions[i].optionA}`;
		optionBContainer.innerHTML =  `<input type="radio" class="options" name="option" value="${questions[i].optionB}" >${questions[i].optionB}`;
		optionCContainer.innerHTML =  `<input type="radio" class="options" name="option" value="${questions[i].optionC}" >${questions[i].optionC}`;
		optionDContainer.innerHTML =  `<input type="radio" class="options" name="option" value="${questions[i].optionD}" >${questions[i].optionD}`;
		// submit.innerHTML = `<input type="submit" onclick="checkAnswer()" name="submit">`;
		i--;
	}
	// else{
	// 	content.innerHTML = `
	// 	<h2>Congratulations</h2>
	// 	<p>You have a score of ${score}/${questions.length}</p>
	// 	<p>You have a percentile of ${(score * 100) / questions.length} %</p>
	// 	`;
	// }
}

function checkAnswer() {
	
	let options = document.getElementsByClassName("options");

	for (let x = 0; x <=options.length-1; x++) {
		if (options[x].checked) {
			if (options[x].value === (questions[i-1].answer)){
				score++;
				console.log(score);
			}
		}
	}
	
	nextQuestion();

}

checkAnswer();


// prevQuestion();
// let result = (score/(${questions.length}))*100

let count = 30;
let tId;

function countDown(){
	let timer = document.getElementById("timer");
	if (count > 0) {
		count--;
		timer.innerHTML = "This quiz will end in" +" "+ count +" "+ "seconds.";
		tId = setTimeout("countDown()", 1000);
	}else{
		alert('Time is UP...')
	}
}

countDown();
