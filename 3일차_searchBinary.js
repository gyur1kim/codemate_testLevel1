var arr = [215,513,712,803];

var start = 0;
var end = arr[arr.length-1];
var result = 0;

while(end-start >= 0) {
    var sum = 0;
    var mid = Math.floor((start + end) / 2);

    arr.forEach(function(i){
        sum += Math.floor(i/mid);
    });
    if(sum>10){
        start = mid+1;
    }
    else if(sum<10){
        end = mid-1;
    }
    else{
        result = mid;
        break;
    }
}
console.log(result);