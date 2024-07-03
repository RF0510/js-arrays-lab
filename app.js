/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [];

for(let i = 0; i < nums.length; i++) 

    { if (nums[i] % 2 !== 0)  //Used ChatGPT
        
        { odds.push(nums[i]);
    }
}

console.log('Exercise 11 result:', odds);


