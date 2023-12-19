// Array of special characters to be included in password
//Included in starter code
const specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

const charOptions = [];

//My code
function getPasswordOptions() {
    let passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid number between 8 and 128.");
        passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
    }

    let useLower = false;
    let useUpper = false;
    let useNumeric = false;
    let useSpecial = false;

    //keep prompting until the user confirms the options or cancels
    while (true) {
        useLower = confirm("Include lowercase characters?");
        useUpper = confirm("Include uppercase characters?");
        useNumeric = confirm("Include numeric characters?");
        useSpecial = confirm("Include special characters?");

        if (useLower || useUpper || useNumeric || useSpecial) {
            // Display selected options
            //using \n to create new line in string
            const confirmationMessage = `Selected Options:\nPassword Length: ${passwordLength}\nInclude Lowercase: ${useLower}\nInclude Uppercase: ${useUpper}\nInclude Numeric: ${useNumeric}\nInclude Special: ${useSpecial}`;

            // If user confirms, break out of the loop
            if (confirm(confirmationMessage)) {
                break;
            }
        } else {
            alert("At least one character set must be selected. Please try again.");
        }
    }

    charOptions.length = 0;

    if (useLower) {
        charOptions.push(...lowerCasedCharacters);
    }
    if (useUpper) {
        charOptions.push(...upperCasedCharacters);
    }
    if (useNumeric) {
        charOptions.push(...numericCharacters);
    }
    if (useSpecial) {
        charOptions.push(...specialCharacters);
    }

    return { passwordLength, charOptions };
}

function getRandom(arr, length) {
    let generatedPassword = '';
    


// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
    // Prompt for password length
    // At least 8 characters, no more than 128 characters
    // Conditional to check that the number that was entered is in range
    // Prompts store data as strings, so need to parse into a number
    // If the user's input is out of range, either return out of the function or call the function again

    // Confirm which character sets to use
    // If the user answers false for all, either return out of the function or call the function again

    // Once they select a character set:
    // Generate a random character for each selected character set
    // Either push selected character sets to a mega-array of all selected characters
    // OR you can keep the arrays separate and generate a random number to select the array and another to select the index

    // Once character sets are selected, move on to generating random characters

// Function for getting a random element from an array
    // Need a variable to hold the password as it's being generated
    // Need a variable to hold the index that's being generated

    // For loop that loops the number of times that matches the length the user chose
    // Generate a random number
    // That number is the index for a character in the mega-array
    // So then, mega-array[generated-index] is the actual character
    // Add that character to the password

    // Once we finish the for loop, return the generated password