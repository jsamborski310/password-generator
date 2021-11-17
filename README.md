# Password Generator

## Overview

A password generator was created to produce a randomized password when specific criteria is met and based on User selection.  


## The Project

The password generator was built using HTML, CSS, and javascript, and is accessibile via the browser. In order to generate the password, User must select to receive a password between 8 and 128 characters. Additionally, User must select at least one of the following character types: numeric, lowercase, uppercase, and special characters. If requirements are not met, User receives an alert, prompting them to try again. 


## Road Blocks

Before beginning the project, I began thinking through the requirements and writing out pseudocode. Creating the variables, if/else statements, and prompting the alerts were some of the first steps. Although if/else statements were working effectively, I ran into a few bumps in the road:  

- How do I pull true statements only into a new array? 
- How do I loop only true statements?
- How do I randomize only true statements?

A variable can be changed. A variable can also be added to using the `+=` operator. 

A `passwordOptions` variable was created to store strings of characters. When a character option is rendered as true, the corresponding string is added to the `passwordOptions` variable.

After the User goes through all of the prompts, selects the password length and character options, `passwordOptions`, containing only the selected characters, is then looped according to the `passwordLength` and randomized. Its associated new value is applied to the `password` variable. Returning the `password` variable ties in and completes the code, executes it, and displays the random password. 

After some trial and error, office hours attendance, Googling and studying, the code locked into place and the application operates as per the requirements.  


## Take a Look

GitHub: https://github.com/jsamborski310/password-generator

GitHub Pages: https://jsamborski310.github.io/password-generator/


## The Preview

Here's a live screencast of the password generator in action: 

https://www.loom.com/share/aa7cc41aaf31423e92c4523641f304e1
