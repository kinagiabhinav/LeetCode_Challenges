/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null;
    let nxt = null;
    let node = head;
    
    while (node) {
        nxt = node.next;
        node.next = prev;
        prev = node;
        node = nxt;
    }

    return prev;
};