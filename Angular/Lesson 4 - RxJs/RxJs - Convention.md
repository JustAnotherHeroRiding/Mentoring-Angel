

#### Always put $ at the end of observable variables `obs$`
pipe => tap(value=> console.log(value))
tap only check the value and does not propagate the change to the subscription
filter accepts a predicate - A function that will accept a value and returns a boolean
if filter returns false, the pipe stops the next subscription
use map to filter the data returned downwards
Map transforms the value depending on our check
i.e return only clean water from an array
map accepts a function, it must take a value and return a value
`array.map((value)=> value)`
Functional interface - Name in java for this sort of function
Consumer - accepts a value and does not return a value
Supplier - Will only return a value without returning anything
Difference between subject and obv - with a subjsect we decide when the value is emited
`_subject$ __subject or subject$$ convention for rxjs subjects`
connection between two independent components - shared service with public subject
one component subscribes, the other triggers the emit
Behaviour subject - always has an initial value that will be emited
ReplaySubject, will emit the last value. We can set the number of values that will be emited as soon as a component subscribes to the ReplaySubject
all loading spinners should use a behaviour subject. Initial value is true, set to false once the data is fetched
when calling pipe() on a subject, it will return an observable
otherwise it will return just the subject
or a subscription 
zip operator - will wait for all values to be emited before proceeding to the subscription
map and tap rxjs operators order - what will be displayed in which order
combineLatest
MergeMap inside of a delivery pipe
when clicking the button we start listening to the product creation
SwitchMap will destroy the first order when a new one is made
MergeMap will keep listening to all orders being 



