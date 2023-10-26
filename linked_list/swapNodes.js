/**
 * Given a singly linked list, swap every two adjacent nodes of the linked list. After the swap, return the head of the linked list.
 */

const swapNodes = (head) => {
    let listLength = 0;
    let dummyNode = new ListNode(null, head);

    if (!head || !head.next) {
        return head;
    }

}