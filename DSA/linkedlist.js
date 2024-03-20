/**
 * Class implementation of linked list
 * A linked list is a linear data structure similar to an array.
 * Unlike arrays, elements are not stored in a particular memory location or index. 
 * Rather each element is a separate object that contains a pointer or a link to the next object in that list.
 */

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
        this.last = this.head
    }

    /**
     * Creating a new node and adding it to end of the list
     * @param {data} data 
     */
    addNode(data){
        let newnode = new ListNode(data)
        this.last.next = newnode
        this.last = newnode
    }

    /**
     * Deleting last node from the list
     */
    deleteNode(){
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next.next) {
                lastNode = lastNode.next
            }
            this.last = lastNode
            this.last.next = null;
        }
    }
}
