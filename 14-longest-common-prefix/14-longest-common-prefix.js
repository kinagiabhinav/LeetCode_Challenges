/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //if strs <= 0 return ''
    if(!strs.length)
        return '';
    
    //if only one element then return the same
    if(strs.length === 1)
        return strs[0];
    
    //init first index of first letter as common prefix;
    let commonPrefix = '';
    
    let index = 0;
    while(index < strs[0].length){
        if(strs[0][index])
            commonPrefix += strs[0][index];
        
        for(let str of strs){
            if(!(str.slice(0, index+1) === commonPrefix)){
                return index ? commonPrefix.slice(0, -1) : '';
            }
        }
        index++;
    }
    
    return commonPrefix;
};