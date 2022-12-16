let outputContainer = document.querySelector('.js-calculations-result');

let userInput1 = null ?? 100;
let userInput2 = null ?? 100;

let skipOddNumbers;

do {
    var input1 = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
    userInput1 = input1;
} while (isNaN(input1) || input1 > 100 || input1 < 1);

do {
    var input2 = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
    userInput2 = input2;
} while (isNaN(input2) || input2 > 100 || input2 < 1);

skipOddNumbers = window.confirm("Skip odd numbers?");

let result = 0;

for (let i = userInput1; i <= userInput2; i++) {
    if (skipOddNumbers === false) {
        result += i
    } else {
        if (i % 2 === 0) {
            result += i
        }
    }
}

outputContainer.innerHTML = `
Input 1: ${userInput1} <br>
Input 2: ${userInput2} <br>
Result of adding numbers: ${result}
`;