
// 1. Write a function that takes an array of integers and returns a new array containing only the elements that appear more than once.

// Example:
// Input → [4, 5, 9, 4, 9, 2]
// Output → [4, 9]

function findDup(arr){
    const counts={};
    const result=[];

    for (let num of arr){
        counts[num=counts[num]]
    }

    for(let num in counts){
        if(counts[num]>1){
            result.push(parseInt(num));
        }
    }
    return result
}

findDup([4,5,9,4,9,2])



// 2. Write a function to rotate a 2D matrix (n x n) by 90 degrees clockwise.

// Example:
// Input →

// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]


function rotate(matrix){
    let n= matrix.length;

    for(let i=0; i<n;i++){
for (let j=i; j<n;j++){
    [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
}
    }

    for (let i=0;i<n;i++){
        matrix[i].reverse();
    }
    return matrix
}

let mat=[[1,2,3],
 [4,5,6],
  [7,8,9]]

  console.log(rotate(mat));

// Output →

// [[7,4,1],
//  [8,5,2],
//  [9,6,3]]


// 3. Binary Search Problem
// Implement binary search to find the index of a given number in a sorted array. If not found, return -1.

// Example:
// Input → [2, 5, 7, 10, 14, 20], target = 10
// Output → 3

// 4. Subarray Problem
// Write a function to find the maximum sum of any contiguous subarray of size k.

// Example:
// Input → [2, 1, 5, 1, 3, 2], k = 3
// Output → 9 (5 + 1 + 3)





// 5. String Problem
// Write a function to find the longest substring without repeating characters.

// Example:
// Input → "abcabcbb"
// Output → "abc" (length = 3)

function subString(s){
    let set= new Set();
    let left=0, maxLen=0,statrIdx=0;

    for (let right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++
        }
        set.add(s[right]);

        if(right-left+1>maxLen){
            maxLen=right-left+1;
            statrIdx=left;
        }
    }
    return s.substring(statrIdx,statrIdx+maxLen);
}
console.log(subString("abcabcbb"))