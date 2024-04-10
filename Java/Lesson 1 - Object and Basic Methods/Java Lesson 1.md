
## Java Syntax Basics
- `final` means it cannot be inherited when used in front of a class
- `final` **String** means it cannot be changed and it must be initialized
- `protected`, `private` and `package` access modifiers
- **String** is a `final` class and is used for the type
- Creating floating point numbers with `float` which is a primitive data type
- `(float) 12.00 and 12.04f` can both be used to create a float
- `Double` is 64 bit and should be used for more exact calculations
- `String.format("data %f", doubleNumber)` is a common way to format strings as there is no string interpolation in Java
- .3f to show 3 decimals when using `String.format`
- `%d` for double
- It is advised to parse doubles into strings for better formatting possibilities
- `char` for single characters
- we can add numbers to chars to increase the ascii value and change it's value. for example `char c = 'a' + 25`

- When copying strings in Java, only the value is copied, not the reference to memory, so changes to the copied string will not propagate to the copier

- String pool in java - read more

- Creating new classes in java - Person
- Almost always use private for properties as otherwise it will be public by default unless we are certain we need to access them

## Primitive vs Wrapper types
- **Integer** provides methods to manipulate the int variable that the primitive does not provide
- The constructor can use a property without `this` if there is no other matching property/dependency
- Auto generating getters and setters using the editor
- Learn how to access the docs of a method with a command from a built in method

- All java classes implement the **Object** class
- The **Object** class is the root of all classes and provides commonly used methods such as toString(), hashCode() among others

- Overriding the toString() method is commonly used as we want our own custom implementation
- `@Override` to override the toString() method inherited from the Object class

- Comparing two objects with object1 == object2 will use the toString() method on both
- `hashCode` override to only calculate the hash code of the name instead of the entire object, which will allow us a more accurate comparison


## Comparing Two Objects

In Java, comparing two objects can be done in two ways: using the `==` operator or using the `equals()` method.

1. `==` Operator: This operator compares the memory locations of the two objects. If they point to the same memory location, it returns `true`. Otherwise, it returns `false`. This is also known as reference comparison.
2. `equals()` Method: This method is provided by the `Object` class and can be overridden in your class to define your own way of comparing two objects. By default, the `equals()` method behaves the same as the `==` operator, comparing memory locations. However, classes like `String`, `Integer`, `Date`, etc., override this method to provide their own implementation based on content comparison.

- Two objects are the same if they have the same name if we override the `hashCode` method

- this is the first way to compare objects

- Second way to compare objects is to use the equals method from the Object class which we have to override
- using `String.equals(string2)`


## Exercise
- Create function to find out if two objects are duplicates or not #Done 
- Use the name, age, and date of birth #Done 
- Override the basic methods provided  #Done 


- Even dates inherit the Object so we can use equals to compare


- clone() is a shallow copy and a direct == comparison will not return true


## Class inheritance
- class **Animal** with a string name property and a constructor
- default constructor
- super calls the constructor of the parent class
we can create a new dog object using the Animal type
We can use the Object class to type the new dog as it inherits
adding a type to the parent Class so that each child object that inherits it can have a type following it around
using an `enum` for the type


### Animal Garden

- animals property that is an array of Animal objects
- toString() should return all animals in the string array
- `StringBuilder` to build our string with builder.append()
at the end the builder needs to use toString()

- `List` type and it is under Object
- basic interface for any kind of collection of elements 
- this allows us to use methods such as add, contains, remove on arrays

## List and ArrayList

- Difference between `ArrayList` and array is that the `ArrayList` is dynamic
- The array list will grow if we go out of bounds

### Methods of ArrayList
1. `add(E e)`: This method is used to append an element to the end of the ArrayList.
2. `get(int index)`: This method is used to fetch the element from the particular position of the ArrayList. The index starts from 0.
3. `set(int index, E element)`: This method replaces the element present at the specified position in the ArrayList with the specified element.
4. `remove(int index)`: This method is used to remove an element from a specific position in the ArrayList.
5. `size()`: This method returns the number of elements in this list.
6. `clear()`: This method is used to remove all the elements from the list.
7. `isEmpty()`: This method returns `true` if the list is empty; otherwise, it returns `false`.
8. `contains(Object o)`: This method is used to check if the specified element exists in the list.
9. `indexOf(Object o)`: This method returns the index in this list of the first occurrence of the specified element, or -1 if the List does not contain this element.
10. `addAll(Collection<? extends E> c)`: This method is used to append all of the elements in the specified collection to the end of this list.
## Exercise
- This list should be called Garden #Done 
- Should store a List #Done 
- Create my own List data structure #Done 
- It should not inherit from List but I should implement some of them
- The user should be able to manipulate the list
- Add elements, remove elements
- Add or remove multiple elements
- Create structure when printing a garden - `printGarden()`
- It should have a specific structure - look at the project
- This structure should be printed for each element
- If i try to add the same animal with the same name and race throw and exception using `hashCode` and equals

[Repo](https://github.com/Angel-dev14/java-basics)



