//1.
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

let numArray = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
let newValue = 16;
let newStart = 0;
let newEnd = 9;

binarySearch(numArray, newValue, newStart, newEnd);

let arrayOne = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53];

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

indexOf;


//2.

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

let arrayTwo = arrayOne.sort();
console.log(arrayTwo);
binarySearch(arrayTwo, 25, 0, 10);

// 3.

// Using Dewey number, go to correct category
// search for book in that category

findBook = (dewey, title) => {

}

// 4.

// 1) 25,15,19, 27, 25, 79, 91, 90, 89, 35
// 2) 8, 7, 5, 6, 10, 9, 11


// 5.

let BinarySearchTree = require('./BST');
inOrder = (node, values=[]) => {
    if (node.left != null) {
        values = inOrder(node.left, values);
    }
    values.push(node.key);
    if (node.right != null) {
        values = inOrder(node.right, values);
    }
    return values;
}
preOrder = (node, values=[]) => {
  values.push(node.key);
  if (node.left != null) {
    values = preOrder(node.left, values);
  }
  if (node.right != null) {
      values = preOrder(node.right, values);
  }
  return values;
}
postOrder = (node, values=[]) => {
  if (node.left != null) {
    values = postOrder(node.left, values);
  }
  if (node.right != null) {
      values = postOrder(node.right, values);
  }
  values.push(node.key);
  return values;
}
const BST = new BinarySearchTree();
// BST.insert('F');
// BST.insert('B');
// BST.insert('A');
// BST.insert('D');
// BST.insert('C');
// BST.insert('E');
// BST.insert('G');
// BST.insert('I');
// BST.insert('H');

const data = [25,15,50,10,24,35,70,4,12,18,31,44,66,90,22];
data.forEach(item => BST.insert(item));


// 6.


let BinarySearchTree = require('./BST');

printOrder = (node, level) => {
  if (!node) {
    return;
  }
  if (level == 1) {
    console.log(node.value)
  } else if (level>1) {
    printOrder(node.left, level-1)
    printOrder(node.right, level-1)
  }
}

const BST = new BinarySearchTree();
BST.insert(20,'Captain Picard');
BST.insert(15,'Commander Riker');
BST.insert(10,'Lt. Cmdr. Worf');
BST.insert(16,'Lt. Cmdr. LaForge');
BST.insert(8,'Lieutenant security-officer');
BST.insert(25,'Commander Data');
BST.insert(30,'Lt. Crusher');
BST.insert(29,'Lieutenant Selar');

console.log(printOrder(BST, 4));


// 7. 

const prices = [128, 97, 121, 123, 98, 97, 105]
maxProfit = (prices) => {
  let max = prices[1] - prices[0];
  for (let i = 0; i < prices.length -1; i++) {
    for (let j = i+1; j < prices.length; j++) {
      let diff = prices[j] - prices[i]
      if (diff > max) {
        max = diff;
      }
    }
  }

  return `Max profit per share: $${max}`
}



