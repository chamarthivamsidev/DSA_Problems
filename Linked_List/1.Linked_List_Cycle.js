//Givenhead, the head of a linked list, determine if the linked list has a cycle in it.
// Problem function complete.
//Sample Input
1;
3;
1;
2;
3 - 1;

//Sample output
false;

var hasCycle = function (head) {
  let p2 = head;
  let p1 = head;

  while (p2 !== null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      return true;
    }
  }
  return false;
};
