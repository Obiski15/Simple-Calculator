let main = document.querySelector("main");
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");
let clear = document.querySelector(".clear");
let submit = document.querySelector(".submit");

main.addEventListener("click", (e) => {
  let target = e.target.closest(".button");

  if (target) {
    if (
      target.innerHTML === "=" ||
      target.innerHTML === "C" ||
      target.innerHTML === "()"
    )
      return;
    input.value += target.innerHTML;
  }
});

function calAnswer() {
  try {
    if (input.value === "") return;
    let answer = eval(input.value);
    input.value = answer;
  } catch (error) {
    console.log(error);
    alert("Wrong request: Check values and try again");
  }
}

let keys = [];
buttons.forEach((key) => {
  keys.push(key.innerHTML);
});

// EVENT LISTENERS

clear.addEventListener("click", () => {
  input.value = "";
});

submit.addEventListener("click", calAnswer);

document.addEventListener("keydown", (e) => {
  if (e.key === "C" || e.key === "()") return;
  else if (e.key === "=" || e.key === "Enter") {
    calAnswer();
  } else if (keys.includes(e.key)) {
    input.value += e.key;
  } else return;
});
