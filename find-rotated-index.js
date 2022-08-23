function findRotatedIndex(arr, num) {
    let pivotP = pivot(arr);
    if(pivotP >0 && num >= arr[0] && num <= arr[pivotP -1]){
        return binary(arr, num, 0, pivotP -1)
    } else {
        return binary(arr, num, pivotP, arr.length -1);
    }
}

function binary(arr, num, start, end){
    if(arr.length === 0) return -1;
    if(num < arr[start] || num > arr[end]) return -1;

    while (start <=end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] === num){
            return mid;
        } else if(num < arr[mid]){
            end = mid -1;
        } else {
            start = mid +1;
        }
    }
    return -1;
}

function pivot(arr){
    let start = 0;
    let end = arr.length -1 ;
    if(arr.length === 1 || arr[start] < arr[end]) return 0;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] > arr[mid+1]){
            return mid +1
        } else if (arr[start] <= arr[mid]){
            start = mid +1
        } else {
            end = mid -1
        }
    }
}

module.exports = findRotatedIndex