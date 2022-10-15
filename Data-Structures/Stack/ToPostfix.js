/*
 * Author: Harinath-B (https://github.com/Harinath-B)
 * Infix and POstfix notation explanation can be found in the following links:
 * Wikipedia: https://en.wikipedia.org/wiki/Infix_notation / https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

class Stack {
    constructor () {
      this.stack = []
      this.top = -1
    }
  
    // Adds a value to the end of the Stack
    push (newValue) {
      this.stack.push(newValue)
      this.top += 1
    }
  
    // Returns and removes the last element of the Stack
    pop () {
      if (this.top !== -1) {
        this.top -= 1
        return this.stack.pop()
      }
      throw new Error('Stack Underflow')
    }
  
    // Returns the number of elements in the Stack
    length () {
      return this.top
    }
  
    // Returns true if stack is empty, false otherwise
    isEmpty () {
      return this.top === -1
    }
  
    // Returns the last element without removing it
    last () {
      if (this.top !== -1) {
        return this.stack[this.stack.length]
      }
      return null
    }
}

const isAlNum = (c) => {
	return c.match(/^[a-z0-9]+$/i) !== null;
}

const priority = (op) => {
    if(op=='+'||op=='-')
        return 1;
    else if(op=='*'||op=='/')
        return 2;

    return 0;
}

function ToPostfix(infix) {

    let postfix = "";
    let opStack = new Stack();
    for (let c of infix) {
        if (isAlNum(c)) 
            postfix += c;
        else if(c == '(')
            opStack.push(c);
        else if(c == ')') {
            while((x = opStack.pop()) != '(')
                postfix += x;
        }
        else {
            console.log("exec");
            console.log((opStack.stack), c)
            while(priority(opStack.stack) > priority(c)) {
                postfix += opStack.pop();
                console.log(postfix)
                console.log("exec");
            }
                
            opStack.push(c)
        }
    }
    while (opStack.top != -1) {
        postfix += opStack.pop();
    }

    return postfix;
}

export {ToPostfix}