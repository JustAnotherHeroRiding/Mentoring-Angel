### Design Document: Food Ordering and Chat Application



## SwitchMap use case- Wait for the add to cart to finish before firing off again #DONE 

#### Overview

The application allows users to order food from a menu and engage in chat rooms while waiting for their order. It will have real-time updates for order status and chat messages.

Food ingredients will be randomly generated while users wait for their order to be finished.

#### Key Features

1. **Food Menu and Ordering System** #DONE 
2. **Real-Time Order Tracking** #DONE 
3. **Chat Rooms for Waiting Customers** #DONE 
4. **User Account Management** #DONE 
5. **Notifications and Alerts**

#### RxJS Usage in Application Architecture

1. **Food Menu and Ordering System**
    
    - **`HttpClient` with `switchMap`**: Fetch and display food items from a backend service. Use `switchMap` to cancel previous requests when a new one is made (e.g., changing menu categories). #DONE 
    - **`BehaviorSubject`**: Hold the current state of the shopping cart, allowing various components (like cart summary, item count) to reactively update. #DONE 
    - **`tap`**: For side effects like logging, analytics tracking upon adding/removing items from the cart. #DONE 
	- When trying to place orders for multiple items, if I click on one, then another switchMap will cancel the order but it will not set the loading state to false. #DONE 
1. **Real-Time Order Tracking**
    
    - **`WebSocketSubject` or similar**: Establish a WebSocket connection for real-time updates on order status. #DONE 
    - **`mergeMap` or `concatMap`**: Handle order status updates, ensuring the order of events is maintained (e.g., 'preparing' -> 'ready for pickup'). #DONE 
    - **`ReplaySubject`**: Cache the latest status of an order for quick access when switching between app views. #DONE 
3. **Chat Rooms for Waiting Customers**
	## Fun - Let's get this done
    - **`combineLatest`**: Combine chat messages stream with user data (like profiles) to display enriched message information. I can implement a user status tracker to display whether the sender is online or not. We can track this by checking if the user has the page open, but websockets will most likely be required #DONE 
    - **`debounceTime` or `throttleTime`**: Manage user input for real-time features like 'typing...' indicators. #DONE 
    - Loading spinner should only display above the messages themselves and not hide the already fetched messages.
    - **`catchError` and `retry`**: Implement error handling for chat connectivity issues, with retry logic for re-establishing connections.
4. **User Account Management**
    
    - **`BehaviorSubject`**: Maintain the current user session state, updating reactively across the app (e.g., login/logout status). #DONE 
    - `AuthGuard`: Implement a route auth guard using the modern method displayed in the previous lesson #DONE 
    - `is_online`: A bool field in the profiles table where we can table the user's online status #DONE 
    - Let's set the status to false when logging out and true when logging in  #DONE 
    - Profile pictures for images #DONE 
    - Add variable styles for the avatar to use a small profile pic for chat messages #DONE 
    - Display a green/red circle in the messages to see if a user is online #DONE 
    - Style the circle #DONE 
    - **`switchMap`**: Use for user authentication flows, where one asynchronous operation (like login) leads to another (fetching user profile).
5. **Notifications and Alerts**
    
    - **`tap`**: Used for triggering alerts or notifications based on specific events like new chat messages, order status changes, or promotions.
    - Send notification when a user goes offline
    - **`filter`**: Filter notification streams to display relevant alerts to users (e.g., filter by user preferences or notification settings).

##### Maybe the view container can be used for the notification themselves, including order status updates or when a user goes offline

6. **View Container API**
	- `createEmbededView` - Use this to create modals and toasts to display information, we can use this when no more chat messages can be fetched as we found all of them.
7. **Can Deactivate Route**
	- `CanDeactivateRoute` - Create a guard to stop users from leaving routes when they have unfinished input or changes. For example the profile or the chat pages #DONE 
	- Implement it for the profile


#### Technical Considerations

- Implement modular components for reusability and maintainability (e.g., MenuList, ChatWindow, OrderTracker).
- Use Angular services for business logic and data fetching, keeping components focused on presentation.
- Ensure effective error handling and loading states throughout the application.
- Prioritize responsive design for a seamless experience across devices.

#### Additional Enhancements

- Integrate with a payment gateway for processing food orders.
- Implement room-based chats where users can join different chat rooms based on interests or order types.
- Offer customization options for food orders, allowing users to add special instructions or select ingredients.

#### Conclusion

This design document outlines a robust architecture for a food ordering and chat application, leveraging RxJS to handle asynchronous data streams, state management, and real-time updates effectively. The use of RxJS operators and subjects will ensure that the application is responsive, user-friendly, and capable of handling complex real-time interactions.