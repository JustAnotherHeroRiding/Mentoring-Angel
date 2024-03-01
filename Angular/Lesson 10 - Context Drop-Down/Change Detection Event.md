
Code Splitting - we try to create different chunks(paths)
we lazy load all 3 paths this way and the LCP is smaller
multiple user flows into a feature 
Component instance code - add screenshot here
Loading -> Error Handling -> Cleanup
Remove component from imports array so that it can lazy loaded and removed from main.js


## defer block
we wrap the component into the defer block to avoid all the issues from before
`@defer (when isVisible)` to control when to fetch and display the component
`@placeholder` block to display until the component gets rendered
`@placeholder(minimum 500ms)` to prevent flickering and add a minimum duration that the placeholder will be shown
`@loading` block to display a loading state while the chunk is loading
`@loading (after 100ms; minimum 1s)` to display the spinner after 100ms and for at least 1second 
`@error` block to display an error message if something goes wrong during the fetch
`@defer(on idle)` to fetch and display on idle, which is an action we listen to, to display the content
`@defer(on imediate)` to fetch and display imediately 
`@defer(on interaction)` to fetch and display on an implicit interaction. On initial load we have the placeholder, and when the user interacts we will display the component
`@defer(on interaction(trigger)` - fetch and display on an explicit interaction like a button for example using an `#trigger` attribute
`@defer(on hover)` to fetch and display with a hover, otherwise a placeholder is shown
`@defer(on hover(trigger)` when the user hovers over the button with the `#trigger` attribute
`@defer(on viewport)` fetch and display implicitly 
`@defer(on viewport(trigger)` fetch and display explicitly whenever the trigger enters the viewport
`@defer(on timer(1000ms)` fetch and display after 1000ms

### What if the component is super heavy
- We will prefetch to improve the performance
- `@defer(on "action"; prefetch on "action")`
`@defer(on timer(1s); prefetch on immediate)` as an example
`@defer(on timer(1s); prefetch when isTrue)`


## CLS - Cumulative layout shift
- Use the defer block below the fold to avoid CLS
- using a placeholder with the same height as the actual component
- This will allow us to avoid the CLD


## Questions
- Do not replace all components with a defer block - Think before using it
- It is still not stable and subject change
- It will not replace all lazy loading as it is needed in routes
- Before we used a pipe to handle http requests - fetch, placeholder and loading, defer block will not replace handling http requests but only heavy components
- Could the defer block be replicated beforehand in previous versions of angular - We could use dynamic components to create multiple chunks


## Change detection
- What is change detection
- Process of change detectio
- History
- Explaining zones

## Intro
- A concept that everyone comes in touch with when working with angular
- Behind the scenes there are a lot of processes that are monkey patched
## What is change detection
- Process of the framework detecting changes and deciding what to do
- Either user action or real-action
- This can be a button event or a form being submitted or an http request
- If you are an owner of a shop you will get special offer. Every day you see what your ingredients are and update your menu
- While the user is interaction, angular needs to know when to update the DOM and which parts to render(whole tree or specific parts)
- Two ways that components exists
- The way we see them in our ts file
- And the optimized way that the browser sees them
- To the browser the template is a function
- Every angular component is a function in the background with two functions
- `renderFlag` with status 1 and 2
- We have creation mode and update mode
- In the context we have everything declared in the logical view of the component
- We have a logical view and template view - two types of views for each component
- Each component has an instance of the logical view
- The `componentview` and the embedded view are contained within the `viewRef` which has a host view inside it as well
- the view ref implements the change detector interface which has the methods to track the changes from this interface and how to implement those changes

## History
- In angular.js which is the predecessor, the change detection was done by running the `$digest` cycles that were done on specific events
- no way of knowing when it needed to be ran
- all of them were called manually
- This resulted in the entire tree being traversed and was bad for performance
- We do not want to refresh everything when something changes
- so that angular knows when to trigger change detection
- angular used ngzone which comes from zone.js
- this tells angular when an event happens and based on them refreshes the DOM


## Monkey patching
- This is when we have a reference to the original function before replacing it
- Every time we call our custom function, the change detection is ran

## Zones in Zone.js [Link](https://github.com/angular/zone.js)
- New mechanism that helps devs work with connected async events
- We associate each async operation with a zone
- we associate a specific part of our code within a zone, and we can run them within the same zone and intercept them
- Normally in JS two functions run in two different stack frames
- With zone.js we can connect these stack frames
- Microtask and Macrotasks - The first are executed after some point
- How do we intercept the setTimeout knowing that some event happened

## Zones in angular
- Only uses 2 zones
- Parent zone is outside angular and will not trigger change detection
- Inside zone will trigger change detection
- When we start the app, any change to the logical view or html view will propagate 
- By default ng runs in the inside zone and will run change detection that comes from view ref calling the `detectChanges` function
- `DetectChanges` calls `refreshView` which will call `renderflags.update` of the component
- When CD happens from a component, ng will take the child components and run it for all child components
- we can change the config in the main.ts by changing `ngZone` to `noop` to stop it
- Switching between zones by injecting ngZone in the constructor
- When we run the setTimeout now using ngZone.runOutsideAngular and we run the function outside ng, it will not trigger change detection
- When the change detection gets triggered later, the first change will also be shown
- We can use this to escape certain events that we do not want to trigger change detection


## On Push Change Detection
- Normally we trigger change events regardless of where the event happened
- We now have the `LView` with status
- if an `Lview.LviewFlags.dirty` is true, it will refresh that view and all parent views
- We change the `changedetection` to `changedetection.push` in the component definition in all of our components
- When we add this to all of our components, we will only refresh the components that contain the component
- When working with the onPush strategy to always work with immutable data
- When we can change the objects, must change the reference directly and not variable


## When not to use on push
- in components that make http calls often
- or in components that are getting passed mutable objects