



// pattern 1
// let n = 3;
// for(let i=1; i<=n; i++) {
//     for(let j=1; j<=n; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }



// pattern 2
// let n = 5;
// for(let i=1; i<=n; i++) {
//     for(let j=1; j<=i; j++) {
//         process.stdout.write("* ");
//     }
//     console.log();
// }



// let n = 5;
// for(let i=1; i<=n; i++) {
//     for(let j=1; j<=i; j++) {
//         process.stdout.write(j.toString() + " ");
//     }
//     console.log();
// }


// let n = 5;
// for(let i=1; i<=n; i++) {
//     for(let j=1; j<=i; j++) {
//         process.stdout.write(i.toString());
//     }
//     console.log();
// }



// let n = 5;
// for(let i=n; i>=1; i--) {
//     for(let j=1; j<=i; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }



// let n = 5;
// for(let i=n; i>=1; i--) {
//     for(let j=1; j<=i; j++) {
//         process.stdout.write(j.toString());
//     }
//     console.log();
// }




// let n = 4;
// let sp = n-1;
// let st = 1;

// for(let i=1; i<=n; i++) {
//     for(let j=1; j<=sp; j++) {
//         process.stdout.write(" ");
//     }
//     for(let k=1; k<=st; k++) {
//         process.stdout.write("*");
//     }
//     sp--;
//     st+=2;
//     console.log();
// }




// let n = 4;
// let sp = 0;
// let st = n * 2 - 1;

// for(let i=1; i<=n; i++) {
//     for(let j=1; j<=sp; j++) {
//         process.stdout.write(" ");
//     }
//     for(let k=1; k<=st; k++) {
//         process.stdout.write("*");
//     }
//     sp++;
//     st -= 2;
//     console.log(); 
// }




let n = 4;
let sp = n - 1;
let st = 1;
for (let i = 1; i <= 2 * n; i++) {
  for (let j = 1; j <= sp; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= st; k++) {
    process.stdout.write("*");
  }
  if (i <= n - 1) {
    sp--;
    st += 2;
  } else if (i == n) {
    sp = 0;
    st = 2 * n - 1;
  } else {
    sp++;
    st -= 2;
  }
  console.log();
}