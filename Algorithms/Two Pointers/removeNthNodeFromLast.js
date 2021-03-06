/**
 removeNthNodeFromLast
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let node = new ListNode(0);
    node.next = head;
    
    let fast = node,
        slow = node;
    
    for(let i = 0; i <= n; i++){
        fast = fast.next;
    }
    
    while(fast){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    
    return node.next;
};
