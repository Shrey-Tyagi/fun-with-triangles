const formInfo = document.querySelector(".form-quiz");
const submitBtn = document.querySelector(".btn-submit");
const outputData = document.querySelector(".output");

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "no"
  ];


function calculateScore() {
    const formResult = new FormData(formInfo);
    let score = 0;
    let index = 0;
    for(let value of formResult.values()){
        if (value === correctAnswers[index]) {
            score = score + 1;
          }
          index = index + 1;
        }
    outputData.innerText = "The score is " + score;
}

submitBtn.addEventListener("click", calculateScore);
