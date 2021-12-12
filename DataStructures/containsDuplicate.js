/**
 * CONTAINS DUPLICATE
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
    Example 1:

    Input: nums = [1,2,3,1]
    Output: true
 */

function containsDuplicate(nums) {
    let obj = {};
    
    //Loop through array
    for(const num of nums){
        //add to obj if not present
        if(!(num in obj))
            obj[num] = 1;
        else
            return true;
    }
    return false;
};