/*Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/


const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let fizz = [];
let buzz = [];
let fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
    let number = nums[i];

    if (number % 3 === 0 && number % 5 === 0) {
        fizzbuzz.push(number); 
    } else if (number % 3 === 0) {
        fizz.push(number); 
    } else if (number % 5 === 0) {
        buzz.push(number); 
    }
}

console.log("Exercise 12 Results:");
console.log("Fizz numbers:", fizz);
console.log("Buzz numbers:", buzz);
console.log("FizzBuzz numbers:", fizzbuzz);
