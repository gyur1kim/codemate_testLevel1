class Graph{
    constructor() {
        this.MAX_ARR_SIZE = 10;
        this.arr = Array.from(Array(this.MAX_ARR_SIZE), ()=> new Array(this.MAX_ARR_SIZE).fill(0));
        this.arr.fill(0);
    }
    insert(go, to, weight, direction){      //주는 노드, 받는 노드, 가중치, 무방향인가?
        if(direction === 1){
            this.arr[go] = weight;
            this.arr[to] = weight;
        }
        else{
            this.arr[go] = weight;
        }
    }
    print(){
        console.log(this.arr);
    }
}

var graph = new Graph();
graph.print();