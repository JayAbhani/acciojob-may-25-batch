



// 4
// 4 3 2 10

// [15, 16, 17, 9]

// let totalSum = 0;
// for(let i=0; i<n; i++) {
//     totalSum += arr[i];
// }

// let output = [];
// for(let i=0; i<n; i++) {
//     output.push(totalSum - arr[i]);
// }

// return output;



// let countOnTime = 0;

// for(let i=0; i<navigator; i++) {
//     if(arr[i] <= 0) {
//         countOnTime++;
//     }
// }

// if(countOnTime < k) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }




let firstLargest = -Infinity;
let secondLargest = -Infinity;

for(let i=0; i<n; i++) {
    if(arr[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = arr[i];
    } else if(arr[i] > secondLargest) {
        secondLargest = arr[i];
    }
}

return secondLargest;

// [10, 5, 20]
// i=0; first: 10 second: -Infinity
// i=1 first: 10, second: 5
// i=2 first: 20, second: 10

