
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
- exit without saving changes #DONE 

## Registration form
- Name, surname, username #DONE 
- checkbox - accept the rules before submit #DONE 
- radio button group - 3 options: basic, standard or premium #DONE 
- angular material for all components #DONE 
- create an interface mapped with correct values ready to be passed to an api #DONE 
- username must be only lowercase and no symbols #DONE 
- mail - must be valid #DONE 
- confirm email - check if the other mail is the same #DONE 
- password - 8 characters, symbol, one uppercase and number #DONE 
- switched confirm email validator to the field itself #DONE 
- Figure out how to bind the values of the 3 radio buttons for the payment tier #DONE 
- corrected the password validator #DONE 
- submit button that will show the values from the form before submitting #DONE 



## Custom form control
- Giving a rating from one to five in stars
- nice UI that is intuitive
- when i click on the 3rd star, the first 3 stars should be colored and etc
- it should be configurable from one form control
- key is rating, value is 1-5

#### Bonus
- Dynamic value, before defining we can set the max number of stars
- Can be shown after the registration with a successful submission
