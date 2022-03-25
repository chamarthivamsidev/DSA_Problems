//Problem : Check given strings anagram or not

// An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.

//Input
//let str1 = "abcd"
//let str2 = "dcba"
// output : Yes

//Note : if both are not anagram print No

// Approach-1 : TC => O(NlogN) && SC => O(1)
let str1 = "abcd";
let str2 = "dcba";

console.log(anagram(str1, str2));

function anagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;

  if (n1 != n2) return false;

  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  for (let i = 0; i < n1; i++) {
    if (str1[i] != str2[i]) return "No";
  }

  return "Yes";
}

// Approach-2 : TC => O(N) && SC => O(1) // Using ASCII Code Value

let s1 = "abcd";
let s2 = "dcba";

let num = 26;

let count = new Array(num).fill(0);

for (let i = 0; i < s1.length; i++) {
  count[s1[i].charCodeAt() - "a".charCodeAt()]++;
  count[s2[i].charCodeAt() - "a".charCodeAt()]--;
}
let flag = true;
for (let j = 0; j < count.length; j++) {
  if (count[j] != 0) {
    flag = false;
    break;
  }
}
if (flag) {
  console.log("Yes");
} else {
  console.log("No");
}
