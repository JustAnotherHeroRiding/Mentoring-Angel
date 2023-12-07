
# What The Key
- An app whose purpose to is provide an easy way to find the key of a song using the Spotify API
- This is helpful for anyone that wants to play along with the song and is not sure in which key the song is
- Apart from the key, information such as BPM, name of the artist, year, album and various other song metadata will be shown
- Users can save song information, edit it to add notes or tips when playing over it
- Maybe use the GPT api to provide the chord suggestions or playing information
- There should be a field where users can add their a tab link




## Also provide some sample chord progressions
- Let's try using the openai api to do this, after providing the song name, album, genre and other relevant song data besides the key and bpm


## fetch tracks and populate the card
- Input bar to search #DONE 
- If user is not typing for more than 300ms then the search will be triggered making a call to the spotify api #DONE  
- A list of tracks will be shown as search results after a debouncer function ticks down to 300ms #DONE 
- If a Track is clicked, it should open the details for the track #DONE 

## Loading spinner when searching
- Implement a loading spinner while the tracks are searching #DONE 

## Icons for Navbar and Buttons
- Use Dall-E to generate a logo #DONE
- Generate icons for the menu items #DONE 

## Route handling
- Make the navbar menu link to the pages of my site #DONE 
- Create separate components for each route #DONE 
- Home component for everything we have created so far #DONE 
- Library component for saved tracks #DONE 
- Deleted component for recently deleted tracks that can be restored or deleted permanently #DONE 
## Save tracks
- A user can save the tracks and it's information #DONE 
- Toast messages to give feedback when a message is added or has already been added #DONE 
- When navigating to the library section, all the saved tracks will be shown
- Here the user can search for the saved tracks
- Or use filters to display tracks according the characteristics in the audio features object
- A user can also add notes to each saved track
- Special field for the tab links to ultimate guitar or any other website
- Maybe even display a little preview of the tabs on hover
## Delete tracks
- Users can delete each of the saved tracks
- This will put them in the garbage
- Figure out how we can delete them after a certain time has passed
- Users can also delete them permanently if they wish
## Add custom description or notes to tracks


