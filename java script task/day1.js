// what is call back function
// ans - a callback function that is passed as an argument to another function.
// function sum(a,b){
//     console.log(a+b);
//    }
//    function calculator(a,b,sumCallback){
//     //console.log("calculator",a+b)
//    sumCallback(a,b);
//    }
// calculator(1,2,sum)



//       main function has finished its excution



// 2. what is settimeout, setinterval , setimmediate
// ans - setImmediate():
// setImmediate Executes immediately after the current event loop iteration, making it ideal for time-sensitive tasks without delay. It has higher priority than other I/O events and timers, potentially causing starvation of other tasks due to its immediate execution.

// setTimeout():
// Executes after a specified delay (in milliseconds), making it suitable for implementing delays or timeouts in code. It has a lower priority compared to setImmediate(), reducing the likelihood of starving other tasks in the event loop.

// setImmediate():
// When you want to execute some piece of code asynchronously, but as soon as possible, one option is to use the setImmediate() function provided by Node.js:


//  ⁠Writer a program to remove duplicate elements from an array list


// let array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
// function removeDuplicates(array) {
//     let number = new Set(array);
//     return [...number];
// }



// console.log("Given Number", array);
// console.log("Remaining number", removeDuplicates(array));




//  ⁠Write a program to reverse a string 
// function reverseString(str){
//     const reversedString = 
//     str.split("").reduce((acc, char) => char + acc, "");
//     console.log(reversedString);
// }
// reverseString("JavaScript");
// reverseString("TypeScript");



// function reverseString(str) {
    
//     return str.split('').reverse().join('');
// }
// // Example usage:
// let originalString = "Hello, World!";
// let reversedString = reverseString(originalString);
// console.log("Original string:", originalString);
// console.log("Reversed string:", reversedString);



//  ⁠Write a program to reverse a words in a string 

// function reverseInPlace(str) {
//     var words = [];
//     words = str.split("\s+");
//     var result = "";
//     for (var i = 0; i < words.length; i++) {
//         return result += words[i].split('').reverse().join('');
//     }
// }
// console.log(reverseInPlace("abd fhe kdj"))





// function reverseWords(str) {
//     return str.split(' ').reverse().join(' ');
// }
// let originalString = "Hello, how are you?";
// let reversedWordsString = reverseWords(originalString);
// console.log("Original string:", originalString);
// console.log("Reversed words string:", reversedWordsString);




// Explain all array methods with an example in javascript

// Array is a special variable which can be hold more than one value.
//array written in []

//why we use array
//list of item  storing the single variable

//array methods
// push() - Adds one or more elements to the end of an array
// let arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr); 


// pop() - Removes the last element from an array
// let arr = [1, 2, 3];
//  arr.pop();
// console.log(arr); 

 
// shift() - Removes the first element from an array.
// let arr = [1, 2, 3];
//  arr.shift();
// console.log(arr); 


// unshift() - Adds one or more elements to the beginning of an array.
// let arr = [1, 2, 3];
// arr.unshift(0);
// console.log(arr); 


// concat() - Merges two or more arrays.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let newArr = arr1.concat(arr2);
// console.log(newArr); 


// slice() - Extracts a section of an array , piece of array
// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(1, 3);
// console.log(slicedArr); 


// find() - Returns the first element that satisfies the provided testing function.

// let arr = [1, 2, 3, 4, 5];
// let found = arr.find(element => element > 1);
// console.log(found); 



// map() - Creates a new array with the results of calling a provided function on every element in the calling array.
// let arr = [1, 2, 3, 4, 5];
// let mappedArr = arr.map(element => element * 2);
// console.log(mappedArr); 



// join() - Joins all elements of an array into a string.

// let arr = [1, 2, 3, 4, 5];
// let joinedString = arr.join('-');
// console.log(joinedString); 



// let arr = [1, 2, 3, 4, 5];
// let arr =[ "mango" , "apple", "grapes","banana"]
// // let lengths = arr.length();
// console.log(arr[2])



