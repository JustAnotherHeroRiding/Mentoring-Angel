
## Angular Project 1 **Personal Dashboard App** 
## Description:

- Build a customizable dashboard application where users can add, remove, and interact with various widgets like a weather report, a to-do list, and a news feed. 

## Instructions: **Part 1**
- Create a main dashboard component (DashboardComponent) that will serve as the container for the widgets. #DONE 
- Set up basic routing, if necessary, for navigation within the app.  #DONE 
	- Add an active class on the sidebar element of the current page
- Define the dashboard as a route in your routing configuration. This will be the central hub where users can add and interact with widgets.  #DONE 
- Create individual components for each widget (e.g., WeatherWidgetComponent, TodoListComponent, NewsFeedComponent).  #DONE 
- Create services for handling data for widgets that require external data (e.g., weather data, news articles).  #DONE 
- Implement mock services initially to provide dummy data for development.  #DONE 
- Child Routing for Widgets Implement child routes within the dashboard route for detailed views of each widget. #DONE  
- For instance, a detailed view of a to-do list or expanded weather information.  #DONE 
- Create services to get ex. weather data #DONE  
- Bonus: Integrate with [https://api-ninjas.com/api/weather](https://api-ninjas.com/api/weather "https://api-ninjas.com/api/weather")  #DONE  
- Bonus: Find a news api


###### Ova e part 1 ponataka ke se dvizime kon aplikacija koja ke kreira dynamic widgets, sekoj korisnik ke mozhe da si kreira kakov saka widget dinamicno, nema da hardkodirame, dynamic routing, drag and drop ke moze da se integrira so svoj api isto taka