const {Stack} = require("./Stack")

/**
 * 
 * @@ METHODS Implemented with an array
 * push-- This operation adds an element at the top of a stack
 * pop-- This operation removes the topmost element of a stack
 * peek-- This operation returns the element at the top of the stack
 * isEmpty--This method returns a bool that returns true if empty else false
 * search(element)-- This method searches for a value in the stack and if it exists
 */

let testStack = new Stack();


/**
 * Add elements and see that they were succesfully added to stack
 * 
 */
testStack.push(1)
testStack.push("#DFS:FDSJ:SJFSDJ:SD:FJSD")
testStack.push([])
console.log(testStack,"AFTER PUSH OPERATIONS")
testStack.pop()//Should remove the empty array we added 
console.log(testStack,"POP That should remove empty array at the top of the stack")

console.log(testStack,testStack.isEmpty())
testStack.traverse()
console.log(testStack.search(1),"Should return the element and its postion in the stack")
testStack.search(1)