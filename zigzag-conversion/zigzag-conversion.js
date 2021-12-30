/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = Array(numRows);
    let i = 0;
    while(i < s.length){
        for(let j = 0; j < numRows && i < s.length; j++){
            arr[j] = (!arr[j]) ? s[i] : arr[j].concat(s[i]);
            i++;
        }
        
        for(let j = numRows - 2; j > 0 && i < s.length; j--){
            arr[j] = (!arr[j]) ? s[i] : arr[j].concat(s[i]);
            i++;
        }
    }
    
    return arr.join('');
};
