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
/**
 * Class stack implementing all stack data structure methods such as push, pop, peek 
 */
class stack2{
    constructor(){
        this.elements = []
    }

    /**
     * 
     * @param {item} item 
     */
    push(item){
        this.elements.push(item);
    }

    /**
     * 
     * @returns top element in stack
     */
    pop(){
        return this.elements.pop();
    }
    
    /**
     * 
     * @returns top element in stack without deleting it
     */
    peek(){
        return this.elements[this.elements.length-1];
    }
}