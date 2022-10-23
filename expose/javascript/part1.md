1. What is printed by line 9? If the code returns an error, explain why. 
    Line 9 prints the variable result, which would be the sum of the two numbers passed into the function.
2. What is printed by line 13? If the code returns an error, explain why. 
    line 13 will also return the value in the variable result, which cwould be the sum of the two numbres passed into the function.
3. What is printed by line 9? If the code returns an error, explain why. 
    line 9 prints the vaule of the variable result, which is the sum of the two numbers passed into the function
4. What is printed by line 13? If the code returns an error, explain why. 
    line 13 would return an error that the variable "result" is not defined. This is becasue the variable was intitalized with "let", which has a limited block-scope. This means that if a variable that is initialized with "let" is done so in an if statement, then it's only visible in that if statement.
5. What is printed by line 9? If the code returns an error, explain why.
    line 9 would not even run, as the code would return an error on line 7. Result is declared as a const varaible, meaning it cannot be changed, so when line 7 attempts to change the value of return, it will return an error and stop the program.
6. What is printed by line 13? If the code returns an error, explain why. 
    line 13 would not run as well, as the code would return an error on line 7. Result is decared as a const variable, meaning it cannot be changed, so wehn line 7 attempts to change the value of return, it will return an error and stop the program. However, if result was not changed at line 7, line 13 would still resutrn an error becasue const acts just like let, meaning it has a limited block-scope and line 13 is not in that scope.
