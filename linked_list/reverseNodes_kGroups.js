/**
 * * Reverse Nodes in K-Group 
 * Reverse nodes in groups of K in a given linked list, where k is a positive interger,
 * and at most the length of the linked list. If any remaining nodes are not part of a group of k,
 * they should remain in their original order.
 * 
 * Changing values of the list is not allowed. Only the order of the nodes can be modified.
 */

const reverseKGroup = function(head, k) {
    const dummy = new ListNode();
    dummy.next = head;
    let p1 = dummy;
    
    while (p1 !== null) {
        let tracker = p1;
        for (let i = 0; i < k; i += 1) {
            if (tracker === null) {
                break;
            }
            tracker = tracker.next;
    }
    if (tracker === null) {
                break;
            }
    const updatedNodes = reverseList(p1.next, k);
    const [prev, current] = updatedNodes;    

    const lastNodeOfGroup = p1.next;
    lastNodeOfGroup.next = current;
    p1.next = prev;
    p1 = lastNodeOfGroup;
    }
    return dummy.next;
    
};

function reverseList(head, k) {
    let prev = null;
    let current = head;
    let next = null;

    for (let i = 0; i < k; i += 1) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return [prev, current]
}