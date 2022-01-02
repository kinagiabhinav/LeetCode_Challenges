/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romanMap = {
        1     : 'I',
        4     : 'IV',
        5     : 'V',
        9     : 'IX',
        10    : 'X',
        40    : 'XL',
        50    : 'L',
        90    : 'XC',
        100   : 'C',
        400   : 'CD',
        500   : 'D',
        900   : 'CM',
        1000  : 'M'
    };
    
    let keys = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let result = '';
    
    for(let i = keys.length - 1; i >= 0 && num > 0; i--){
        if(num - keys[i] < 0)
            continue;
        else
            num -= keys[i];
        
        if(num >= 0)
            result += romanMap[keys[i]];
            if(num >= keys[i])
                i++;
    }
  
    return result;
};
