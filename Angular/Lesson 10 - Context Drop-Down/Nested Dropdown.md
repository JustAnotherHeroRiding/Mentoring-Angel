
**Nested options**
The goal is for the context dropdown menu to have the option to display a submenu of new options
- hovering on an option should trigger the second menu #DONE 
- event listener for hover on each option #do 
- when the mouse leaves the original option or the new nested menu, it should close #DONE
- Get the position correct so that it is on the exact same row as the initial option #DONE 
- If we hover over two menus real quick, there the first menu will remain open
- Add a delay on the hover
- another check will be needed to see if we are out of bounds
- animation for the second menu that will open - use windows for inspiration
- clicking on a nested option will close the entire menu



Knowing which option has an option or not


## Improving the closeRef method nested dropdown
- If an option has no children, it should still close the other opened menu - for example salads does not close the opened menus #DONE 
- Improve selected option, stop clicks on options with children from closing the menu #DONE 
- The image and name should only be set in the main component when an option has no suboptions
- Add some delay between menu opening
- Pizza-pepperoni-3rd option - all of them should have a marker that they are opened
- Config options for the menu where users can decide color, icons 
- Handle out of bounds options
- Add selected option to add an image and text for the selected option
- Improve width and general look
- Think of how the UX can be improved - look at existing examples
- Truncate text if it is too long
- Add icons
- Round border top/bottom if the option is the first/last when hovered on
