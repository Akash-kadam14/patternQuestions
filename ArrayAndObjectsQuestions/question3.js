
// Problem: Merge and Sort Two Arrays
// You are given two sorted arrays of integers. Write a function to merge these two arrays into a single sorted array without using any built-in sort function.

/*
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
op => [1, 2, 3, 4, 5, 6, 7, 8]
*/

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray)

function sortArrays(arr) {
    // use bubbble sort technique
    const n = mergedArray.length
    // this loop is used iterate all the elements in the array
    for(let i = 0; i < n; i++) {
// this loop is used to compare prev elem with its next elem if next elem is less than prev elem then will swap elem with each other
        for(let j = 0; j < n - i -1 ; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+ 1] ] = [arr[j+ 1], arr[j]]
            }
        }
    }
    return arr;
}

const sortedMergArr = sortArrays(mergedArray)
console.log(sortedMergArr)