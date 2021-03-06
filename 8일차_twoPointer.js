//투 포인터
function twoPointer(num){
    var arr = [1, 2, 3, 4, 5, 5, 3]
    var start = 0, end = 0;
    var sum = arr[0];
    var count = 0;

    while(start < arr.length){
        if (sum > num || end >= arr.length) {
            sum -= arr[start++];
        }
        else if (sum < num) {
            sum += arr[++end];
        }
        else if (sum === num) {
            var tmp = arr.slice(start, end+1);
            console.log(`[${tmp}]의 합은 ${num} / start:${start}, end:${end}`);

            count++;
            sum += arr[++end];
        }
    }
    return count;
}
// var cnt = twoPointer(10);
// console.log(cnt);

//슬라이딩 윈도우
function sum(idx, arr, slidingWnd, optional){
    var sum = 0;
    if(typeof optional === "undefined") {
        for (var i = idx; i < idx+slidingWnd; i++) {
            sum += arr[i];
        }
    }
    else{
        for (var j = idx; j < idx+slidingWnd; j++) {
            sum += arr[j][optional];
        }
    }
    return sum;
}
function slidingWnd(){
    var drinks = [[100, 320], [232, 720], [600, 103], [100, 124], [730, 1076], [185, 125], [104, 600], [392, 705], [33, 265],[89, 421]];
    var difference = [];
    for(key in drinks){
        difference.push(drinks[key][1] - drinks[key][0]);
    }

    var start = 0;
    var idx = 0;
    var slidingWnd = 3;
    var max = sum(0, difference, slidingWnd);
    while(start+2 < drinks.length) {
        var partialSum = sum(start, difference, slidingWnd);

        if (partialSum > max) {
            max = partialSum;
            idx = start;
        }
        start++;
    }

    var sumCaffeine = sum(idx, drinks, 3, 0);
    var sumTaurine = sum(idx, drinks, 3, 1);
    console.log(`${idx} ${idx+1} ${idx+2}의 타우린 합은 ${sumTaurine}, 카페인 합은 ${sumCaffeine}으로 효과가 가장 좋습니다.`);
}
slidingWnd();
