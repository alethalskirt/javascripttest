let counter = 0;
let counterElement = document.getElementsByClassName("counter-value");
let plusElement = document.getElementsByClassName("plus-button");
let minusElement = document.getElementsByClassName("minus-button");
let headerElement = document.getElementById("ds9");

// this is an example of an array
let employees = ["John", "Sally", "Thad"];
console.log(employees.length);

// this is an example of an object
let toyota86 = {
  numSeats: 4,
  engine: "boxer",
  transmission: "automatic",
  colors: ["white", "black", "grey"],
}
console.log("my 86 has", toyota86.numSeats, "seats");
console.log(Object.keys(toyota86));
console.log(Object.values(toyota86));

// update counter code
const updateCounter = () => {
  counterElement[0].innerHTML = counter;
}

plusElement[0].addEventListener("click", () => {
  counter++;
  updateCounter();
})

minusElement[0].addEventListener("click", () => {
  counter--;
  updateCounter();
})

// update header code
let userHeaderInput = "";
let updateButtonElement = document.getElementsByClassName("change-header-button");
let userInputElement = document.getElementsByClassName("input-box");

const updateHeader = (newHeader) => {
  headerElement.innerHTML = newHeader;
}

updateButtonElement[0].addEventListener("click", () => {
  userHeaderInput = userInputElement[0].value;
  updateHeader(userHeaderInput);
})
