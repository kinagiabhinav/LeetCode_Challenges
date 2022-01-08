/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s.length)
        return '';
    
    //init i,j
    let i = 0;
    
    //temp str and maxlength palindrome
    let temp,
        maxPalindrome = s[0];
    
    while(i < s.length){
        for(let j = i; j < s.length; j++){
            temp = s.slice(i,j+1);
            if(isPalindrome(temp)){
               if(maxPalindrome.length < temp.length)
                    maxPalindrome = temp;
                
               if(maxPalindrome.length === s.length)
                   return maxPalindrome;
            }
        }
        i++;   
    }
    
    return maxPalindrome;
};

function isPalindrome(sub){
    for(let i = 0, j = sub.length - 1; i < Math.floor(sub.length/2); i++, j--){
        if(sub[i] !== sub[j])
            return false;
    }
    
    return true;
}
