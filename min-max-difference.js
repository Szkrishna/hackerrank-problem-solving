function miniMaxSum(arr) {
    const sortedArr = arr.sort();
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < sortedArr.length; i++) {
        if(i < sortedArr.length-1)  {
            minSum = minSum+sortedArr[i];
        } if(i > 0) {
            maxSum = maxSum+sortedArr[i];
        }
    }
    console.log(minSum, maxSum);
}

const nums = [1, 5, 4, 3, 2];
miniMaxSum(nums);