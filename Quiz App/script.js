const cricketQuestions = [
    {
      question: "Who is known as the 'Little Master' in the world of cricket?",
      options: [
        { option: "A) Virat Kohli", isCorrect: false },
        { option: "B) Sachin Tendulkar", isCorrect: true },
        { option: "C) Ricky Ponting", isCorrect: false },
        { option: "D) Brian Lara", isCorrect: false },
      ],
    },
    { 
      question:
        "Which country has won the most ICC Cricket World Cups as of my last knowledge update in January 2022?",
      options: [
        { option: "A) India", isCorrect: false },
        { option: "B) Australia", isCorrect: true },
        { option: "C) Pakistan", isCorrect: false },
        { option: "D) West Indies", isCorrect: false },
      ],
    },
    {
      question:
        "In a standard One Day International (ODI) cricket match, how many overs does each team get to bowl?",
      options: [
        { option: "A) 40 overs", isCorrect: false },
        { option: "B) 50 overs", isCorrect: true },
        { option: "C) 60 overs", isCorrect: false },
        { option: "D) 20 overs", isCorrect: false },
      ],
    },
];




let questionEl = document.getElementById("question");
let optionaEl = document.getElementById("optiona");
let optionbEl = document.getElementById("optionb");
let optioncEl = document.getElementById("optionc");
let optiondEl = document.getElementById("optiond");
let nextButtonStyleEl = document.getElementById("nextButtonStyle");
let paraTextEl = document.getElementById("paraText"); 

let currentquestionIndex = 0;

function displayquestions() {
    let currentquestion = cricketQuestions[currentquestionIndex];
    questionEl.textContent = currentquestion.question;
    questionEl.classList.remove("d-none");

    optionaEl.textContent = currentquestion.options[0].option;
    optionbEl.textContent = currentquestion.options[1].option;
    optioncEl.textContent = currentquestion.options[2].option;
    optiondEl.textContent = currentquestion.options[3].option;

    optionaEl.classList.remove("d-none");  
    optionbEl.classList.remove("d-none");
    optioncEl.classList.remove("d-none");
    optiondEl.classList.remove("d-none");

    startEl.classList.add("d-none");
    nextButtonStyleEl.classList.remove("d-none");
}

let startEl = document.getElementById("start");
startEl.addEventListener("click", displayquestions);

let isAnswerSelected = false;

function selectAnswer() {
    if (isAnswerSelected) {
        // If an answer is already selected, do nothing
        return;
    }

    optionaEl.addEventListener("click", optionAClickHandler);
    optionbEl.addEventListener("click", optionBClickHandler);
    optioncEl.addEventListener("click", optionCClickHandler);
    optiondEl.addEventListener("click", optionDClickHandler);
}

function handleOptionSelection(optionElement, optionIndex) {
    isAnswerSelected = true; // Mark that an answer is selected

    if (cricketQuestions[currentquestionIndex].options[optionIndex].isCorrect) {
        paraTextEl.textContent = "Correct Answer";
        optionElement.classList.add("buttonGreen"); // Add green background for the correct answer
    } else {
        paraTextEl.textContent = "Wrong Answer";
        optionElement.classList.add("buttonRed"); // Add red background for the wrong answer
    }

    // Disable further selection of options
    optionaEl.removeEventListener("click", optionAClickHandler);
    optionbEl.removeEventListener("click", optionBClickHandler);
    optioncEl.removeEventListener("click", optionCClickHandler);
    optiondEl.removeEventListener("click", optionDClickHandler);

    // Display the next button
    nextButtonStyleEl.classList.remove("d-none");
}

function optionAClickHandler() {
    handleOptionSelection(optionaEl, 0);
}

function optionBClickHandler() {
    handleOptionSelection(optionbEl, 1);
}

function optionCClickHandler() {
    handleOptionSelection(optioncEl, 2);
}

function optionDClickHandler() {
    handleOptionSelection(optiondEl, 3);
}

selectAnswer();
