function getElement (selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(
        `please check ${selection} selector , no such element exist`
    );
};
// constructor function

function Counter ( element, value){
    this.Counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');   
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;
    // blin this to all functions
    this.increase = this.increase.bind(this);
    this.decrease = this. decrease.bind(this);
    this.reset = this.reset.bind(this)

    // event listeber in all btns using bind
   this.increaseBtn.addEventListener('click',this.increase);
   this.decreaseBtn.addEventListener('click',this.decrease);
   this.resetBtn.addEventListener('click',this.reset);
}


Counter.prototype.increase = function () {

    this.value++;
    this.valueDOM.textContent = this.value
};
Counter.prototype.decrease = function () {
    
    this.value--;
    this.valueDOM.textContent = this.value
};
Counter.prototype.reset = function () {
   
    this.value = 0;
    this.valueDOM.textContent = this.value
};
// new creates new object points to it

const firstCounter = new Counter(getElement('.first-counter'),10)
const secondCounter = new Counter(getElement('.second-counter'),20)

