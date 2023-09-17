// Q1. Write a function that displays current date & time in your
// browser.

function dateAndTime(x) {
    var currentDate = new Date();
    return currentDate;
}
console.log((dateAndTime()));

// Q2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greetUser() {
    var firstName = "Fareed";
    var lastName = "Shakoor";
    var fullName = firstName + " " + lastName;
    console.log("Hello" + " " + fullName);
}
greetUser();

// Q3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        return sum;
    } else {
        return "Invalid input. Please enter valid numbers.";
    }
}

var result = addNumbers();

if (typeof result === "number") {
    console.log(`The sum of the two numbers is: ${result}`);
} else {
    console.log(result);
}

// Q4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

{/* <h1>Calculator</h1>
<label for="num1">Enter the first number:</label>
<input type="number" id="num1"><br>

<label for="operator">Enter the operator (+, -, *, /):</label>
<input type="text" id="operator"><br>

<label for="num2">Enter the second number:</label>
<input type="number" id="num2"><br>

<button onclick="calculate()">Calculate</button>

<p id="result"></p> */}


{/* // Function to perform the desired operation and display the result */ }
function calculate() {
    const num1 = parseFloat(prompt("Enter the first number"));
    const operator = prompt("Enter the operator like / , - + & *")
    const num2 = parseFloat(prompt("Enter the second number"));

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Division by zero is not allowed.";
            }
            break;
        default:
            result = "Invalid operator. Please enter +, -, *, or /.";
    }

    return result;
}
console.log(calculate());

// Q5. Write a function that squares its argument.

function squares(num) {
    return num * num;
}

console.log(squares(25));

// Q6. Write a function that computes factorial of a number.

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(2.5));

// Q7. Write a function that take start and end number as inputs
// & display counting in your browser.

function displayCounting() {
    var starts = parseFloat(prompt("Enter starts number"));
    var end = parseFloat(prompt("Enter end number"));


    if (isNaN(starts) || isNaN(end)) {
        console.log("Please valid numbers")
    }


    let counting = "";
    for (var i = starts; i <= end; i++) {
        counting += i + " ";
        console.log(counting);
    }
    return counting;
}

displayCounting();

// //   Q8. Write a nested function that computes hypotenuse of a
// //   right angle triangle.
// //   Hypotenuse2 = Base2 + Perpendicular2
//      Take base and perpendicular as inputs.
//      Outer function : calculateHypotenuse()
//      Inner function: calculateSquare()    


function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(number) {
        return number * number;
    }

    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);

    const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    return hypotenuse;
}

var baseLength = 3;
var perpendicularLength = 4;
var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);

console.log(`The hypotenuse is: ${hypotenuse}`);

// // Q9. Write a function that calculates the area of a rectangle.
// // A = width * height
// // Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function calculateRectangleArea(width, height) {
    return width * height;
}

var widthValue = 5;
var heightValue = 8;

const area2 = calculateRectangleArea(widthValue, heightValue);
console.log(`The area of the rectangle is: ${area2}`);

// Q10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function isPalindrome(str) {
    var len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
const str1 = 'madam';
const str2 = 'level';
const str3 = 'fox';
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

//   Q11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeWords(str) {
    const words = str.split(' ');
    const capitalizedWords = [];

    for (const word of words) {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }


    return capitalizedWords.join(' ');
}

const inputString = 'the quick brown fox';
const outputString = capitalizeWords(inputString);
console.log(outputString);


// Q12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function getLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }

    console.log(maxLength);
    console.log(longestWord);

}

getLongestWord("Web Development Tutorial");

// Q13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countOccurrences(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }

    return count;
}

var inputStr = 'JSResourceS.com';
var letterToCount = 'f';
var occurrences = countOccurrences(inputStr, letterToCount);

console.log(`The letter '${letterToCount}' appears ${occurrences} times in the string.`);