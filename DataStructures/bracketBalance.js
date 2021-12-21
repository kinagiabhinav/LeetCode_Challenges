/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Example 1:
Input: s = "()"
Output: true

 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    
    for(let bracket of s){
        switch(bracket){
            case '(':
            case '[':
            case '{':
                stack.push(bracket);
                break;
            case ')':
                if (stack.pop() !== '(') return false;
                break;
            case ']':
                if (stack.pop() !== '[') return false;
                break;
            case '}':
                if (stack.pop() !== '{') return false;
                break;
            default:
                //Do nothing
        }
    }
    
    if(stack.length)
        return false;
    
    return true;
};