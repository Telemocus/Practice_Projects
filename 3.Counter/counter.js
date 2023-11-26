const increaseBtn = document.getElementById("increase-control");
const decreaseBtn = document.getElementById("decrease-control");
const counterDisplayElement = document.getElementById("counterDisplay");


let total = 0;

const limit = 20;

const updateCounterDisplay = () => {
  if (total > limit) {
    total = limit;
  }
  if (total < 0) {
    total = 0;
  }
  counterDisplayElement.textContent = total;

  document.body.style.setProperty('background-color',`rgb(${(total / limit) * 255 } , 64 , 0 )`)
};

increaseBtn.addEventListener("click", () => {
  total += 1;
  updateCounterDisplay();
});

decreaseBtn.addEventListener("click", () => {
  total -= 1;

  updateCounterDisplay();
});

