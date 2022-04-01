//버블 정렬
arr = [3, 1, 5, 6, 2, 4];
function bubbleSort(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j + 1] < arr[j]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
bubbleSort(arr);
console.log(arr);

//퀵 정렬
function swap(arr, i, j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}
function quickSort(arr, start, end){
    if(start>=end){
        return;
    }
    var pivot = arr[end];
    var left = start;

    for(var right=start; right<end; right++){
        if(arr[right] < pivot){
            swap(arr, left, right);
            left++;
        }
    }
    swap(arr, left, end);
    quickSort(arr, start, left-1);
    quickSort(arr, left+1, end);
}
arr2 = [6, 7, 2, 4, 1, 3, 5];
quickSort(arr2, 0, arr2.length-1);
console.log(arr2);

//선택 정렬
function selectionSort(arr){
    for(var i=0; i<arr.length-1; i++) {
        var minimum = arr[i];
        var minimumIdx = i;
        for (var j=i; j < arr.length; j++) {
            if (arr[j] < minimum) {
                minimum = arr[j];
                minimumIdx = j;
            }
        }
        var tmp = arr[i];
        arr[i] = minimum;
        arr[minimumIdx] = tmp;
        console.log(`가장 작은 값은 : ${minimum}`);
        console.log(arr);
    }
}
arr3 = [9, 6, 7, 3, 5];
selectionSort(arr3);