// store.ts
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoReducer';
import { loadInitialState } from "../idb/indexedDB";
import { InitialState } from "./reducers/type";

// Function to initialize the store
const initializeStore = async () => {
  const preloadedState = await loadInitialState();

  const store = configureStore({
    reducer:  todoReducer,
    
   preloadedState
  });

  return store;
};

// Initialize the store and export it
export const store = initializeStore();


export type RootState = InitialState;
export type AppDispatch = ReturnType<typeof configureStore>['dispatch'];
