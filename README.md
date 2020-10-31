# Homework 03: Password Generator

## Description
In this repository, you will find an application that can be used to generate a random password based on criteria selected from the user. In order to be generated, the password must be between 8 and 128 characters and contain at least one of the following:
* Lowercase letters
* Uppercase letters
* Numbers
* Special characters

This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code written by me. It has a clean and polished user interface that is responsive to multiple screen sizes.



## How it Works
After the "Generate Password" button is clicked, the user will:
1. Be prompted to input a number between 8 and 128
	1. If the user inputs anything other than an integer, they will be alerted "Not a valid entry. Please input a number between 8 and 28"
	2. If the user inputs an integer less than 8 or greater than 128, they will be alerted "Input must be no less than 8 and no more than 128"
2. Be asked to confirm the inclusion of lowercase letters
3. Be asked to confirm the inclusion of uppercase letters
4. Be asked to confirm the inclusion of numbers
5. Be asked to confirm the inclusion of special characters
	1. If the user selects "cancel" for all of the previous confirmations, they will be alerted "You must select at least one option"
6. Be presented with a random password that matches their selected criteria.



## Mock-Up
The finished project can be deployed [here](https://jaccihorvath.github.io/password-generator/).

### Landing Page
![landing-page](assets/landing-page.png)

### Demo
![password-generator](assets/password-generator.gif)