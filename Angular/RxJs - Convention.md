
## Variable naming convention
- #### Always put $ at the end of observable variables `obs$`
- `_subject$` __subject or `subject$$` convention for rxjs subjects

## Function Types
- Functional interface - Name in java for this sort of function, that must return a value
- Consumer - accepts a value and does not return a value
- Supplier - Will only return a value without any parameters
- Filter accepts a predicate - A function that will accept a value and returns a boolean

## Pipe

- A pipe allows us to transform the data before returning it. Each function accepts a value and passes it down to the next function, so the data flows down as water in a pipe
- `pipe => tap(value=> console.log(value))`
- tap only check the value and does not propagate the change to the subscription
- if filter returns false, the pipe stops the next subscription
- use map to filter the data returned downwards. Similar to the array method `map` it will loop over the data and return a new array depending on our condition
- Map transforms the value depending on our check i.e. return only clean water from an array `["clean water", "dirty water", "river water", "clean water"]`
- map accepts a function, it must take a value and return a value `array.map((value)=> value)` This is a Function in Java


## Subject and Observables
- Difference between subject and observable - with a subject we decide when the value is emited
- This is done by calling the next method of the subject `subject.next("value")`
- This is useful when a connection between two independent components is needed - shared service with public subject
- one component subscribes, the other triggers the emit
- Behaviour subject - always has an initial value that will be emited on initialization
- ReplaySubject, will emit the last value. We can set the number of values that will be emited as soon as a component subscribes to the ReplaySubject
- All loading spinner boolean checks should use a behaviour subject. Initial value is true, set to false once the data is fetched
- When calling pipe() on a subject, it will return an observable 
- Otherwise it will return just the subject(If Pipe was not called)
- Or a subscription 


## RxJs Operators

- zip operator - will wait for all values to be emited before  proceeding to the subscription
- map and tap RxJs operators order - what will be displayed in which order
- combineLatest - This will only take the latest emited various and does not care about the previous values. This can be useful when having a profile page where we only want the latest data and not all previous profile pictures
- MergeMap inside of a delivery pipe
- When clicking the button we start listening to the product creation
- SwitchMap will destroy the first order when a new one is made
- MergeMap will keep listening to all orders being made


SwitchMap It will only send the latest click to the server

ExhaustMap It will respect the delay and will not send a request if the current one is pending

ConcatMap It will create a queue of requests and fire them off one at a time

MergeMap  It will send all requests



## Custom RxJs operators

- MonotypeOperatorFunction - Useful for custom operators. This is a function type that will accept one type and return the same type at the end. Used with `<T>` to accept multiple types. 
- Nesting parameters - After creating an order, we can add a pipe on the createPayment observable with a switch map that will only fire off the last payment request and wait until it is successful until the order is created 

## Ng template
- Creates a comment to locate where the elements should be added
- Same for directives such as ngIf and NgFor
- Ng container does not create an element
- Ng template must have a condition to work i.e. ngIf
- It will not render if there is no condition, a div can be used instead
- Ng template will not work with ngSwitch. It is a conditional element
- Referencing an ng-template from another ng-template with ngTemplateOutlet = 'templateName'
- Or directly without the second ng-template
- ngContext to pass data from the template outlet to the template being rendered
- We can pass objects and then access them in the template that is located somewhere else
- Can be useful when we pass data to a container that has a required input
- Using `ViewChild` to access one of the ng-templates using their `#contentId`
- From here we can access the elementRef on the ngAfterViewInit lifecycle hook
- If we set static to true it will be available in ngOnInit as it will be prerendered
- In ViewChild we can select what we want to extract directly so that we do not have to access the elementRef every time manually







