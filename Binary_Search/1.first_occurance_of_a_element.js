//Problem : First occurance of an element or lower bond.

//Input
//let arr = [1,3,4,5,5,8,9]
//let k = 5;

// output : 3

//Note : if element present print index or print -1.

let arr = [1, 3, 4, 5, 5, 8, 9];
let k = 5;
let low = 0;
let high = arr.length - 1;

console.log(binarySearch(arr, low, high));

function binarySearch(arr, low, high) {
  let ans = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == k) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
}

// Time Complexity --> O(logN)
// Space Complexity --> O(1)
