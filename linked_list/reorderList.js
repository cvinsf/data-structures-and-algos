/**
 * *Given the head of a singly linked list, reorder the list as if it were folded on itself
 */

const reorderList = (head) => {
    const middle = findMiddle(head);
    const reverseSecondHalf = reverseList(middle.next);

    middle.next = null;

    let first = head;
    let second = reverseSecondHalf;

    while (second !== null) {
        const temp1 = first.next;
        const temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
    return head;
}

function findMiddle(head) {
    let slow = head; fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverseList(head) {
    let current = head;
    let prev = null;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}