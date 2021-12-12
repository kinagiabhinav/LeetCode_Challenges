/*
Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    //Two pointers i,j
    //point i to start, j to end
    let i = 0,
        j = nums.length - 1,
        result = [];
    
    //while i<=j
    while(i <= j){
        //Compare abs value of nums[i] & nums[j]
        //unshift max square into result array
        if(Math.abs(nums[i]) > nums[j]){
            result.unshift((nums[i])**2)
            i++;
        } else {
            result.unshift((nums[j])**2);
            j--;
        }
    }
    
    //return result
    return result;
};