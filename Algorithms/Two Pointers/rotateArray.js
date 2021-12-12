/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let value = 0;
    //If k > nums.length
    k%=nums.length;
    while(k){
        console.log(k);
        value = nums.pop();
        nums.unshift(value);
        k--;
    }
    console.log(nums);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotateOptimised = function(nums, k) {
    //If k > nums.length
    k%=nums.length;
    
    //Reverse the entire array
    nums.reverse();
    
    //Reverse first k
    nums.splice(0,k,...nums.slice(0,k).reverse());
    
    //Reverse k to n-1
    nums.splice(k,nums.length-k,...nums.slice(k).reverse());
};

rotate([1,2,3,4,5,6,7],3);