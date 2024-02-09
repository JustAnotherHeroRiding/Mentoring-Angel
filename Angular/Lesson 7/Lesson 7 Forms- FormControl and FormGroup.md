- Template driven and reactive forms
- Templates use `ngModel` and is the old fashioned way
- reactive forms are used together with rxjs
- Abstract control can be used to extend the form fields
- 4 types of abstract control
- form control ,form group, form array and form record
- we can add an initial value or set it to to null
- second param are the form control options
- if we use `validators.required`, we cannot submit empty values
- if we check ngIf `usernameControl.invalid`
- create a new directive to check if it s valid
- group component with a custom directive
- we can use regex to validate the input
- custom validators using the `validatorFn` type, in the background using `abstractControl`

## Task
Check if the username contain a number?
Throw an error that it should have at least one number if it does not


async validators- depends on some external call- Could be used for checking if a username is taken

- Form control fields - valid, invalid, errors, value
- Setting a field to disabled using .disable()
- default value, `rawValue` `patchValue`, `setValue`, reset()

## Reactive Forms
- Previously we only have a current snapshot of the forms
- we use reactive forms to listen to all changes
- we can use `formfield.valueChanges`
- always use takeUntil when using `ValueChanges` to end the subscription
- Listening to the changes on the username, using rxjs we can format the username and password
- updateValueAndValidity() to update the form control

## Form Group

- Create a registration form type of `FormGroup`
- `formGroup` on the form parent element
- we add `formControlName` on each input
- on submit = `this.form.getRawValue()` before sending the request
- we can add a new control to the form using `addControl`
- for loop over all controls of the group to add the new control when one is dynamically added, and render each of them automatically

## Todo list where we can add new tasks
- Each task is a new form control #DONE 
- with the help of form array - this is a type #DONE 
- they need to be dynamically created #DONE 
- a form array is added inside of the `formGroup`, that we can push or pop new controls into #DONE 
- when we loop over the `TaskArray` controls- must cast them as `FormControl` by using a getter method #DONE 
- Initially disabled #DONE 
- When i change a task, it should save #DONE 
- If i exit without saving, the field should revert #DONE 
- Delete #DONE 
- When i click edit, it will be enabled, the user can change the tasks #DONE 

#### Editing when leaving the field
- When i click on a disabled field, it should be enabled #DONE 
- When i leave the control it should be disabled again and save the changes This will be triggered on a click outside of the input #DONE 
##### Let's make it work using the .touched property
- every form control has a value `.touched` which says if a form control has been focused


