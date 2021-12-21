/**
 * Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let magazineObj = {};
    
    for(let char of magazine)
        magazineObj[char] = ++magazineObj[char] || 1;
    
    for(let char of ransomNote)
        if(!(char in magazineObj)){
            return false;
        } else {
            --magazineObj[char];
            if(!magazineObj[char]) delete magazineObj[char];
        }
    
    return true;
};