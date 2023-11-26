const newColorBtn = document.getElementById("new-color-btn");
const currentColor = document.getElementById("current-color");

const hexValues = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexValue() {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);

  const randomHexValue = hexValues[randomIndexPosition];

  return randomHexValue;
}

function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValue();
  }

  return hexString;

}

newColorBtn.addEventListener("click", () => {
  const randomHexString = "#" + getRandomHexString(6);

  document.body.style.setProperty("background-color", randomHexString);
 
 currentColor.textContent = randomHexString;
});
