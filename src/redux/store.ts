import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducers/todoReducer'
import { useDispatch } from "react-redux";
import { loadInitialState } from "../idb/indexedDB";


// export const store=configureStore({
//    reducer:{
//     todo:todoReducer
//    }
// })

const initializeStore = async () => {
   const preloadedState = await loadInitialState();
 
   const store = configureStore({
      reducer:{
         todo:todoReducer, 
        },
        preloadedState
    
   });
 
   return store;
 };
 export const store = initializeStore();
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();