class Graph{
    constructor(size) {
        this.MAX_ARR_SIZE = size;
        this.arr = Array.from(Array(this.MAX_ARR_SIZE), ()=>Array(this.MAX_ARR_SIZE).fill(0));
    }
    insert(go, to, weight, direction){      //주는 노드, 받는 노드, 가중치, 무방향인가?
        if(direction === 1){
            this.arr[go][to] = weight;
            this.arr[to][go] = weight;
        }
        else{
            this.arr[go][to] = weight;
        }
    }
    print(){
        console.log(this.arr);
    }
}

var graph = new Graph(4);
graph.insert(0, 1, 1, 1);
graph.insert(0, 3, 1, 1);
graph.insert(1, 2, 1, 1);
graph.insert(1, 3, 1, 1);
graph.insert(2, 3, 1, 1);
graph.print();