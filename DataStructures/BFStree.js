/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root)
        return [];
    
    let result = [];
    let queue = [[root]];
    let current = null;
    let levels;
    
    while(queue.length){
        current = queue.shift();
        
        levels = [];
        for(let node of current) {
            if(node.left) levels.push(node.left);
            if(node.right) levels.push(node.right);
        }
        if(levels.length)
            queue.push(levels);
        
        for(let i = 0; i < current.length; i++)
            current[i] = current[i].val;
        
        result.push(current);
    }
    
    return result;
};