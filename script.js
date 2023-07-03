const quizDb = [{

  question: "Q1) what is the full form of CSS?",
  a: "cascade styling style",
  b: "cascade style style",
  c: "cascade style sheet",
  d: "none",
  ans: "c"

},
{

  question: "q2what is the full form of CSS?",
  a: "cascade styling style",
  b: "cascade style style",
  c: "cascade style sheet",
  d: "none",
  ans: "c"

},
{

  question: "q3what is the full form of CSS?",
  a: "cascade styling style",
  b: "cascade style style",
  c: "cascade style sheet",
  d: "none",
  ans: "c"

},
{

  question: "q4what is the full form of CSS?",
  a: "cascade styling style",
  b: "cascade style style",
  c: "cascade style sheet",
  d: "none",
  ans: "c"

},

{

  question: "q4what is the full form of CSS?",
  a: "cascade styling style",
  b: "cascade style style",
  c: "cascade style sheet",
  d: "none",
  ans: "c"

},

{

  question: "q4what is the full form of CSS?",
  a: "cascade styling style",
  b: "cascade style style",
  c: "cascade style sheet",
  d: "none",
  ans: "c"

},

{

  question: "q5what is the full form of CSS?",
  a: "cascade styling style",
  b: "cascade style style",
  c: "cascade style sheet",
  d: "none",
  ans: "c"

},

]


const answers = document.querySelectorAll(".answer")
const question = document.querySelector(".question")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const submit = document.querySelector("#submit")

const showScore = document.querySelector("#showScore")
const playagain = document.querySelector("#playagain")
let questionCount = 0
let score = 0
const loadQuestion = () => {
  const questionList = quizDb[questionCount]
  question.innerText = questionList.question

  option1.innerText = questionList.a
  option2.innerText = questionList.b
  option3.innerText = questionList.c
  option4.innerText = questionList.d

  console.log(quizDb[1])
}
loadQuestion()

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id
    }
  })
  return answer
}
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer()
  console.log(checkedAnswer)
  if (checkedAnswer === quizDb[questionCount].ans) {
    score++
  }
  questionCount++
  if (questionCount < quizDb.length) {
    loadQuestion();
  }
  else {
    showScore.innerHTML = `
    <h3> Your score is ${score}/${quizDb.length}</h3>
    `
    showScore.classList.remove("scoreArea")
    playagain.classList.remove("playagain")
  }
  playagain.addEventListener("click", () => {
    location.reload()

  })
})
