/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //Negative x are not palindrome
    if(x < 0) return false;
    
    let temp = x;
    let reversed = 0;
    
    //Reverse building the int by getting each digit from last
    while(temp){
        reversed = parseInt(reversed * 10) + parseInt(temp % 10);
        temp = parseInt(temp / 10);
    }
    
    return x === reversed;
};