//BFS는 큐를 이용해 구현한다.
class Queue{
    constructor() {
        this.MAX_QUEUE_SIZE = 10;
        this.arr = new Array(this.MAX_QUEUE_SIZE);
        this.head = -1;
        this.tail = -1;
    }
    isEmpty(){
        if(this.head === this.tail){
            return true;
        }
        return false;
    }
    isFull(){
        if((this.tail+1)%this.MAX_QUEUE_SIZE === this.head){
            return true;
        }
        return false;
    }
    enqueue(item){
        if(this.isFull()){
            console.log("큐에 더 이상 데이터를 넣을 수 없습니다.");
            return;
        }
        this.tail = (this.tail+1)%this.MAX_QUEUE_SIZE;
        this.arr[this.tail] = item;
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("큐가 비어있습니다.");
            return;
        }
        this.head = (this.head+1)%this.MAX_QUEUE_SIZE;
        return this.arr[this.head];
    }
}

class Graph{
    constructor() {
        this.nodeCount = 7;
        this.graph =  [
            [0, 1, 0, 1, 0, 0, 0],
            [1, 0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
        ]
        this.visited = Array(this.nodeCount).fill(0);
    }
}

function DFS(graph, num){
    console.log(num);
    graph.visited[num] = 1;

    for(let i=0; i<graph.nodeCount; i++){
        if(graph.graph[num][i] === 1 && graph.visited[i] === 0){
            DFS(graph, i);
        }
    }
}

function BFS(graph, node){
    var queue = new Queue();
    graph.visited[node] = 1;
}

var graph = new Graph();
DFS(graph, 0);
