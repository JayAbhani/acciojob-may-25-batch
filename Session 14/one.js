

// object
// key-value pair

// let person = {
//     name: "Harsh",
//     age: 27,
//     place: "Pune",
//     // 1: 1000,
//     // greet: function() {
//     //     return "Hello"
//     // }
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// for(let key in person) {
//     console.log(person[key]);
// }

// let x = person.greet();
// console.log(x);

// person.email = "raj@gmail.com";
// console.log(person);

// person.name = "Raj";
// console.log(person);

// let p = "place";
// console.log(person[p]);

// console.log(person[1]);
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person["place"]);


// dot notation
// for exact properti names

// [] notation
// for literals and variables


// let arr = [2, 4, 6, 8];

// let arrObj = {
//     0: 2,
//     1: 4,
//     2: 6,
//     3: 8
// }

// arr[0];




// destructuring
// array destructuring
let arr = [100, 200, 300, 400];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// let four = arr[3];

// let [one, two, three, four, five=500] = arr;
// console.log(one, two, three, four, five);


// object destructuring
// let person = {
//     name: "Ankit",
//     age: 26
// }

// let name = person.name;
// let age = person.age;
// let place = person.place;

// let {name:myName, place="Mumbai"} = person;

// console.log(myName, place);





// spread operator (...)
// let arr1 = [2, 4, 6];
// let a = [1, 2, 2];
// let arr2 = arr1;
// let arr2 = [...arr1, ...a];
// arr1[0] = 100;
// console.log(arr1);
// console.log(arr2);


// rest operator (...)
// function sum(...numbers) {
    
// }

// console.log(sum(3, 2, 5, 3, 7));



// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };
// let merged = { ...obj1, ...obj2 };
// console.log(merged); // { a: 1, b: 3, c: 4 }



// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // 1
// console.log(rest);  // [2, 3, 4]


// let user = { name: "Alice", age: 25, city: "Mumbai" };
// let { name, ...rest } = user;
// console.log(name); // Alice
// console.log(rest); // { age: 25, city: "Mumbai" }


// let obj = new Object();
// obj.name = "Raj";
// obj.age = 26;


// map
// let m1 = new Map();
// m1.set("name", "Raj");
// m1.set("age", 26);
// m1.set("place", "Pune");
// console.log(m1);
// console.log(m1.get("age"));

// console.log(m1.has("email"));


// traversing
// for(let [key, value] of m1) {
//     console.log(key, value);
// }

// m1.forEach((value, key) => {
//     console.log(key, value);
// })

// keys()
// values()
// entries()




// let users = [
//   {"name": "John", "id": 123, "marks": 98},
//   {"name": "Baba", "id": 101, "marks": 23},
//   {"name": "yaga", "id": 200, "marks": 45},
//   {"name": "Wick", "id": 115, "marks": 75}
// ]

// return users.map((user) => {
//     return user.name.toUpperCase();
// });





// json

// let user = {
//     name: "Harsh",
//     age: 23,
//     city: "Pune"
// }

// let x = JSON.stringify(user);
// console.log(x);

// let y = JSON.parse(x);
// console.log(y);


// hasOwnProperty