
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
- The image and name should only be set in the main component when an option has no sub options #DONE 
- Added a type to each Option so that we know the type of food of each option, even if it is deeply nested #DONE 
- Add selected option to add an image and text for the selected option #DONE  
- Pizza-pepperoni-3rd option - all of them should have a marker that they are opened #DONE 
- Add some delay between menu opening #DONE 
- Make sure that only the last hovered element gets opened #DONE 
- Handle out of bounds options and correctly positioning #DONE 
##### We have a working version not all new menus are positioned the same as some are wider than others
- Provide a constant reposition with 4 pixels of space between the parent and child menus #DONE Ended up using a constant width for all options but this currently only works for the first level
- Add a depth level tracker to position the second level to the left as well #DONE 
- First first a real working calculation for going out of bounds on the right, as the x we get from the parent position is relative #DONE
##### This seems to be handled after using the absolute x position
- Handle cases where the nested menu goes out of bounds on the left #DONE 
- Bring back dynamic width for the context menus #DONE 
#### The dynamic width of the elements is making it inconsistent. Let's leave this for later and handle the y axis
- Handle cases where it goes out of bounds on the y axis #DONE 
- A nested option should display the entire tree of choices when selected #DONE 
- Round border top/bottom if the option is the first/last when hovered on #DONE 
- Add icons for each option #DONE 
- Truncate text if it is too long
- Config options for the menu where users can decide color, icons 
- Improve width and general look
- Think of how the UX can be improved - look at existing examples

