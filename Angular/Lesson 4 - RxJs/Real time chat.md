### Design Document: Food Ordering and Chat Application



## SwitchMap use case- Wait for the add to cart to finish before firing off again #DONE 

#### Overview

The application allows users to order food from a menu and engage in chat rooms while waiting for their order. It will have real-time updates for order status and chat messages.

Food ingredients will be randomly generated while users wait for their order to be finished.

#### Key Features

1. **Food Menu and Ordering System** #DONE 
2. **Real-Time Order Tracking**
3. **Chat Rooms for Waiting Customers**
4. **User Account Management**
5. **Notifications and Alerts**

#### RxJS Usage in Application Architecture

1. **Food Menu and Ordering System**
    
    - **`HttpClient` with `switchMap`**: Fetch and display food items from a backend service. Use `switchMap` to cancel previous requests when a new one is made (e.g., changing menu categories). #DONE 
    - **`BehaviorSubject`**: Hold the current state of the shopping cart, allowing various components (like cart summary, item count) to reactively update. #DONE 
    - **`tap`**: For side effects like logging, analytics tracking upon adding/removing items from the cart. #DONE 
2. **Real-Time Order Tracking**
    
    - **`WebSocketSubject` or similar**: Establish a WebSocket connection for real-time updates on order status. #DONE 
    - **`mergeMap` or `concatMap`**: Handle order status updates, ensuring the order of events is maintained (e.g., 'preparing' -> 'ready for pickup'). #DONE 
    - **`ReplaySubject`**: Cache the latest status of an order for quick access when switching between app views. #DONE 
3. **Chat Rooms for Waiting Customers**
    
    - **`combineLatest`**: Combine chat messages stream with user data (like profiles) to display enriched message information.
    - **`debounceTime` or `throttleTime`**: Manage user input for real-time features like 'typing...' indicators.
    - **`catchError` and `retry`**: Implement error handling for chat connectivity issues, with retry logic for re-establishing connections.
4. **User Account Management**
    
    - **`BehaviorSubject`**: Maintain the current user session state, updating reactively across the app (e.g., login/logout status).
    - **`switchMap`**: Use for user authentication flows, where one asynchronous operation (like login) leads to another (fetching user profile).
5. **Notifications and Alerts**
    
    - **`tap`**: Used for triggering alerts or notifications based on specific events like new chat messages, order status changes, or promotions.
    - **`filter`**: Filter notification streams to display relevant alerts to users (e.g., filter by user preferences or notification settings).

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