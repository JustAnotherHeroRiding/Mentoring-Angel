localhost:4200 is the default port
-o to open the website
spec files are for testing
create a simple website using the components for a navbar, main page and a footer
make the main container something short but interesting

## Data binding
- Everything inside the double curly braces is turned into a string
- Therefore it only makes sense to use values that can be turned to strings and not objects
- Uppercase pipe

## Two way binding
- Ngmodel to connect the value with an input
- if the input changes the property will be changed


## Loops
- ngFor to loop over a list

## html attributes
- When defining a stylesheets, angular adds an attribute to each selector
- This attribute is the same for all elements within a component's html file
- If a style is added in the parent component, it will not work for it's children unless the css file is linked in the styles array


## Structural directives
- This means that the structure of the element is changed
- *ngIf and *ngFor 
- These are the only two structural directives
- Default encapsulation is EMULATE which adds the attributes
- None removes the attributes and turns the styles defined in that component to be global
- It is not possible to use two directives in the same element, it is not possible to chain it

## Dynamic classes
- ngClass to evaluate a condiition
- If the condition returns true, the classes will be applied
- class.className = condition is the second way to check for just one class

## Input and Output decorators
- This is the way components communicate with eachother
- when rendering a child component, we can add an @Input decorator before class properties so that the components accepts variables
- We can then pass these to the component and use them when rendering the html
- With the @Output decorator we can send data from the child component to the parent
- Once again we pass this function when creating the element
- Once an input changes, it will rerender the component