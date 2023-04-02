let startBtnEl = document.getElementById("start-btn");
startBtnEl.addEventListener("click", startTheQuiz);
let startPageDivEl = document.getElementById("start-page-div");
let timeLeft = 10;
let timerId;
let timeEl = document.getElementById("time");
let questionsPageDivEl = document.getElementById("questions-page-div");
let Cor1 = document.createElement('Cor1');
let Score1 = 0
let Name = "prompt"

let questions = [
  {
    question: "What is a html element?",
    choices: ["Dog", "Cat", "Toaster", "Body"],
    corrAns: "C1"
  },
  {
    question: "What does CSS Stand for?",
    choices: ["CatSipsSunny D", "Cascading style Sheet",
      "Calling Snipers Sister", "Computer Style Sheet"],
    corrAns: "C2"
  },
  {
    question: "What does a CSS do?",
    choices: ["Makes thing Shiny", "Glitter", "Layout colors and fonts", "Lines"],
    corrAns: "B3"
  },
  {
    question: "What does js Stand for?",
    choices: ["JavaSide", "JavaScreen", "JavaScript", "JavaSign"],
    corrAns: "JavaScript"
  },
  {
    question: "Game Over",
    corrAns: "D5"

  },
];

let index = 0;
let currentQuestion = questions[index];
let choicesEl = document.getElementById("choices");

function startTheQuiz() {
  // start page handling
  startPageDivEl.setAttribute("class", "hide");

  // timer handling
  timerId = setInterval(OneSecTimerFunc, 1000);
  timeEl.textContent = timeLeft;


  // questions page handling
  questionsPageDivEl.removeAttribute("class");
  showQuestion();
}

function OneSecTimerFunc() {
  timeLeft -= 1;  // timeLeft--;
  timeEl.textContent = timeLeft;
  if (timeLeft === 0) {
    textContent = "1"
    if (timeLeft === 0)
      clearInterval(textContent);
    timeEl.textContent = "--GAME OVER!!--";
    prompt("Enter Your Name ")
/////////JSON


  }
}

function showQuestion() {

  currentQuestion = questions[index];
  let questionEl = document.getElementById("question");

  questionEl.textContent = currentQuestion.question;

  choicesEl.innerHTML = "";

  for (let i = 0; i < currentQuestion.choices.length; i++) {

    let choice = currentQuestion.choices[i];
    let choiceBtnEl = document.createElement('button');
    choiceBtnEl.setAttribute('class', 'choice');
    choiceBtnEl.setAttribute('value', choice);
    choiceBtnEl.textContent = i + 1 + '. ' + choice;
    choicesEl.appendChild(choiceBtnEl);

  }
  //string.includes(searchvalue, start)


  ////////

  choicesEl.addEventListener("click", clickHandler)
  function clickHandler(event) {
    var target = event.target
    console.log(target)

    choicesEl.addEventListener("click",
      function clickHandler(event) {
        var target = event.target.value
        /////////////////
        if (target == ("Body")) {
          currentQuestion = questions[index + 1];
          let questionEl = document.getElementById("question");

          questionEl.textContent = currentQuestion.question;

          choicesEl.innerHTML = "";

          for (let i = 0; i < currentQuestion.choices.length; i++) {

            let choice = currentQuestion.choices[i];
            let choiceBtnEl = document.createElement('button');
            choiceBtnEl.setAttribute('class', 'choice');
            choiceBtnEl.setAttribute('value', choice);
            choiceBtnEl.textContent = i + 1 + '. ' + choice;
            choicesEl.appendChild(choiceBtnEl);
          }

        }
      }
    )
  }

  choicesEl.addEventListener("click",
    function clickHandler(event) {
      var target = event.target.value
      /////////////////
      if (target == ("Cascading style Sheet")) {
        currentQuestion = questions[index + 2];
        let questionEl = document.getElementById("question");

        questionEl.textContent = currentQuestion.question;

        choicesEl.innerHTML = "";

        for (let i = 0; i < currentQuestion.choices.length; i++) {

          let choice = currentQuestion.choices[i];
          let choiceBtnEl = document.createElement('button');
          choiceBtnEl.setAttribute('class', 'choice');
          choiceBtnEl.setAttribute('value', choice);
          choiceBtnEl.textContent = i + 1 + '. ' + choice;
          choicesEl.appendChild(choiceBtnEl);

        }

        //else {
        //alert("incorrect")

      }
    }
  )
}

/////////////
choicesEl.addEventListener("click",
  function clickHandler(event) {
    var target = event.target.value
    /////////////////
    if (target == ("Layout colors and fonts")) {
      currentQuestion = questions[index + 3];
      let questionEl = document.getElementById("question");

      questionEl.textContent = currentQuestion.question;

      choicesEl.innerHTML = "";

      for (let i = 0; i < currentQuestion.choices.length; i++) {

        let choice = currentQuestion.choices[i];
        let choiceBtnEl = document.createElement('button');
        choiceBtnEl.setAttribute('class', 'choice');
        choiceBtnEl.setAttribute('value', choice);
        choiceBtnEl.textContent = i + 1 + '. ' + choice;
        choicesEl.appendChild(choiceBtnEl);
        //if (questions == [Q1] + 1) ;
        // questions.showQuestion ="Q2"
      }

      //else {
      //alert("incorrect")

    }
  }
)

/////////////

choicesEl.addEventListener("click",
  function clickHandler(event) {
    var target = event.target.value
    /////////////////
    if (target == ("JavaScript"))
      currentQuestion = questions[index + 4];
    let questionEl = document.getElementById("question");

    questionEl.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";

    for (let i = 0; i < currentQuestion.choices.length; i++) {

      let choice = currentQuestion.choices[i];
      let choiceBtnEl = document.createElement('button');
      choiceBtnEl.setAttribute('class', 'choice');
      //questions.choices
      choiceBtnEl.setAttribute('value', choice);

      choiceBtnEl.textContent = i + 1 + '. ' + choice;

      choicesEl.appendChild(choiceBtnEl);
      this.getElementsByClassName


    }
  }
)
