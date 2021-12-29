/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    //Ignore any leading whitespace
    s = s.trimStart();
    
    //Check if the next character (if not already at the end of the string) is '-' or '+'
    let sign = (s[0] === '-') ? -1 : 1;
    
    //init all numbers
    let numbers = Array.from(Array(10), (_, i) => i.toString());
    let temp = '';
    
    //Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
    for(let digit = 0; digit <= s.length; digit++){
        if(numbers.includes(s[digit]))
            temp = temp.concat(s[digit]);
        else if(digit === 0 && (s[digit] === '-' || s[digit] === '+'))
            continue;
        else
            break;
    }
    
    //Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary
    let num = 0;
    for(let digit of temp){
        num *= 10;
        num += numbers.indexOf(digit);
    }
    
    //Change the sign as necessary
    num *= sign;
    
    //If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
    let minClamp = Math.pow(-2,31);
    if(num < minClamp)
        num = minClamp;
    
    let maxClamp = Math.pow(2,31) - 1;
    if(num > maxClamp)
        num = maxClamp;
    
    
    //Return the integer as the final result
    return num;
    
};