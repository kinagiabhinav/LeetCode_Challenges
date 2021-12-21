/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
* @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    
    let firstObj = {},
        secondObj = {};
    
    for(let char of s)
        firstObj[char] = ++firstObj[char] || 1;
    
    for(let char of t)
        secondObj[char] = ++secondObj[char] || 1;
    
    for(let key in firstObj){
        if(!(key in secondObj))
            return false;
        else
            if(firstObj[key] !== secondObj[key])
                return false;
    }
    
    return true;
};