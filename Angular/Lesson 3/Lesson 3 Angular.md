
Recreate the routing using the forChild() router and creating separate module
Fix the error severing the connection once an api request fails
this means that once a request fails, the connection should remain active for new requests
Lazy Loading so that components only render when they are needed
once they are rendered they will not be rerendered, just like a normal component
async pipe in the data can call the subscribe method on an observable inside of the template
RxJs operators
Map
CatchError
MergeMap vs Switch map
SwitchMap will cancel all requests until the first request is finished
MergeMap will let all requests go through
ForkJoin will combine the last values emitted and return a single object 
Debounce will set a timer that will only allow requests to go through every x milliseconds
Ng content and passing elements into components
ViewContent decorator for properties in component classes
component lifecycle methods - Learn all of them
when is what being rendered inside of the component
provided in root for services, this means that the service is available globally in the app
if a service is only added to the imports array of the module, it will only be imported in that module
working with observables - using pipe to make the request and next to assign the data instead of making the request inside of the service


