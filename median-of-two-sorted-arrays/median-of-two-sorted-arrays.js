/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //store the lengths
    let len1 = nums1.length;
    let len2 = nums2.length;
    
    //if x > y then switch arrays
    if(len1 > len2)
        return findMedianSortedArrays(nums2, nums1);
    
    //Do binary search on the combination of two parts of nums1 & nums2
    //init start and end
    let start = 0;
    let end = len1;
    
    
    while(start <= end){
        //init two partitions partX of num1, partY of num2
        //This is to get two equal parts(or partLeftX+partRightY has one extra element it's accepted)
        let partX = parseInt((start + end) / 2);
        let partY = parseInt((len1 + len2 + 1) / 2) - partX;
        
        //If partX is 0 then nothing is on left, so maxPartLeftX will be -Infinity else nums1[partX - 1]
        let maxPartLeftX = (partX === 0) ? -Infinity : nums1[partX - 1];
        //If partX is length then nothing is on right, so minPartRightX will be +Infinity else nums1[partX - 1]
        let minPartRightX = (partX === len1) ? Infinity : nums1[partX];
        
        
        //If partY is 0 then nothing is on left, so maxPartLeftY will be -Infinity else nums2[partY - 1]
        let maxPartLeftY = (partY === 0) ? -Infinity : nums2[partY - 1];
        //If partX is length then nothing is on right, so minPartRightX will be +Infinity else nums1[partX - 1]
        let minPartRightY = (partY === len2) ? Infinity : nums2[partY];
        
        //Partition is in correct place
        if(maxPartLeftX <= minPartRightY && maxPartLeftY <= minPartRightX){
            //If even return avg of max of left parts and min of right parts
            if((len1 + len2) % 2 === 0)
                return (Math.max(maxPartLeftX, maxPartLeftY) + Math.min(minPartRightX, minPartRightY))/2;
            // return max of left part
            else
                return Math.max(maxPartLeftX, maxPartLeftY);
        }
        else if(maxPartLeftX > minPartRightY){
            //Move partition left
            end = partX - 1;
        } else {
            //Move partition right
            start = partX + 1;
        }
    }
    
};