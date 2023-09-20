//for loop

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   console.log(element);
// }
for (let i = 0; i <= 10; i++) {
  const element = i;
}
//   if(element === 5){
//     console.log("5 is the best number");
//   }
//   console.log(element);
// }

for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value: ${j}, and inner loop index ${i}`);
    // console.log(i + "*" + j + "=" + i * j);
  }
}

//break and continue

for (let index = 0; index < 20; index++) {
  if (index === 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is: ${index}`);
}
