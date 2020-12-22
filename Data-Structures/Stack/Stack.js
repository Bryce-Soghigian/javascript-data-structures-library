/**
 * 
 * @@ METHODS Implemented with an array
 * push-- This operation adds an element at the top of a stack
 * pop-- This operation removes the topmost element of a stack
 * peek-- This operation returns the element at the top of the stack
 * isEmpty--This method returns a bool that returns true if empty else false
 * search(element)-- This method searches for a value in the stack and if it exists
 */



class Stack{
    constructor(){
        this.elements = []
        this.empty = true;
    }
    /**
     * 
     * @param {*} element This is the element you want to add to the top of the stack
     */
    push(element){
        this.elements.push(element)
        this.empty = false
        return
    }
    /**
     * This method removes the top node off the stack and returns that node
     */
    pop(){
        if(this.elements.length<=1){
            this.empty = true
        }
        return this.elements.pop();
    }
    isEmpty(){
        return this.empty
    }
    traverse(){
        for(let i = this.elements.length;i >= 0;i--){
            console.log(this.elements[i])

        }
    }
    search(element){
        for(let i = this.elements.length;i >= 0;i--){
            let curr = this.elements[i]
            if(curr == element){
                return [curr,i]
            }

        }
    }
    peek(){
        return this.elements[this.elements.length-1]
    }
}


/**
 * 
 * @@ METHODS Implemented with nodes in a linked list 
 * push-- This operation adds an element at the top of a stack
 * pop-- This operation removes the topmost element of a stack
 * peek-- This operation returns the element at the top of the stack
 * isEmpty--This method returns a bool that returns true if empty else false
 * search(element)-- This method searches for a value in the stack and if it exists
 */



 module.exports = {Stack}
