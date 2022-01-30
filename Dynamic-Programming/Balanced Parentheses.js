class Stack {
    constructor(){
        this.items = [];
        this.size = 0;
    }
    push(item){
        this.items.push(item);
        this.size++;
    }
    pop(){
        this.items.pop();
        this.size--;
    }
    peek(){
        if (this.size > 0)
            return (this.items[this.size-1]);
        else
            return null;
    }
    isEmpty(){
        return (this.size === 0)? true:false;
    }
};


const isBalanced = function(str){
    /* Function to determine whether a string has balanced parenthesis. If a character in the string is an opening parenthesis,
       bracket, or brace, push it onto a stack. Every time a closing parenthesis is encountered, check to see if it matches the
       character on top of the stack. If it does, pop the stack. Otherwise, there is an unmatched closing parenthesis.

       If the stack is empty at the end of the function, then the input string has balanced parenthesis. Otherwise, there is
       an unmatched opening parenthesis.
    */
    let s = new Stack();

    for (let i = 0; i < str.length; i++){  
        if (str[i]=== '(' || str[i] === '[' || str[i]==='{'){
            s.push(str[i]);
        }
        else if (str[i] === ')'){
            if (s.peek() === '(')
                s.pop(); 
            else
                return false;         
        }
        else if (str[i] === ']'){
            if (s.peek() === '[')
                s.pop();  
            else
                return false;         
        }
        else if (str[i] === '}'){
            if (s.peek() === '{')
                s.pop();
            else 
                return false;
        }
        else{
            // The character is not a parenthesis and can be ignored
            continue;
        }
    }

    if (s.isEmpty()){
        return true;
    } 
    return false;    
}

/*
// Example Test Cases

//These should all be true
//--------------------------------------------
console.log(isBalanced("((2+2)+5)"));
console.log(isBalanced("(2/(1*4))"));
console.log(isBalanced("((2[1])+3{3-[5*4^(1/2)]})"));
console.log(isBalanced("abcdefg"));

//These should all be false
//---------------------------------------------
console.log(isBalanced("(20+(9/5)+32"));
console.log(isBalanced("(8-2(3^[2)-18]+74)"));
console.log(isBalanced("(1(2(3)4)5"));
console.log(isBalanced("123)345"));

// */