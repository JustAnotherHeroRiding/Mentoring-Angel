## Directives
- if we add the component name to an array, we can use it on an html element to inject it `<span myComponent></span`
  Non structural directives - they do not manipulate element visibility
  Structural directives manipulate the dom structure
  - How to create a directive
  - The custom directive is unique to each object
  - It will initiate only when it is used
  - `@Directive` decorator
  - the directive will get the `ElementRef` of the element that it is used on
  - We can then manipulate this element using it
  - This will be passed in the background when the directive is applied
  - Logical view and template view - class and the html template for each class
  - `ViewRef` is a combination of these 2 views
  - we can target the element we applied the directive on with `NativeElement` on the ElementRef
  - Renderer2 can be used to manipulate the element in a more modern way
  - We can use a `HostListener` in the custom directive to create an event listener to set the style of the element being hovered on
  - we will need both `mouseleave` and `mouseenter`
  - we can also make the directive accept arguments to pass a color
  - we can also output events from the directive to pass to the component


## Structural directives
- ngIf with then - else flow
- `set unless(val: bool) {}` - 2nd way of creating an input element
- directives check if the `ViewContainerRef` is being used and it will mark it as structural if it is present
- in structural directives we have a `TemplateRef` and not an `ElementRef` as we always use an `ng-template`
- The `TemplateRef` has an `ElementRef` inside of it
- `ViewContainerRef` will create the new element ng-template


## Forms Module
- Template driven forms and reactive driven forms
- Template forms do not use reactive logic to manipulate the form
- `FormControl` - api for tracking and controlling form values
- using `ngModel` to track the values
- modern way- using form control 
- typed and untyped form controls
- all form controls them inherit from `abstractControl` class
- async checks for each `formControl` value for example to see if a username is taken
- we get the value by `usernameControl.value`
