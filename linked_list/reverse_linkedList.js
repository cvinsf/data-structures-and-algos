/**
 * * Problem: Given the head of a singly linked list, reverse the linked list and return its updated head.
 */

// Template for linked list node class
class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Template for the linked list
class LinkedList {
    constructor() {
        this.head = null;

        // insertNodeAtHead method will insert a LinkedListNode at head
        // of a linked list.
        this.insertNodeAtHead = function (node) {
            if (this.head != null) {
                node.next = this.head;
                this.head = node;
            } else this.head = node;
        };

        // createLinkedList method will create the linked list using the
        // given integer array with the help of InsertAthead method.
        this.createLinkedList = function (list) {
            list.reverse().forEach((element) => {
                let newNode = new LinkedListNode(element);
                this.insertNodeAtHead(newNode);
            });
        };

        // This method will display the elements of the linked list.
        this.display = function () {
            let result = "",
                temp = this.head;
            while (temp != null) {
                result += temp.data;
                temp = temp.next;
                if (temp != null) {
                    result += ", ";
                }
            }
            result += "";
            return result;
        };
    }
}

const reverseList = (head) => {
    let current = head;
    let prev = null;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
