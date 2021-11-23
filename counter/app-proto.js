function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.decreaseBtn = element.querySelector(".decrease");
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.valueDom = element.querySelector(".value");
  this.valueDom.textContent = this.value;

  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

// prototype. all the instances have this function so we dont create copies of that
Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.valueDom.textContent = this.value;
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDom.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDom.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first-counter "), 100);
const secondCounter = new Counter(getElement(".second-counter "), 200);

firstCounter.increase();
firstCounter.decrease();
firstCounter.reset();
