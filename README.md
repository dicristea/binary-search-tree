# binary-search-tree

This code is a solution to The Odin Project's <a href="https://www.theodinproject.com/lessons/javascript-binary-search-trees">Binary Search Tree Project</a> as part of their Computer Science course.

## Binary Search Tree

- Don't use duplicate values (check for existing, remove duplicates)

1. Create a binary search tree from an array of random numbers. You can create a function if you want that returns an array of random numbers each time you call it.
2. Confirm that the tree is balanced by calling isBalanced
3. Print out all elements in level, pre, post, and in order
4. Unbalance the tree by adding several numbers > 100
5. Confirm that the tree is unbalanced by calling isBalanced
6. Balance the tree by calling rebalance
7. Confirm that the tree is balanced by calling isBalanced
8. Print out all elements in level, pre, post, and in order

## Notes

<code>let sortedArray = [...new Set(array.sort((a, b) => a - b))];</code>

Set is a standard built-in object in Javascript that can remove duplicate elements from an array.
See <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#remove_duplicate_elements_from_the_array"> Set Mozilla docs</a>

Array.sort()

- The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending.
- If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order.
