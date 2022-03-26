//Problem : All twice except one. return number whose frequency is 1.

//Input
//let arr = [1,2,2,3,3]

// output : 1

// Approach-1 : TC => O(N^2) && SC => O(1) => Two for loops

let arr = [2, 2, 3, 3, 5, 1, 1];
let ans;
let max_count;

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (!max_count) {
    max_count = count;
    ans = arr[i];
  } else if (count < max_count) {
    max_count = count;
    ans = arr[i];
  }
}
console.log(ans);

// Approach-2 : TC => O(N) && SC => O(N) => Hashmap

let arr1 = [2, 2, 3, 3, 5, 5, 7, 1, 1];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
  if (!obj[arr1[i]]) {
    obj[arr1[i]] = 1;
  } else {
    obj[arr1[i]]++;
  }
}
for (let key in obj) {
  if (obj[key] === 1) {
    console.log(Number(key));
    break;
  }
}

// Approach-3 : TC => O(N) && SC => O(1) => Bitwise EX-OR(^)

let arr2 = [2, 2, 3, 3, 5, 5, 1];
let temp = 0;

for (let i = 0; i < arr2.length; i++) {
  temp = temp ^ arr2[i];
}
console.log(temp);
