//Givenhead, the head of a linked list, determine if the linked list has a cycle in it.
// This is a function complete problem.
//Refer to sample input for understanding
//The first line contains the number of nodes (t)
//Next t lines contains the node of the linked list

//Sample Input
3;
1;
2;
3;

//Sample output
2;

//Approach => first calculate size of linked list with for loop and find middle point.Take a pointer and move the pointer to the middle point.return pointer data.

var middleNode = function (head) {
  let size = 0;

  let p1 = head;
  let p2 = head;

  while (p1 !== null) {
    size++;
    p1 = p1.next;
  }

  let pos = Math.floor(size / 2);

  for (let i = 0; i < pos; i++) {
    p2 = p2.next;
  }

  return p2.data;
};
