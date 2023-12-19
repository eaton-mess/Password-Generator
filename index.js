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
    let useLower, useUpper, useNumeric, useSpecial;

    while (true) {
        // Validate password length
        while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
            alert("Please enter a valid number between 8 and 128.");
            passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
        }

        useLower = confirm("Include lowercase characters?");
        useUpper = confirm("Include uppercase characters?");
        useNumeric = confirm("Include numeric characters?");
        useSpecial = confirm("Include special characters?");

        if (useLower || useUpper || useNumeric || useSpecial) {
            // Display selected options
            const confirmationMessage = `Selected Options:\nPassword Length: ${passwordLength}\nInclude Lowercase: ${useLower}\nInclude Uppercase: ${useUpper}\nInclude Numeric: ${useNumeric}\nInclude Special: ${useSpecial}`;

            // If user confirms, break out of the loop
            if (confirm(confirmationMessage)) {
                break;
            } else {
                // If user cancels, reset options and return to the first prompt
                passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
                continue;
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

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        generatedPassword += arr[randomIndex];
    }

    return generatedPassword;
}

function generatePassword() {
    const { passwordLength, charOptions } = getPasswordOptions();
    return getRandom(charOptions, passwordLength);
}

const generateBtn = document.querySelector('#generate');

function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector('#password');
    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);
