Create a payment provider app where users can track their expenses and get spending stats but also make purchases with it such as Paypal
Backend with Spring Boot and Front end with Angular
Try to implement as much back end logic as possible
Allow users to send eachother money
Keep a ledger of all transactions in the database
Query these transactions by user id to display the correct transactions


## Linking the Front End
- Allow the angular locally hosted app to make calls from the backend

## Define the entities
- We will need users and transactions connected to these users #Done 
- Each transaction will have a Category, amount, currency, date, sender and receiver id #Done 

## Connect to a database
It seems to be very hard to connect to a `sqlite` db
Let's use mysql instead by following this [guide](https://medium.com/@khairmuhammadmemon/spring-boot-data-access-with-spring-data-jpa-and-mysql-afe90e28b05d)
