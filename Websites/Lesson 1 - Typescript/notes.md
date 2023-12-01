



## Private static and public
- What do each of these class attribute prefixes mean?


# Static
- If we have a Euro class with an attribute of mk
- If the mk value is "61.5" and there are thousands of euros in circulation
- Let's see that the value changes and the mk value is now "61,6"
- We need to change the value of all euro objects in circuation
- We do this by changing Euro.mk = "61,6", which will update the mk value of all objects
- The `static` keyword is used for creating static members of a class. Static members belong to the class itself, not an instance of the class. They can only be accessed directly by referencing the class itself, not an instance of the class
# Public
- A public method is one that be used by all objects and classes that have inherited this method, no matter how deep in the prototype chain it is
- The `public` modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the `public` modifier by default

# Private
- A private method or property is one that can only be used within the class itself, and cannot be accessed or modified by any objects
- The `private` modifier restricts the visibility of a class member to within the class that declares it. Private fields cannot be accessed outside of the class
# Protected
- The `protected` modifier is similar to `private`, but it also allows access from subclasses. Protected members are only visible to subclasses of the class they’re declared in

# Readonly
- TypeScript also has the `readonly` modifier. This prevents assignments to the field outside of the constructor

## Currency exchange website
- Use Classes and typescript #DONE 
- Use the currency exchange api #DONE 
- Create a front end for exchanging #DONE 
- Work on the task branch and create pull requests for each change #DONE 