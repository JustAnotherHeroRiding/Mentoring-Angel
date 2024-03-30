
Each Java package is the folder where the project is contained
As usual we have to import new type we want to use, such as `Date`, `LocalDate`, `LocalDateTime`
When we have two imports with the same name we use the FQN(Fully qualified name `java.sql.Date`)


## Reserved Keywords

- Keywords used for the language itself such as package, static, public, void, class
- We cannot name variables using these reserved keywords

## Arithmetic Operations
- using primitive data types we can perform arithmetic operations, such as int, floats, doubles etc

## The Math Class
- Similar to the javascript method that helps us to work with numbers


## Comparison Operators
- Same operators as in all languages, `==` for equality no triple equals as it is strongly typed

## Logical Operators
- Combining multiple boolean expressions
- `&&` for AND just as JS and `||` for OR
- `!` works as negation

## If statements and ternary operators
- Syntax is same as C/JS. if(condition){action}
- Ternary operators have the same syntax as JS when we only have a single if else statement

## Switch Statements
- Similar to if else but much more concise

## Arrays
- Arrays have a fixed size we cannot change after defining
- Can be accessed using the same syntax as JS
- Arrays can only have a single type of items inside
- We use curly braces instead of square brackets for creating Arrays
- `Arrays.toString(arr)` method to print out the actual array contents, printing the array directly returns the reference

## Loops
- Same syntax as JS/C
- `for(int i = 0; i < arr.length;i++) { do something }`
- Enhanced For loop `for (int number : numbers) System.out.println(number); }`
- The difference is that we do not have access to the index
- shortcuts to skip writing the loops
- `arr.for` , `arr.fori`,` arr.forr`
- Another way to loop over an array
- `Arrays.stream(arr).forEach(System.out::println)`
- Break will stop the rest of the for loop and exit
- Continue will skip the rest of the current iteration and start at the next one
- Do while like in C, where we always execute the code and then check if we should do it again
