/**
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let obj = {};
    
    for(let char of s)
        obj[char] = ++obj[char] || 1;
    
    for(let i = 0; i < s.length; i++)
        if(obj[s[i]] === 1)
            return i;
    
    return -1;
};