//소수 판정 함수
function isPrime(num){
    if(num<2 || num === null){
        return;
    }
    for(var i=2; i<=Math.sqrt(num); i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}

//일반적인 소수를 세는 함수
function countPrime(num){
    if(num<2 || num === null){
        return;
    }
    var count = 0;
    for(var i=2; i<=num; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}

//에라토스테네스의 체
function eratos(num){
    if(num<2 || num === null){
        return;
    }
    var range = num+1;
    var sqrtNum = Math.floor(Math.sqrt(range));     //제곱근을 사용하는 이유는? 제곱근보다 큰 소수는 지울 게 없기 때문임.
    var primeList = Array.from({length:range}, (i)=> true);
    var cnt = 0;

    primeList[0] = false;
    primeList[1] = false;
    for(var i=2; i<=sqrtNum; i++){
        if(isPrime(i)){
            for(var j=i*i; j<=range; j+=i){         //i*i부터 시작하는 이유는? i*2, i*3, i*4... i*(i-1)은 이미 지워졌음.
                primeList[j] = false;
            }
        }
    }
    for(var primeNum of primeList){
        if(primeNum){
            cnt++;
        }
    }
    return cnt;
}

//자연수 n 이하의 연속된 소수를 더해서 n을 만들 수 있는가?
function answer(num){
    var primeArr = [];
    for(var i=2; i<num; i++){
        if(isPrime(i)){
            primeArr.push(i);
        }
    }
    for(var j=0; j<primeArr.length; j++){
        var sum = 0;
        if(j>num){
            break;
        }
        for(var k=j; k<primeArr.length; k++){
            sum += primeArr[k];
            if(sum>num){
                break;
            }
            else if(sum === num){
                var tmpArr = primeArr.slice(j, k+1);
                console.log(`연속된 소수 [${tmpArr}]의 합은 ${num}입니다!`);
                return;
            }
        }
    }
    console.log(`연속된 소수의 합으로 ${num}을 만들 수 없습니다.`);
}

//8일차에 배운 twoPointer를 이용한 연속된 소수의 합 구하기
function twoPointerAnswer(num){
    var primeArr = [];
    for(var i=2; i<num; i++){
        if(isPrime(i)){
            primeArr.push(i);
        }
    }
    var start = 0, end = 0;
    var sum = primeArr[0];
    while(primeArr[start] <= num){
        if(sum < num){
            end++;
            sum += primeArr[end];
        }
        else if(sum > num ||end===primeArr.length){
            sum -= primeArr[start];
            start++;
        }
        else if(sum === num){
            var tmp = primeArr.slice(start, end+1);
            console.log(`연속된 소수 [${tmp}]의 합은 ${num}입니다!`);
            return;
        }
    }
    console.log(`연속된 소수의 합으로 ${num}을 만들 수 없습니다.`);
}


var n = parseInt(prompt("수를 적어주세요"));
answer(n);
twoPointerAnswer(n);
if(isPrime(n)){
    alert(`${n}은 소수입니다.`);
}
else{
    alert(`${n}은 소수가 아닙니다.`);
}
alert(`일반적인 방법을 이용: 2부터 ${n}까지 소수의 개수는 ${countPrime(n)}개 입니다.`);
alert(`에라토스테네스 방법을 이용: 2부터 ${n}까지 소수의 개수는 ${eratos(n)}개 입니다.`);