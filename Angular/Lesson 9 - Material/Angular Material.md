
[Material Guide](https://v16.material.angular.io/)
Add with ng add angular@material
A library of UI components
themes can be customized
add material imports in a separate module
we import this module afterwards into the app module
theme needs to be imported in styled.css
we can also use icons
and icon buttons
the custom checkbox is a custom form control itself and we can bind to its element
we must use `ngModel` to change the data in both ways when using the components
we can use the `formBuilder` to build a form using the material components
we can bind the form control's (change) listener to access the entire component
or use a form group to create all subtasks as form controls with a `formControlName`


## Todo - Material
- Use material components for the todo app #DONE 
- exit without saving changes

## Registration form
- Name, surname, username
- username must be only lowercase
- no symbols
- mail - must be valid
- confirm email - check if the other mail is the same
- password - 8 characters, symbol, one uppercase
- checkbox - accept the rules before submit
- radio button group - 3 options: basic, standard or premium
- create an interface mapped with correct values ready to be passed to an api
- submit button that will show the values from the form before submitting
- angular material for all components


## Custom form control
- Giving a rating from one to five in stars
- nice ui that is intutitive
- when i click on the 3rd stars, the starts should be color
- it should be configurable from one form control
- key is rating, value is 1-5

#### Bonus
- Dynamic value, before defining we can set the max number of stars
- Can be shown after the registration
