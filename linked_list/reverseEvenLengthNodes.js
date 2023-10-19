const reverseEvenLengthNodes = (head) => {
    let prev = head;
    let groupLen = 2;

    while (prev.next !== null) {
        let node = prev;
        let numNodes = 0;
        
        for (let i = 0; i < groupLen; i += 1) {
            if (node.next === null) break;
            numNodes += 1;
            node = node.next;
        }
        if (numNodes % 2) {
            prev = node;
        } else {
            let reverse = node.next;
            let curr = prev.next;
            let currNext;

            for (let j = 0; j < numNodes; j += 1) {
                currNext = curr.next;
                curr.next = reverse;
                reverse = curr;
                curr = currNext;
            }

            let prevNext = prev.next;
            prev.next = node;
            prev = prevNext;
        }
        groupLen += 1;
    }
    return head;
}