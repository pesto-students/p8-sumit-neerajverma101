class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }

    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        let newNode = new ListNode(arr[i]);
        curr.next = newNode;
        curr = newNode;
    }

    return head;
}

function leftShiftLinkedList(head, k) {
    if (k === 0 || head === null) {
        return head;
    }

    let curr = head;
    let i = 1;

    // Find the kth node from the beginning of the list
    while (i < k && curr !== null) {
        curr = curr.next;
        i++;
    }

    if (curr === null) {
        return head;
    }

    // Set the next pointer of the last node of the list to the head of the original list
    let lastNode = curr;
    while (lastNode.next !== null) {
        lastNode = lastNode.next;
    }
    lastNode.next = head;

    // Set the head of the new list to the next node of the kth node
    let newHead = curr.next;
    curr.next = null;

    return newHead;
}

// Example usage
const arr = [2, 4, 7, 8, 9];
const k = 3;
const head = arrayToLinkedList(arr);
const shiftedHead = leftShiftLinkedList(head, k);

// Print the shifted list
let curr = shiftedHead;
while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
}


/**
Defined a ListNode class to represent a node in the linked list, and a leftShiftLinkedList function that takes the head node of the list and the number of nodes to shift by (k) as its arguments, and returns the new head node of the shifted list.
The arrayToLinkedList function takes an array of numbers as input and returns the head node of a singly linked list containing the same values in the same order.
**/