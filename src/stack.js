const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
  	this.arr = [];
  }

  push(element) {
    this.arr.push(element);
    console.log(this.arr);
    return this;
  }

  pop() {
    let popItem = this.arr.pop();
    console.log(popItem);
    return popItem;
  }

  peek() {
   let peekItem = +this.arr.slice(-1);

   //parseInt(this.arr.slice(-1))
   //this.arr[this.arr.length - 1]
   //Number(this.arr.slice(-1))

   console.log(peekItem);
   return peekItem;
  }
}

module.exports = {
  Stack
};
