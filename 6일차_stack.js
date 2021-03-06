class Stack{
    constructor() {
        this.MAX_STACK_SIZE = 10;
        this.arr = new Array(this.MAX_STACK_SIZE);
        this.top = -1;
    }
    isFull(){
        if(this.top >= this.MAX_STACK_SIZE-1){
            return true;
        }
        else{
            return false;
        }
    }
    isEmpty(){

        if(this.top<0){
            return true;
        }
        else{
            return false;
        }
    }
    push(value){
        if(this.isFull()){
            console.log("스택이 꽉 찼습니다");
        }
        else{
            this.arr[++this.top] = value;
        }
    }
    pop(){
        if(this.isEmpty()){
            console.log("스택이 비어있습니다");
        }
        else{
            return this.arr[this.top--];
        }
    }
}

stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log('pop : ' + stack.pop());
console.log('pop : ' + stack.pop());
console.log('pop : ' + stack.pop());
console.log('pop : ' + stack.pop());

function validateBracePair(brace){
    var braceStack = new Stack();
    var validateValue = 0;  //괄호의 개수를 세는 변수

    for(var item of brace){
        braceStack.push(item);
    }
    while(!braceStack.isEmpty()){   //스택에 요소가 들어있는 동안에만 반복
        var tmp = braceStack.pop()  //하나씩 빼봅니다.
        if(tmp === "}"){            //만약 뺀 요소가 }이면
            validateValue++;        //변수를 하나 올립니다.
        }
        else if(tmp === "{"){       //만약 뺀 요소가 {이면
            validateValue--;        //변수를 하나 내립니다.
        }

        if(validateValue <0){       //변수가 0보다 작다는 말은 {의 개수가 더 많다는 것이므로 유효하지 않습니다. "{{}"와 같은 경우
            console.log(`"${brace}"는 유효하지 않은 중괄호 쌍입니다.`);
            return;                 //유효하지 않음을 알아냈으므로 함수 종료
        }
    }
    if(validateValue === 0){        //"{"와 "}"의 개수가 같다면 value는 0이 됩니다. 유효한 중괄호 쌍.
        console.log(`"${brace}"는 유효한 중괄호 쌍입니다.`);
    }
    else{                           //둘의 개수가 같지 않다면 value는 0이 아닙니다. "{}}}"와 같은 경우.
        console.log(`"${brace}"는 유효하지 않은 중괄호 쌍입니다.`);
    }
}
validateBracePair("{{}}");       //validateValue = 0이므로 유효함.
validateBracePair("{{}}}");      //validateValue = 1이므로 유효하지 않음.
validateBracePair("{{{{}}");     //validateValue = -2이므로 유효하지 않음
validateBracePair("}}}{{{");     //validateValue = 0이지만, while문 내의 validateValue<0에 의해 유효하지 않음.
validateBracePair("{{}{{{}}}}"); //validateValue = 0이므로 유효함.
validateBracePair("{{}{{{}}}");