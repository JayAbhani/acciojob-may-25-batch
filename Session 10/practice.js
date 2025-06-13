


// sum of all array elements

// function sumElems(arr) {
//     let  sum = 0;
//     for(let elem of arr) {
//         sum = sum + elem;
//     }
//     return sum;
// }

// let arr = [1, 2, 3, 4];
// let ans = sumElems(arr);
// console.log(ans);




// 2. find maximum element
// function findMAx(arr) {
//     let max = arr[0];
//     for(let i=1; i<arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let arr = [3, 6, 8, 2, 1, 9, 7];
// let res = findMAx(arr);
// console.log(res);




// 3. count even numbers
// function countEvens(arr) {
//     let count = 0;
//     for(let elem of arr) {
//         if(elem % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// let arr = [1, 4, 6, 7, 8];
// let res = countEvens(arr);
// console.log(res);




// 4. reverse an array
// function reverseArr(arr) {
//     let reversed = [];
//     for(let i=arr.length-1; i>=0 ; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// let arr = [1, 2, 3, 4, 5];
// let res = reverseArr(arr);
// console.log(res);




// 5. check if array contains elem
// function checkForElem(arr, elem) {
//     for(let item of arr) {
//         if(item === elem) {
//             return true;
//         }
//     }
//     return false;
// }

// let arr = [5, 10, 15];
// let elem = 20;
// let res = checkForElem(arr, elem);
// console.log(res);




// 9. find numbers greater than 5
function greaterThanFive(arr) {
    let result = [];
    for(let elem of arr) {
        if(elem > 5) {
            result.push(elem);
        }
    }
    return result;
}

let arr = [2, 6, 8, 3];
let x = greaterThanFive(arr);
console.log(x);
