// 1

function greet(name = "Unkown Person") {
  return `Hello ${name}!`;
}

console.log(greet("Hreinn"));

// 2

const resultDiv = document.querySelector(".result");

const message = showSomething("error", "Error");

resultDiv.innerHTML = message;

// 3

async function getFact() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    console.log(results[4].text);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("This will displayed always");
  }
}
getFact();
