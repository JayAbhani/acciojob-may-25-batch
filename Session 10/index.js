


// arrays
// let s1m = 2;
// let s2m = 4;
// let s3m = 6;
// let s4m = 3;
// let s5m = 5;

// let marks = [2, 4, 6, 3, 5];
// console.log(marks[2]);       //6
// console.log(marks.length);       //5
// console.log(marks);      //[2, 4, 6, 3, 5]

// for(let i=0; i<marks.length; i++) {
//     console.log(marks[i]);
// }

// for(let elem of marks) {
//     console.log(elem);
// }




// array operations
// let arr = [2, 4, 6, 8];

// inserting an elem
// inserting at the end
// let x = arr.push(100);
// console.log(arr);
// console.log(x);

// inserting at the start
// arr.unshift(100);
// console.log(arr);



// removing an element
// removing from end
// let x = arr.pop();
// console.log(arr);
// console.log(x);

// removing from start
// arr.shift();
// console.log(arr);



// arr.splice(starting index, no. of elems to be removed, elem to insert)

// removing from middle
// let arr = [2, 4, 6, 8];
// let x = arr.splice(2, 1);
// console.log(arr);
// console.log(x);

// inserting in between
// arr.splice(2, 0, 100);
// console.log(arr);




// finding index of an element
// console.log(arr.indexOf(6));

// reversing an array
// arr.reverse();
// console.log(arr);

// sorting an array
// let a = [3, 1, 5, 7, 6, 9, 4];
// a.sort();
// console.log(a);

// concat
// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// let newArr = a1.concat(a2);
// console.log(a1);
// console.log(a2);
// console.log(newArr);



// higher order functions
// takes function as an argument (callback fun) OR
// returns a function

// let arr = [2, 4, 6, 8];

// forEach()
// arr.forEach((elem) => {
//     console.log(elem*2);
//     // arr[0] = 100;
// })

// console.log(arr);

// it does not modify original array
// it returns undefined



// map()
// let newArr = arr.map((elem) => {
//     return elem * 2;
// });
// console.log(arr);
// console.log(newArr);

// it returns new transformed array
// it does not modify original array



// filter()
// let a = [5, 8, 2, 3, 11, 7];
// let filteredArr = a.filter((elem) => {
//     return elem > 5;
// });

// console.log(filteredArr);