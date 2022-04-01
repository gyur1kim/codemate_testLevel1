class Node{
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class LinkedList{
    constructor() {
        this.head = new Node(null);
    }
    append(value){
        let node = this.head;
        let newNode = new Node(value);

        while(true){
            if(node.next == null){
                break;
            }
            node = node.next;
        }
        node.next = newNode;
        newNode.prev = node;
    }
    insert(value, idx){
        let node = this.head;
        let newNode = new Node(value);

        while(true){
            if(node == null){
                console.log("Index Error");
                return;
            }
            if(idx === 0){
                let nextNode = node.next;

                node.next = newNode;
                newNode.prev = node;
                newNode.next = nextNode;
                nextNode.prev = newNode;

                break;
            }
            node = node.next;
            idx--;
        }
    }
    delete(idx){
        if(idx === 0){
            let newHead = this.head.next.next;
            this.head.next = newHead;
            newHead.prev = this.head;
        }
        else{
            let node = this.get(idx-1);
            let nextNode = node.next.next;
            node.next = nextNode;
            nextNode.prev = node;
        }
    }
    get(idx){
        let node = this.head.next;
        while(true){
            if(idx === 0){
                return node;
            }
            if(idx == null){
                console.log("Index Error");
                return null;
            }

            node = node.next;
            idx--;
        }
    }
    printLinkedList(){
        let node = this.head.next;
        let sentence = "";
        while(node != null){
            if(node.next != null){
                sentence += `${node.data} -> `;
                node = node.next;
            }
            else{
                sentence += node.data;
                break;
            }
        }
        console.log(sentence);
    }
}

LL = new LinkedList();

LL.append(1);
LL.append(2);
LL.append(3);
LL.printLinkedList();

LL.insert(10, 0);
LL.printLinkedList();

LL.insert(20, 3);
LL.printLinkedList();

LL.delete(1);
LL.printLinkedList();

LL.delete(0);
LL.printLinkedList();
console.log(LL);