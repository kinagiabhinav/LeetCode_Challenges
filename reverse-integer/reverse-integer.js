/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = (x > 0) ? 1 : -1;
    
    x = parseInt(x.toString().split('').reverse().join('').toString());
    
    if(x <= -Math.pow(2,31) || x >= Math.pow(2,31)-1) return 0;
    
    return x*sign;
};