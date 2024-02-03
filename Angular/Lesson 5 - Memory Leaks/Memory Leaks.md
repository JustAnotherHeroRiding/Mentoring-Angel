When navigating from one component to another watch out for memory leaks
Unsubscribe from all active subs when the component is destroyed
These can be:
- subscription to shared service
- form control values
- Active subscriptions required in that component

### HostListener

This can be used to monitor events only inside of the component, which will automatically stop listening once the component is destroyed.


## How to unsub the correct way
- Create a destroy subject with type void
- takeUntil in the pipe of the initial subscription
- in the onDestroy lifecycle hook, we call next on the destroy subject, passing a value to the subject and stopping the subscription
- takeWhile will allow the subscription while a certain condition is fulfilled
- use takeWhile to reactivate the subscription once it has stopped once


- fromEvent will listen to all events on document #RxJs
- HostListener will be functional only within the component #Angular



## Targeting elements

Sometimes we need to target specific elements inside of the view of a component, when more dynamic rendering is needed than a simple `*ngIf ` check

- using viewChild with the #id on the element, we can create a property inside of the component and then manipulate that element using the ref
- element ref dependency from angular


## ViewContainer 

This is an api for creating components in the view
- Every component has just one view ref 
- The ng-template that we add inside of the component will be created outside of the component when we use createEmbeddedView(ref) inside of the component with the ng-template
- Angular uses a comment to mark the end of the `app-component` element, and will create the ng-template below it


## Route Guard

Can be used to protect routes using our logic, making sure that the component rendered on that route is only shown when route guard returns true

- We can pass state from the route guard
- getNavigationState will return the props passed by our route guard


## New implementation of route guard
- custom canActivateChild function
- It can return an Observable, Promise or Boolean
- injecting a service within the custom route guard function
- We can also use inject(service) to inject the service as a property of the class instead of injecting it in the constructor


## Can Deactivate
- Can deactivate route


## Practice with routes
- Implement an auth guard using the new method with an implicit function #DONE 
- Pass the session from the guard



## Can deactivate
- passing a flag to mark a route as public that would otherwise be protected
- this is done in the routing module
- Use a shared interface for each component where we want to do the check on whether we deactivate
- Make all component where the logic is needed implement it
- We have to implement the function in the component where this is needed
- We can check for unsaved changes for example to see if we should let the user navigate to another page or warn them to save before proceeding


