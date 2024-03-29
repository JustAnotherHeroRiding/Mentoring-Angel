

## Scanner

The scanner can be used to get user input from the console
Needs to be imported `import java.util.Scanner;`
To capture a string, we use the scanner's next line method to save it into a variable, for integers we would use `scanner.nextInt()`
```  
        Scanner scanner = new Scanner(System.in);
        System.out.println("What is your name?");
        String userName = scanner.nextLine();
        System.out.println("Hello " + userName);
```


## Methods

- Used to perform logic but only when called
- Built in methods vs user defined methods
- This is how we define functions that we want to call in the main function
- public static and int as the return type when we want to count the number of times a certain letter appears


## Classes
- Classes must be defined outside of the main method
- We define properties we want our class to have
- The class must be static so that we can reference it in the main class
- The constructor is created by using the name of the class and adding the possible arguments
- Then just like JS we use `this` to refer to the class itself and access any properties or methods