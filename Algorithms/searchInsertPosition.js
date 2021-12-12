/*
SEARCH INSERT POSITION
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start+end)/2);
    
    while(start <= end){
        if(target < nums[mid]) {
            end = mid - 1;
        }
        else if(target > nums[mid]){
            start = mid + 1;
        }
        else {
            return mid;
        }
        mid = Math.floor((start+end)/2);
    }
    
    return mid+1;
};