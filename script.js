"use strict";

let main = document.querySelector("main");
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");
let clear = document.querySelector(".clear");
let submit = document.querySelector(".submit");
let error = document.querySelector(".error");

class App {
  #keys = [];
  constructor() {
    main.addEventListener("click", this.#displayValue.bind(this));
    clear.addEventListener("click", this.#clearInput.bind(this));
    submit.addEventListener("click", this.#calAnswer);
    document.addEventListener("keydown", this.#assignKeys.bind(this));
  }

  #displayValue(e) {
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
  }

  #calAnswer() {
    try {
      let answer = eval(input.value);
      if (input.value === "") return;
      input.value = answer;
    } catch (err) {
      error.innerHTML = "Wrong request: Check values and try again";
      error.style.color = "red";

      setTimeout(() => {
        error.innerHTML = "";
      }, 1000);
    }
  }

  #clearInput() {
    input.value = "";
  }

  #assignKeys(e) {
    buttons.forEach((key) => {
      this.#keys.push(key.innerHTML);
    });
    if (e.key === "C" || e.key === "()") return;
    else if (e.key === "=" || e.key === "Enter") {
      this.#calAnswer();
    } else if (this.#keys.includes(e.key)) {
      input.value += e.key;
    } else return;
  }
}

const app = new App();
