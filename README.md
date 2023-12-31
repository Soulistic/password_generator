# Password Generator Project Documentation
## Project Overview
The Password Generator is a web application designed to assist users in generating secure and randomized passwords. It provides a user-friendly interface for customizing password parameters and copying generated passwords to the clipboard.

## Getting Started
### Prerequisites
Before using the Password Generator, ensure you have the following prerequisites:

A modern web browser (e.g., Chrome, Firefox, or Edge).
## Installation
1. Clone the project repository from GitHub:
2. git clone https://github.com/Soulistic/password_generator.git
3. Open the project folder using your preferred code editor.

Launch the index.html file in your web browser.

## Usage
### Generating a Password
Password Length: Use the slider to specify the desired length for the generated password. The range is from 1 to 20 characters.

Character Set Options: Check the checkboxes to include specific character types in the generated password:

1. Uppercase Letters: Includes uppercase letters (e.g., A, B, C).
2. Lowercase Letters: Includes lowercase letters (e.g., a, b, c).
3. Numbers: Includes numerical digits (e.g., 1, 2, 3).
4. Symbols: Includes symbols (e.g., @, #, $).
Generate Password: Click the "Regenerate Password" button to generate a password based on your selected options. The generated password will appear in the input field.

## Copying a Password
Copy Password: To copy the generated password to your clipboard, click the "Copy" button. A tooltip will briefly indicate whether the copying was successful.
## Password Strength Indicator
The strength indicator located below the password options provides feedback on the password's strength.
The indicator changes color based on the selected options and length:
Green: Strong password (includes upper/lowercase, numbers, symbols, and length >= 8).
Yellow: Medium password (includes upper/lowercase, numbers, symbols, and length >= 6).
Red: Weak password (other combinations).
## Customizing Password Options
You can customize the password generation options by checking or unchecking the checkboxes and adjusting the password length using the slider.
If you check more character set options than the current password length allows, the password length will increase automatically to accommodate your selections.
## Code Structure
### HTML Structure
index.html defines the structure of the web page, including elements for displaying the password, character set options, and buttons.
### CSS Styling
index.css provides the styles for the web page, including colors, fonts, and layout. It creates an attractive and user-friendly interface.
### JavaScript Functionality
index.js implements the core functionality of the password generator. It handles user interactions, generates passwords, assesses password strength, and manages clipboard copying.
### Additional Notes
The project leverages custom CSS variables (custom properties) to maintain a consistent color scheme throughout the interface.
The password generator uses a secure method to copy passwords to the clipboard, enhancing user security.
For contributions or bug reports, please refer to the project's CONTRIBUTING.md file.
### License
This project is open-source and is available under the MIT License. Feel free to use and modify it according to your needs.
