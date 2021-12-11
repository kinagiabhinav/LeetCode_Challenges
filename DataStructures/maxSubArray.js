/**
Maximum subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array. 
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 function maxSubArray(nums) {

    let sum = 0;
    let maxSum = -Infinity;
    for(const num of nums){
        sum += num;
        
        //Store current max
        if(maxSum < sum){
            maxSum = sum;
        }
        
        //Reset sum to 0 if less than 0
        if(sum < 0)
            sum = 0;
    }
    
    return maxSum;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);