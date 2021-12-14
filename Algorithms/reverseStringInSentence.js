/**
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let words = s.split(' ');
    s = [];
    for(let [i,word] of words.entries()){
        word = word.split('').reverse().join('').toString();
        (i === words.length - 1) ? s.push(word) : s.push(word,' ');
    }
    s = s.join('').toString();
    return s;
};