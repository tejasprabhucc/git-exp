//Implementing stack without class 
const stack = [];

/**
 * 
 * @param {element} element 
 */
function push(element){
    stack.push(element);
}
 
/**
 * 
 * @returns top element of stack DS
 */
function pop(){
    return stack.pop();
}