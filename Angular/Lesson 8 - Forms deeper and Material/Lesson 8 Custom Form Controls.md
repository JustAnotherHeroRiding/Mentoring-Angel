
Custom form controls can be created to define our behaviour whenever the control is created, edited or whatever other behaviour we require.
In the example we created a formGroup that will define three fields for the create task form.

These are the id, name and description of the task.
The object from these 3 fields that we get using `getRawValue()` can be used to create our own custom form control inside a component named `task`

In the child component we inject two services in the providers array, `ng_value_accessor` and `ng_validators` to help us write and validate the form data. This component will have a new formGroup that will once again contain three formControls



using form.initForm which is a private method to create the form
this will use the form builder where we can create our form group that will be used
two separate methods for better readability
creating an interface for the task and we create a new form control for each field
passing the object getRawValue() into the form array for added tasks


### Making a component be a form control

providing ng_value_accessor
DI into the level of the component
implents controlValueAccessor
writeValue - write a value from an outside component
registerOnChange - when the form value changes due to input and will call a callback function
registerOnTouched - When the user interacts with the form control
setDisabledState
instead of using an @input decorator, we pass the task to the task component and add the formControl of the task of that iteration
The value is update and passed to the write changes method of the child task component
We can task use patchValue to pass the value of the task object
writeValue is called once
we cannot track changes using ValueChange
this will be tracked by Valuechanges in the parent when we use the notify function this triggers the callback defined in the parent ValueChanges subscription
we can call a notification function on each value changes to inform the parent component
using registerOnTouched - When the form is clicked even once, it will be registered as true forever
ng-valid ng-touched ng-dirty that track changes to the form
we can disable the form on init and enable it once the edit button is clicked
if the validator is set to disabled, we will make a function in the child component to set the group to disabled

## Validator interface
- new validator is required - ng_validators
- this is registered automatically when the component is created and our custom validate function is called
- Following errors using the errors array of the group or separate form controls to display them in the template


## Rewrite Todo
Rewrite the todo app created previously using custom form controls and the task component as defined in the guide