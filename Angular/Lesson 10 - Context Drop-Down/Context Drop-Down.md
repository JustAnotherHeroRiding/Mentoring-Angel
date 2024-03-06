
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

- improve naming of variables(x and y) #DONE 
- When we click on an option(for example spaghetti), we can find out the clicked option somewhere in the template #DONE 
- show an image depending on the clicked option, render an image for the chosen option(create event interface where we create a structure which kind of click was selected i.e. the value) #DONE 
- do not access the `offsetHeigth` and Width of the child element, find another way. Allow direct access to the div of the component instance without using `nativeElement.ChildNodes[0]` #DONE 
##### Trying to set the the coordinates in `ngAfterViewInit` does not seem to work.
``ExpressionChangedAfterItHasBeenCheckedError``
- find another alternative to `detectChanges()` to get the height without using the `changeDetectorRef` to get the updated height #DONE 
- Refactor the code where we calculate x and y as we have too much repetition(2 if else loops) #DONE 

##### Bonus
- Use angular material #DONE 
##### Using `mat-menu` or `overlay DI` has proved to be very problematic and requiring an entire rewrite of the application. The menu is designed to work with left clicks, and if I want to use it as a right click, it will not be a directive anymore as the custom component is not needed and the user will have to define the `mat-menu` himself somewhere in the app. A directive that renders a custom components seems to be the best way to do it if we want it to be completely isolated.
###### I ended up adding a new example in the app component.
- Make the menu close when an option is clicked and set the image #DONE 
- Set the data for the options correctly on the menu options #DONE 
[Mat menu context menu tutorial](https://marco.dev/angular-right-click-menu)



###### The menu was double rendering on the first right click. I set the opacity to be 0 initially and then the animation will transition it to 1. Using a state we keep track of the visibility
- angular animations on the view - add an animation to the opening of the menu - these can be defined in the animations property of the components #DONE 
- `AnimationBuilder` DI to closing the menu() #Removed
#### This proved to be more trouble that it is worth. Double clicks were closing the second menu together with the first.




## Review
- alternative way of triggering change 
- creating the `viewChild` `static: true` so that we can get the dropdown
- isolate and logic and function of the component
- central logic - container presentation pattern Smart component and dumb component
- Our context menu is the dumb component
- closing the subscription 
- For standalone use different arrays when importing modules from different sources
- create new folder for the `imagePath` and similar constants
- or an object with all required constants
- separate variables and `ViewChild`
- Either add a return or don't for all functions - don't be selective
- add a return type for the getter for the options and when getting any sort of data
- Always add spaces between different types of properties, decorators etc
- typescript types good pattern to use- related and x and y 
- `ngOnChanges` simple changes 
- What will trigger changes and will not - **interview question**
- DetectChanges vs `MarkForCheck` - mark will set the status of the `LView`
- detectChanges for instant changes, `markForCheck` when it is not so important and we want to catch the next cycle
- practice with input setters
- refresh property to trigger the change in the context dropdown class
- we set a timer inside the angular zone after leaving it where we set refresh to true, which will change the options
- `simpleChanges` vs setters
- When we have multiple dependencies on state, it is better to use state to keep track of all the values
- otherwise we have to check all previous values with the setters


## Class order
1. variables  
2. @Inputs  
3. @Outputs
4. @ViewChild  
5. constructor  
6. ngOnInit  
7. getters  
8. public functions  
9. private functions  
10. onDestroy


## Expansions
- keep the directive
- create a new directive to handle multi select to allow selecting options
- make them 2 independent directives
- option to track multiple options 
- nested options 
- hosted view

## Analog
`ngrx` - Read about it
angular meta framework analog
global state in an app
