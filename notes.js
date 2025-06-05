// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("three");
// }, 2000);
// console.log("four");
// setTimeout(() => {
//     console.log("five")
// }, 1000);
// setTimeout(() => {
//     console.log("six")
// }, 3000);

// setTimeout("three")     => node
// setTimeout("five")     => node
// setTimeout("six")     => node

// setInterval(() => {
//     console.log("hello");
// }, 1000);

clearInterval(id);

let count = 0;
// while(true) {
//     console.log("hello")
//     count++;
//     if(count == 100) {
//         break;
//     }
// }

let timeoutId;
function sayHello() {
    console.log("hello");
    count++;
    timeoutId = setTimeout(sayHello, 1000);
}

function clearTime() {
    clearTimeout(timeoutId);
}

sayHello();
