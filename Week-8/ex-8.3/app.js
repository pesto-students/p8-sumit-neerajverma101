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

function hasLoop(head) {
    if (head === null) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

function addLoop(head, x) {
    let curr = head;
    while (curr.next !== null) {
        curr = curr.next;
    }
    curr.next = curr;
    return curr
}

const arr = [1, 3, 4,];
const head = arrayToLinkedList(arr);
const loopedHead = addLoop(head, 2)

const hasLoopFlag = hasLoop(loopedHead);
console.log(hasLoopFlag);

const arr2 = [1, 8, 3, 4];
const head2 = arrayToLinkedList(arr);
const loopedHead2 = addLoop(head, 0)

const hasLoopFlag2 = hasLoop(loopedHead2);
console.log(hasLoopFlag2);
