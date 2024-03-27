[Getting started](https://ngrx.io/guide/store)
State persists when changing pages
global state is only destroyed on a hard refresh


## Why use NgRx Store for State Management?

NgRx Store provides state management for creating maintainable, explicit applications through the use of single state and actions in order to express state changes. In cases where you don't need a global, application-wide solution to manage state, consider using [NgRx ComponentStore](https://ngrx.io/guide/component-store) which provides a solution for local state management.

## When Should I Use NgRx Store for State Management?

In particular, you might use NgRx when you build an application with a lot of user interactions and multiple data sources, or when managing state in services are no longer sufficient.

## Key concepts

- [Actions](https://ngrx.io/guide/store/actions) describe unique events that are dispatched from components and services.
- State changes are handled by pure functions called [reducers](https://ngrx.io/guide/store/reducers) that take the current state and the latest action to compute a new state.
- [Selectors](https://ngrx.io/guide/store/selectors) are pure functions used to select, derive and compose pieces of state.
- State is accessed with the `[Store](https://ngrx.io/api/store/Store)`, an observable of state and an observer of actions.


## Local state management

NgRx Store is mainly for managing global state across an entire application. In cases where you need to manage temporary or local component state, consider using [NgRx ComponentStore](https://ngrx.io/guide/component-store).

<img src='https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png'>


**Note:** All `[Actions](https://ngrx.io/api/effects/Actions)` that are dispatched within an application state are always first processed by the `Reducers` before being handled by the `Effects` of the application state.



What is spring boot
what is gradle and what is maven
JVM
java tutorial - amigoscode from 42nd min creating variables until the end
after we begin together
