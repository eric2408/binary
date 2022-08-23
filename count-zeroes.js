function countZeroes(arr) {
    let idx = firstZero(arr);
    if(idx === -1) return 0;

    return arr.length - idx;
    
}

function firstZero(arr, left = 0, right = arr.length-1) {
    if(right >= left){
        let mid = left + Math.floor((right-left)/2);
        if((mid === 0 || arr[mid -1] === 1) && arr[mid] === 0){
            return mid;
        } else if(arr[mid] === 1){
            return firstZero(arr, mid+1, right)
        }
        return firstZero(arr, left, mid -1)
    } else {
        return -1;
    }
}

module.exports = countZeroes