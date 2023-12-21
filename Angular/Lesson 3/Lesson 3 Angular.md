
## Lazy Loading

- Lazy Loading so that components only render when they are needed
- Once they are rendered they will not be rerendered, just like a normal component
## Task
- Fix the error severing the connection once an api request fails
- This means that once a request fails, the connection should remain active for new requests
- There is most likely another RxJs operator for this task
- Recreate the routing using the forChild() router and creating separate module

## Async Pipe
- async pipe in the data can call the subscribe method on an observable inside of the template
## [RxJs operators]([https://www.learnrxjs.io/learn-rxjs/operators](https://www.learnrxjs.io/learn-rxjs/operators "https://www.learnrxjs.io/learn-rxjs/operators"))
- Map
- CatchError
- MergeMap vs Switch map
- SwitchMap will cancel all requests until the first request is finished
- MergeMap will let all requests go through
- ForkJoin will combine the last values emitted and return a single object 
- Debounce will set a timer that will only allow requests to go  through every x milliseconds
## Content Children
- Ng content and passing elements into components
- @ContentChild decorator for properties in component classes where a html tag was passed and to be used in an ng content

## Component lifecycle methods - Learn all of them
- When is what being rendered inside of the component
1. **ngOnChanges**
    - Executed right at the start when new component is created and then every time a bound input property value changes from parent component. 
2. **ngOnInit**
    - Called once the component is initialized. Angular has finished the basic initialization of the component, it does not mean that it was rendered on the DOM.
3. **ngDoCheck** 
    - Called during every change detection run. Change detection is the system where angular decides whenever something changes on the template on the component or inside the component, and it needs to change something in the template, needs to rerender that part of the template. Sometimes it will run when nothing is changed at all, meaning this cycle runs on every event that is triggered, a button click, input fields. This lifecycle works great and it does not cost a lot of performance.
4. **ngAfterContentInit**
	- Called after content (ng-content) has been projected into view. (see ng-content section).
5. **ngAfterContentChecked**
	- Called every time the projected content has been checked.
6. **ngAfterViewInit**
    - Called after the component’s view (and child views) has been initialized
7. **ngAfterViewChecked**
	- Called every time the view (and child views) has been checked.
8. **ngOnDestroy**
    - Called once the component is about to be destroyed.

## Order of lifecycle functions 


1. (constructor called)
2. ngOnChanges gets called
3. ngOnInit gets called
4. ngDoCheck gets called
5. ngAfterContentInit gets called 
6. ngAfterContentChecked gets called 
7. ngAfterViewInit called  
8. ngAfterViewChecked called

## Difference between Content and View

The distinction between "content" and "view" in these hooks is important:

- **Content (`ng-content`)**: Refers to any external content that is projected into the component from its parent. For example, any HTML or components that are placed inside the component's `<ng-content>` tags in the parent component. 
- **View**: Refers to the component's own template (defined in its HTML file) and the views of its child components.

## Services Best practices
- Provided in root for services, this means that the service is available globally in the app. This is the default behavior when a service is created using ng g s Service
- If a service is only added to the imports array of the module, it will only be imported in that module

- Working with observables - using pipe to make the request and next to assign the data instead of making the request inside of the service

## Directives in Angular
In Angular, a directive is a class marked by the `@Directive` decorator. Directives are used to add behavior to elements in the application's DOM (Document Object Model). There are three kinds of directives in Angular:

1. **Components**:
    
    - These are directives with a template. They are the most common directive type you'll work with in Angular.
    - A component manages a section of the page and its view, defined by an HTML template.
    - Components are marked with the `@Component` decorator, which extends the `@Directive` decorator with template-oriented features.
2. **Structural Directives**:
    
    - These directives change the structure of the DOM by adding, removing, or manipulating elements and their children.
    - Common examples include `*ngIf` for conditionally adding or removing an element and `*ngFor` for creating a list of elements based on an array.
    - The asterisk (`*`) syntax is a syntactic sugar for a more complex HTML structure involving an `<ng-template>`.
3. **Attribute Directives**:
    
    - These directives change the appearance or behavior of an element, component, or another directive.
    - They are used as attributes of elements.
    - Examples include `ngClass` and `ngStyle`, which allow you to dynamically add CSS classes and styles to elements.

