// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// function maxSumBruteForce(arr, k) {
//   let maxSum = -Infinity;

//   for(let i=0; i<=arr.length-k; i++) {
//     let currentSum = 0;
//     for(let j=i; j<i-k; j++) {
//         currentSum += arr[i];
//     }
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// function maxSumSlidingWindow(arr, k) {
//     let windowSum = 0;
//     let maxSum = 0;

//     for(let i=0; i<k; i++) {
//         windowSum += arr[i];
//     }
//     maxSum = windowSum;

//     for(let i=k; i<arr.length; i++) {
//         windowSum = windowSum - arr[i-k] + arr[i];
//         maxSum = Math.max(maxSum, windowSum);
//     }
//     return maxSum;
// }

// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;





// Given an array and an integer k, print the sum of each subarray of size k.

// let arr = [1, 2, 3, 4, 5];
// let k = 3;

// function printSubarraySum(arr, k) {
//     let windowSum = 0;
//     for(let i=0; i<k; i++) {
//         windowSum += arr[i];
//     }
//     console.log(windowSum);

//     for(let i=k; i<arr.length; i++) {
//         windowSum = windowSum - arr[i-k] + arr[i];
//         console.log(windowSum);
//     }
// }

// printSubarraySum(arr, k);





// Given an array of integers, an integer k, and a target average, count how many subarrays of size k have an average greater than or equal to the target.

// let arr = [2, 1, 3, 4, 1, 2, 1, 5]
// let k = 3
// let targetAvg = 3

// function countSubarraysWithAvg(arr, k, targetAvg) {
//     let targetSum = targetAvg * k;
//     let windowSum = 0;
//     let count = 0;

//     for(let i=0; i<k; i++) {
//         windowSum += arr[i];
//     }

//     for(let i=k; i<arr.length; i++) {
//         windowSum = windowSum - arr[i-k] + arr[i];
//         if(windowSum >= targetSum) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countSubarraysWithAvg(arr, k, targetAvg));




// Given an array of integers and a number k, find the minimum sum of any subarray of size k.

// let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
// let k = 3;

// function minSumSubarray(arr, k) {
//     let windowSum = 0;
//     let minSum = Infinity;

//     for(let i=0; i<k; i++) {
//         windowSum += arr[i];
//     }

//     minSum = windowSum;

//     for(let i=k; i<arr.length; i++) {
//         windowSum = windowSum - arr[i-k] + arr[i];
//         minSum = Math.min(minSum, windowSum);
//     }

//     return minSum;
// }

// console.log(minSumSubarray(arr, k));





// Given an array of integers and a number k, find the maximum sum of any subarray of size k.

// let arr = [1, 5, 2, 3, 7, 1];
// let k = 3;

// function maxSumSubarray(arr, k) {
//     let windowSum = 0;
//     let maxSum = -Infinity;

//     for(let i=0; i<k; i++) {
//         windowSum += arr[i];
//     }

//     maxSum = windowSum;

//     for(let i=k; i<arr.length; i++) {
//         windowSum = windowSum - arr[i-k] + arr[i];
//         maxSum = Math.max(windowSum, maxSum);
//     }

//     return maxSum;
// }

// console.log(maxSumSubarray(arr, k));

