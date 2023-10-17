const reverseBetween = (head, left, right) => {
    if (!head || left === right) return head;
    
    // Start from head and traverse to left node, keeping track of prev node

    let dummy = new ListNode();
    dummy.next = head;

    let prev = dummy;
    for (let i = 0; i < left - 1; i += 1) {
        prev = prev.next;
    }
    // From left node, traverse to right node, keeping track of right and it's next node

    let curr = prev.next;
    let next = null;
    for (let i = 0; i < right - left; i += 1) {
    // Reverse the list from left position node and right node
    // Merge the reversed list with the original using the node previous to the left node and the node after the right node

        next = curr.next;
        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }
    // return the modified list

    return dummy.next;
};