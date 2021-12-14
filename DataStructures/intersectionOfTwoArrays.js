/**
 Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let obj = {};
    let i = 0;
    let result = [];
    
    while(i < nums1.length){
        if(!(nums1[i] in obj))
            obj[nums1[i]] = 1;
        else
            obj[nums1[i]]++;
        
        i++;
    }
    
    i = 0;
    while(i < nums2.length){
        if(nums2[i] in obj && obj[nums2[i]] > 0){
            obj[nums2[i]]--;
            result.push(nums2[i]);
        }
        
        i++;
    }

    return result;
};