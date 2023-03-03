class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

const newHead = reverseLinkedList(node1);

let curr = newHead;
while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
}


/**Defined a ListNode class to represent a node in the linked list, and a reverseLinkedList function that takes the head node of the list as its argument and returns the new head node of the reversed list.
The reverseLinkedList function uses a while loop to iterate through the list, reversing the direction of each link as it goes. 
It does this by keeping track of three pointers: prev, which points to the previous node in the reversed list; curr, which points to the current node in the original list; and next, which points to the next node in the original list 
**/