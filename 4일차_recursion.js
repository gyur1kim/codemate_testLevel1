var arr = [10, 15, 23, 35, 42, 58, 64, 72, 86, 92, 104]
var start = 0
var end = arr.length-1

function recursive(target, arr, start, end){
    var mid = Math.floor((start+end)/2);

    console.log('start : ' + start);
    console.log('end : ' + end);
    console.log('mid : ' + mid);
    console.log('arr[mid] : ' + arr[mid]);
    console.log('___________________');

    if(start>end){
        console.log(`${target}이(가) 존재하지 않습니다!`);
        return;
    }
    else if(target === arr[mid]){
        console.log(`${target}이(가) 존재합니다.`);
        return;
    }
    else if(target>arr[mid]){
        recursive(target, arr, mid+1, end);
    }
    else if(target<arr[mid]){
        recursive(target, arr, start, mid-1);
    }
}

var n = prompt('원하는 값을 적어주세요! [10, 15, 23, 35, 42, 58, 64, 72, 86, 92, 104]', '');
recursive(parseInt(n), arr, start, end);