1. What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    At line 12, the value of i will be printed. This will be the length of the array, prices, as that is how long the for-loop runs. It will print the value of i becasue i is declared as a "var", allowing it's scope to stretch throughout the whole function, rather than just the for-loop.
2. What will happen at line 13 and why? If the code causes an error, explain why.
   At line 13, the final discounted price will be printed on the console. It will print this value because the variable discountedPrice is declared as a "var", allwoing it's scope to stretch thorughout the whole function, rather than the block it was declared in. 
3. What will happen at line 14 and why? If the code causes an error, explain why.
   At line 14, the final finalPrice caclulated will be printed on the consol. It will print this value because finalPrice is declared as a "var", allowing it's scope to stretch throughout the whole function, rather than a particual block. However, it is also important to note that finalPrice was declared outside any particular block, at the beginning of the function.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
    This function will return all the discounted prices computed because in javascript, when an array is returned, it returns all the elements of that array. Furthermore, discounted is of type "var" so it is reachable throughout the whole function.
5. What will happen at line 12 and why?  If the code causes an error, explain why.(assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
    The code causes an error at line 12. The error will claim that the variable i is not defined. This is because i was declared using "let", which only has a scope in the block it was declared in. This means that i is only accessible in the for-loop. 
6. What will happen at line 13 and why? If the code causes an error, explain why.
    The code will cause an error at line 13. The error will claim that the varaible discountedPrice is not defined. This is because it was declared using "let", insdie the for-loop, and therefore it's scope is restricted to only the for-loop since variables declared using "let" only have the limited-scope of the block they were declared in. 
7. What will happen at line 14 and why? If the code causes an error, explain why.
    line 14 will print the last finalPrice calculated to the console. This is because, while finalPrice is declared with "let" it is declared at the beginning of the function, in no particular code block (like a loop or if statement), meaning that it is still accessible in the whole function. 
8.  What will this function return? Give a brief explanation. If the code causes an error, explain why.
    This function will return the array of all the final prices. This is because while discounted is declared using "let" it is done so out of any specific code block (like loop or if-statement), so it is accessible throughout the whole function.
9. What will happen at line 11 and why? If the code causes an error, explain why.
    Line 11 will cause an error. It will likely say that the variable i is not defined. This is becausse i is defined within the for-loop using "let", and let only allows varaibles to be declared within the scope of the current block, so only within the for-loop. 
10. What will happen at line 12 and why? If the code causes an error, explain why. 
    line 12 will print the length of the prices array to the console. This is because, while it is declared with "let", length is declared in the function before any other block. Therefore, it is accessible throughout the whole function, starting from the  line it is declared on. Furthermore, length is declared with the length of the prices array, which is why that value is printed.
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    the function will still return an array of all the discountedPrices. This is because while the array is declared with const, elements can still be manipulated inside of it. This includes changing particular elements, adding elements and deleting elements. The only thing the const decclaration does in this situation is preventing the whole array from being re-assigned.

DATA TYPES

12. Given the above Object, write the notation for: 
    A. Accessing the value of the name property in the student object
        student.name
    B. Accessing the value of the Grad Year property in the student object
        student["Grad Year"]
    C. Calling the function for the greeting property in the student object
        student.greeting()
    D. Accessing the name property of the object in the Favorite Teacher property in student
        student["Favorite Teacher"]["name"]
    E. Access index zero in the array of the courseLoad property of the student object
        student.courseLoad[0]

13. Arithmetic
    A. '3' + 2 = '32'
    B. '3' - 2 = 1
    C. 3 + null = 3
    D. '3' + null = '3null'
    E. true + 3 = 4
    F. false + null = 0
    G. '3' + undefined = '3undefined'
    H. '3' - undefined = NaN
14. Comparison
    A. '2' > 1  -> true
    B. '2' < '12 -> false
    C. 2 == '2' -> true
    D. 2 === '2' -> false
    E. true == 2 -> false
    F. true ==== Boolean(2) -> true
15. The "==" operator is a non-strict equality check, meaning that it checks equality, with type conversions. This means that the "==" operator can return true if the values are equal, but not of the same type. However, the "===" operator is a string equality check, meaning that if two things are not of the same type, it will always return false. 
17. The function results in an array: [2,4,6]. This is because, the function is called with the array [1,2,3] and a callback function that multiplies a number by 2. Within the function, the callback function is called in the for loop, for each element in the original array. These values are multiplied by two and pushed into a new array. This is why, the array [2,4,6] is returned, as it is 2 multiplied by all the elements in the original array.
19. 1
    4
    3
    2

