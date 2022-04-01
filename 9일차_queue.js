//원형 큐
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
// queue = new Queue();
//
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
//
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

//고객 응대 시뮬레이터
clientQueue = new Queue();
var input = `1 30
2 20
5 23
3 40
9 1
8 50
7 13`;
var clientArr = input.split("\n").map(x => x.split(" "));
for(var key in clientArr){
    clientQueue.enqueue(clientArr[key]);
}

var totalTime = 0;
var currentTime = 0;
var idArr = [];

while(!clientQueue.isEmpty()){
    var tmp = clientQueue.dequeue();
    var id = tmp[0];
    var time = parseInt(tmp[1]);

    if(currentTime+time <= 50){
        currentTime += time;
        totalTime += time;
        idArr.push(id);
    }
    else if(currentTime+time> 50){
        //현재까지 저장된 고객을 출력
        console.log(`응대한 고객 id: ${idArr}, (총 ${currentTime}분)`);

        //새로 나온 고객의 정보를 다시 넣자!
        idArr.splice(0, idArr.length);  //배열 초기화는 이게 성능이 제일 좋다 함.
        idArr.push(id);
        currentTime = time;
        totalTime += (10 + time);
    }
}
console.log(`응대한 고객 id: ${idArr}, (총 ${currentTime}분)`);
console.log(`총 소요시간은 ${totalTime} 분입니다.`);