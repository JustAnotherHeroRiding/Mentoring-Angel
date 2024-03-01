
- Standalone components - no need for a module and the component does not live in a module
- to import it into a different module we import it in the modules array
- we have to import all modules separately
- Think about the requirements and how we should create the context drop down
- We need to listen for right clicks
- On each click, the menu will open
- top left is 0,0 cords for the browser
- the x axis is moving right
- y axis is moving down
- difference between component and view 
- if a component is not standalone, it must be imported in a module
- Shared module for all common dependencies
- views array for all defined views


### Optimizing the event listeners and View positioning 

- `trackBy` on `for loop` view to not refresh where the references do not update
- passing input to the directive using angled braces right after the directive
- using `pageX` and `pageY` as the coordinates will be relative to the current viewport
- optimizing more than a thousand directives
- listening outside of angular to trigger only one click
- a new listener to close the context menu when we click inside the element
- by running the two document listeners outside angular, we stop 1000 listeners from firing off and we only update the zone after the filter passed
- Difference between all the x and y cords of a pointer click
- using `detectChanges()` to get the correct height after the options are passed
- using `offsetWidth` and `offsetHeigth` to change the origin point of the context menu, together with the `clientX` and Y of the page



### Todo

- Refactor the code where we calculate x and y as we have too much repetition(2 if else loops)
- improve naming of variables(x and y)
- When we click on an option(for example spaghetti), we can find out the clicked option somewhere in the template
- show an image depending on the clicked option, render an image for the chosen option(create event interface where we create a structure which kind of click was selected i.e. the value)
- do not access the `offsetHeigth` and Width of the child element, find another way. Allow direct access to the div of the component instance without using `nativeElement.ChildNodes[0]`
- find another alternative to `detectChanges()` to get the height without using the `changeDetectorRef` to get the updated height

##### Bonus
- Use angular material
- angular animations on the view - add an animation to the opening of the menu - these can be defined in the animations property of the components