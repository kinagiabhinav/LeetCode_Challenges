/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 * Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if(!head)
        return head;
    
    let current = head;
    //Dummy node for prev
    let prev = new ListNode(0);
    while(current){
        //If same
        if(current.val === val){
            //If it's a head, move head
            if(current === head){
                head = head.next;
            }
            //move only current
            else {
                prev.next = current.next;
                current = current.next;
                continue;
            }
        }
        //move both prev and current
        prev = current;
        current = current.next;
    }
    
    return head;
};