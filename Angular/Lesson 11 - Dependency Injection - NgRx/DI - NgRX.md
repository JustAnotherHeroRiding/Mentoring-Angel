provided in root always mean app component
angular checks if the component has already been created when injecting
if it has, it just returns it
otherwise it creates and returns the component to maintain the single instance
if we do not instance the service somewhere, it will not initialized even if it is provided - this is done for optimization
angular checks from child to parent for an instance of the service
`NullInjectionError` 
instance of element injector is created for each component
module for each lazy loaded module and root module by default
ways of resolving the error
importing in providers array in root module
providers array of all imported modules(eagerly loaded modules)
services with `providedIn 'root'`
starts with element injector but goes to root
always starts from the bottom and goes upwards when checking for the dependency
be careful when creating services as two instances can be created

## Resolution Modifiers

`@SkipSelf` before the constructor injection to skip the current component when traversing the injector tree
`@Optional` - if there is an error when it does not have the service found- make it undefined
`@Self` - only check the current component for providers
`@Host` - Last stop where the injector stops looking for the provided dependency. item-a > item-child-a with the directive where the service is provided in item -a. If the directive has an injection with `@Host` it will stop looking at item-a and will not check the app component where these two components are used


## Injecting objects
- injecting our own legacy logger
- in the app module, for providers we create an object that is what is actually running in the background when importing a service
- Replacing a depedency in runtime by setting the class we want to use for the injection
- We can set the `useClass` value to the class and it does not need to be created beforehand
- We can use `useValue` to use an already created instance(object), which we can create by importing it beforehand in the providers array
- `Useexisting` - looks for an existing value 
- Creating an injection token for the app config
- using factory function of the injection token to give it a default value
- Can be used with material components such as material tabs
- we can provide a different config in the app module when importing 
- `useFavtory` takes a function that will create an object
- adding the Injector as a dependency when using services inside of the provider creating
- using injector.get to get the service
- very important to understand injection token

## Injection token exercise
- Two modules in one project
- allow the first module to have toast on the right
- the second should be on the left
- third module should have the toast config for the notification
- from this third module we export the config that can be changed by the first and second module
- `@Inject(TOKEN)` will be needed when importing these custom token configs in the component