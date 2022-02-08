// 1

function greet(name = "Unkown Person") {
  return `Hello ${name}!`;
}

console.log(greet("Hreinn"));

// 2

const resultDiv = document.querySelector(".result");

const message = showSomething("success", "Success");

resultDiv.innerHTML = message;
