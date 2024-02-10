
Custom form controls can be created to define our behaviour whenever the control is created, edited or whatever other behaviour we require.
In the example we created a `formGroup` that will define three fields for the create task form.

These are the id, name and description of the task.
The object from these 3 fields that we get using `getRawValue()` can be used to create our own custom form control inside a component named `task`

In the child component we inject two services in the providers array, `ng_value_accessor` and `ng_validators` to help us write and validate the form data. This component will have a new `formGroup` that will once again contain three `formControls`

[Guide on creating custom forms](https://blog.angular-university.io/angular-custom-form-controls/)


## Parent Form Component - New task Form
- using `form.initForm` which is a private method to create the form
- this will use the form builder where we can create our form group that will be used
- two separate methods for better readability for creating the tasks and the add task form - will be removed as we create a separate component #OldWay
- creating an interface for the task and we create a new form control for each field - This will be the Task Interface
- We can pass the object `getRawValue()` into the form array for added tasks to push it's value. #OldWay


### Child component Form Control - The Task

- We start by providing `NG_VALUE_ACCESSOR` in the providers array
- This is a service provided by angular
- We implement **ControlValueAccessor** ``` Defines an interface that acts as a bridge between the Angular forms API and a native element in the DOM.Implement this interface to create a custom form control directive that integrates with Angular forms. ```
##### The following 4 methods are part of the **ControlValueAccessor** interface
- `writeValue` - write a value from an outside component ```
Writes a new value to the element. This method is called by the forms API to write to the view when programmatic changes from model to view are requeste ```

- `registerOnChange` - when the form value changes due  to input and will call a callback function.```Registers a callback function that is called when the control's value changes in the UI.This method is called by the forms API on initialization to update the form model when values propagate from the view to the model.```
- `registerOnTouched` - when the user interacts with the form. Starts as false and is turned to true globally once the user clicks on any of the form controls. ```When the user interacts with the form control Registers a callback function that is called by the forms API on initialization to update the form model on blur.```
- `setDisabledState` - Can be used to update the disabled state of the form control. ``` Function that is called by the forms API when the control status changes to or from 'DISABLED'. Depending on the status, it enables or disables the appropriate DOM element.```

## Passing the task data
- instead of using an @Input decorator, we pass the task to the task component by adding the `formControl` of the task of that iteration in the
 \***ngFor** Loop
- The value is updated and passed to the write changes method of the child task component
- We can use `patchValue` to pass the value of the  task object
- `writeValue` is called once on component init
- we cannot track changes using `ValueChanges` without additional setup
- This is when we use the **notify()** function that triggers the callback defined in the parent `ValueChanges` subscription
- we can call a notification function on each value change to inform the parent component
- using `registerOnTouched` - When the form is clicked even once, it will be registered as true forever

##### Angular adds classes to each element in the custom form element to track their state
- **ng-valid** **ng-touched** **ng-dirty** that track changes to the form and will dynamically update once the form has been changed or touched
- We can disable the form on init and enable it once the edit button is clicked
- If the Validator is set to disabled, we will make a function in the child component to set the group to disabled, thereby disabling all input fields of the task

## Validator interface
- New validator is required - **NG_VALIDATORS**
- this is registered automatically when the component is created and our custom validate function is called
- Following errors using the errors array of the group or separate form controls to display them in the template
- This means we can track all field to see if they are valid, which will make the group valid, while each input has their own criteria


## Rewrite Todo
Rewrite the todo app created previously using custom form controls and the task component as defined in the guide