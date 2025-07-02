// strings
let str = "accio";

// console.log(str.concat("job"));

// console.log(str.trim());

// console.log(str.startsWith("b"));
// endsWith

// console.log(str.includes("acc"));

// console.log(str.slice(0, 3));

// let str2 = str.toUpperCase();
// toLowerCase()
// console.log(str);
// console.log(str2);

// console.log(str.indexOf("c"));
// console.log(str.lastIndexOf("c"));

// reeplace()
// let str2 = str.replaceAll("c", "k");
// console.log(str2);

// console.log(str[0]);
// console.log(str.charAt(0));
// console.log(str.length);

// for(let ch of str) {
//     console.log(ch);
// }

// for(let i=0; i<str.length; i++) {
//     console.log(str[i]);
// }

// function countVowels(str) {
//     let count = 0;
//     let vowels = ["a", "e", "i", "o", "u"];

//     for(let i=0; i<str.length; i++) {
//         if(vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// function reverseStr(str) {
//     // let arr = str.split("");
//     // arr.reverse();
//     // return arr.join(" ");

//     // return str.split("").reverse().join("");

//     let reversed = "";  //oicca
//     for(let i=str.length-1; i>=0; i--) {
//         reversed = reversed + str[i];
//     }

//     return reversed;
// }

// console.log(reverseStr("accio"));

// accio

// function replaceSpaces(str) {
//   return str.replaceAll(" ", "-");
// }

// I am learning javascript     //4




// Set
let arr = [5, 3, 1, 5, 7, 2, 4];
let s = new Set();

// for(let elem of s) {
//     console.log(elem);
// }

// s.forEach((elem) => {
//     console.log(elem);
// });

// console.log(s.size);

// s.clear();
// console.log(s);

// console.log(s.has(4));

// s.delete(4);
// console.log(s);


s.add("4");
s.add("2");
s.add("6");
s.add("1");
s.add("7");
s.add("3");

for(let elem of s) {
    console.log(elem);
}

// let arr2 = Array.from(s);

// console.log(arr2);
