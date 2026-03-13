const quiz = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML","CSS","Python","Java"],
    answer: 1
  },
  {
    question: "Which language is used for web apps?",
    options: ["PHP","Python","JavaScript","All"],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz(){
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";

  loadQuestion();
}

function loadQuestion(){
  const q = quiz[currentQuestion];

  document.getElementById("question").innerText = q.question;

  const buttons = document.querySelectorAll(".option");

  buttons.forEach((btn,index)=>{
    btn.innerText = q.options[index];
    btn.classList.remove("correct","wrong");
    btn.disabled = false;
  });
}

function selectAnswer(index){
  const buttons = document.querySelectorAll(".option");
  const correctIndex = quiz[currentQuestion].answer;

  buttons.forEach((btn,i)=>{
    btn.disabled = true; // prevent multiple clicks

    if(i === correctIndex){
      btn.classList.add("correct"); // show correct answer
    }

    if(i === index && i !== correctIndex){
      btn.classList.add("wrong"); // show wrong selected
    }
  });

  if(index === correctIndex){
    score++;
  }
}

function nextQuestion(){
  currentQuestion++;

  if(currentQuestion < quiz.length){
    loadQuestion();
  }else{
    document.querySelector(".quiz-container").innerHTML =
      "<h2>Your Score: "+score+"/"+quiz.length+"</h2>";
  }
}
