class Heap{
    constructor() {
        this.arr = new Array();
        this.heapCount = 0;
    }
    insert(data){
        this.heapCount++;
        this.arr[this.heapCount] = data;
        if(this.heapCount === 1){
            return;
        }
        this.compareWithParent(this.heapCount);
    }
    compareWithParent(idx){
        var parentIdx;
        if(idx <= 1){
            return;
        }

        if(idx%2 === 0){
            parentIdx = idx/2;
        }
        else{
            parentIdx = (idx-1)/2;
        }

        if(this.arr[parentIdx] > this.arr[idx]){
            var tmp = this.arr[parentIdx];
            this.arr[parentIdx] = this.arr[idx];
            this.arr[idx] = tmp;
            this.compareWithParent(parentIdx);
        }
        else{
            return;
        }
    }

    pop(data){
        for(var i=1; i<=this.heapCount; i++){
            if(this.arr[i] === data){
                this.arr[i] = this.arr[this.heapCount];
                this.arr[this.heapCount] = null;
                this.heapCount--;
                this.compareWithChild(i);
                return;
            }
        }
        console.log("데이터가 존재하지 않습니다.");
        return;
    }
    compareWithChild(idx){
        if(idx > this.heapCount){
            console.log("잘못된 접근입니다.");
            return;
        }
        var leftChildIdx = idx*2;
        var rightChildIdx = idx*2+1;
        var data = this.arr[idx]
        if(leftChildIdx > this.heapCount || (this.arr[leftChildIdx] > data && this.arr[rightChildIdx] > data)){ //자식이 없거나, 조건을 만족하는 경우(자식이 부모보다 큼)
            return;
        }
        else if(leftChildIdx === this.heapCount){   //왼쪽 노드만 존재하는 경우(==맨 마지막이라는 뜻)
            var tmp = this.arr[idx];
            this.arr[idx] = this.arr[leftChildIdx];
            this.arr[leftChildIdx] = tmp;
            return;
        }
        else{
            var tmpLeft = this.arr[leftChildIdx];
            var tmpRight = this.arr[rightChildIdx];
            if(tmpLeft<=tmpRight){
                tmp = this.arr[idx];
                this.arr[idx] = tmpLeft;
                this.arr[leftChildIdx] = tmp;
                this.compareWithChild(leftChildIdx);
            }
            else{
                tmp = this.arr[idx];
                this.arr[idx] = tmpRight;
                this.arr[rightChildIdx] = tmp;
                this.compareWithChild(rightChildIdx);
            }
        }
    }
}

heap = new Heap();
heap.insert(1);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(7);
heap.insert(8);
heap.insert(9);
heap.insert(10);
heap.insert(11);
heap.insert(2);
console.log(heap);
console.log("---------");
heap.pop(5);
heap.pop(1);

var input=`9 "JAVA_익히기"
6 "파이썬_프로젝트_시작하기"
10 "파이썬_챗봇과정_학습"
1 "코드메이트에_포스트_작성"
5 "자료구조_학습"
2 "모각코_출석"`

var todoHeap = new Heap();
var todoArr = input.split("\n").map(x => x.split(" "));
console.log(todoArr);
for(var idx in todoArr){
    todoHeap.insert(parseInt(todoArr[idx][0]));
}
console.log(todoHeap);
