
class MyQueue {
    constructor(){
        this.stack = [];
    }
    
    push(data){
        this.stack.push(data);
    }
    
    pop(){
        return this.stack.shift();
    }
    
    peek(){
        return this.stack[0];
    }
    
    empty(){
        return (this.stack.length) ? false : true;
    }
};



/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */