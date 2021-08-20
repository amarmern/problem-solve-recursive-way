// function countDown(n){
//   for(let i =n ; i >0; i--){
//     console.log(i)
//   }
// }

// console.log(countDown(5))

// function recursiveCount(n) {
//   if (n <= 0) {
//     return;
//   }
//   console.log(n);
//   recursiveCount(n - 1);
// }

// console.log("rec", recursiveCount(5));

// function sumRange(n){
//   let total =0;
//   for(let i =n; i > 0; i--){
//     total += i
//   }
//   return total
// }
// console.log(sumRange(3));

// function RecursiveSumRange(n, total = 0) {
//   if (n <= 0) {
//     return total;
//   }
//   return RecursiveSumRange(n - 1, total + n);
// }

// console.log(RecursiveSumRange(3));

// const tree = {
//   name: "John",
//   children: [
//     {
//       name: "Jim",
//       children: []
//     },
//     {
//       name: "Joe",
//       children: [
//         { name: "kyle", children: [] },
//         { name: "Shophiya", children: [] }
//       ]
//     }
//   ]
// };

// function printChildren(t) {
//   if (t.children.length === 0) {
//     return;
//   }
//   t.children.forEach((child) => {
//     console.log(child);
//     printChildren(child);
//   });
// }
// console.log(printChildren(tree));

let categories = [
  { id: "animals", parent: null },
  { id: "mamals", parent: "animals" },
  { id: "cats", parent: "mamals" },
  { id: "dogs", parent: "mamals" },
  { id: "chihahu", parent: "dogs" },
  { id: "larbor", parent: "dogs" },
  { id: "parsian", parent: "cats" },
  { id: "samies", parent: "cats" }
];

let MakeTree = (categories, parent) => {
  let node = {};
  categories
    .filter((c) => c.parent === parent)
    .forEach((c) => (node[c.id] = MakeTree(categories, c.id)));
  return node;
};

console.log(JSON.stringify(MakeTree(categories, null, 2)));
