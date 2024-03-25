- Provided in root always means app component
- Angular checks if the component has already been created when injecting
- If it has, it just returns it
- Otherwise it creates and returns the component to maintain the single instance
- If we do not instance the service somewhere, it will not initialized even if it is provided - this is done for optimization
- Angular checks from child to parent for an instance of the  service
- `NullInjectionError` 
- Instance of element injector is created for each component
- Module for each lazy loaded module and root module by default
- Ways of resolving the error
- Importing in providers array in root module
- Providers array of all imported modules(eagerly loaded modules)
- Services with `providedIn 'root'`
- Starts with element injector but goes to root
- Always starts from the bottom and goes upwards when checking for the dependency
- Be careful when creating services as two instances can be created

## Resolution Modifiers

`@SkipSelf` before the constructor injection to skip the current component when traversing the injector tree
`@Optional` - if there is an error when it does not have the service found- make it undefined
`@Self` - only check the current component for providers
`@Host` - Last stop where the injector stops looking for the provided dependency. item-a > item-child-a with the directive where the service is provided in item -a. If the directive has an injection with `@Host` it will stop looking at item-a and will not check the app component where these two components are used


## Injecting objects
- Injecting our own legacy logger
- In the app module, for providers we create an object that is what is actually running in the background when importing a service
- Replacing a dependency in runtime by setting the class we want to use for the injection
- We can set the `useClass` value to the class and it does not need to be created beforehand
- We can use `useValue` to use an already created instance(object), which we can create by importing it beforehand in the providers array
- `Useexisting` - looks for an existing value 
- Creating an injection token for the app config
- using factory function of the injection token to give it a default value
- Can be used with material components such as material tabs
- We can provide a different config in the app module when importing 
- `useFavtory` takes a function that will create an object
- Adding the Injector as a dependency when using services inside of the provider creating
- Using `injector.get` to get the service
- Very important to understand injection token




[Configuring an Injection Token](https://medium.com/ngconf/configure-your-angular-apps-with-an-injection-token-be16eee59c40)
[DI in action](https://angular.io/guide/dependency-injection-in-action)
## Injection token exercise
- Two modules in one project #DONE 
- allow the first module to have toast on the right
- the second should be on the left
- third module should have the toast config for the notification
- from this third module we export the config that can be changed by the first and second module
- `@Inject(TOKEN)` will be needed when importing these custom token configs in the component