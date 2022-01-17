/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    
    let sum = 0;
    for(let char = 0; char < s.length; char++){
       if((s[char] == 'I' && ((s[char+1] === 'V') || (s[char+1] === 'X'))) || 
          (s[char] == 'X' && ((s[char+1] === 'L') || (s[char+1] === 'C'))) || 
          (s[char] === 'C' && ((s[char+1] === 'D') || (s[char+1] === 'M')))){
            sum += obj[s[char+1]] - obj[s[char]];
            char++;
        } else {
            sum += obj[s[char]];
        }    
        
    }
    
    return sum;
};