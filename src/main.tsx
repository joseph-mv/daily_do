
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import  { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import { createRoot } from "react-dom/client";
import { EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction } from "@reduxjs/toolkit";
import { InitialState } from "./redux/reducers/type";

type StoreInstance= EnhancedStore<InitialState, UnknownAction, Tuple<[StoreEnhancer<{
  dispatch: ThunkDispatch<InitialState, undefined, UnknownAction>;
}>, StoreEnhancer]>>
export const Root = () => {
  const [reduxStore, setReduxStore] = useState<StoreInstance|null>(null);

  useEffect(() => {
    const initialize = async () => {
      const storeInstance = await store;
     
      setReduxStore(storeInstance);
    };

    initialize();
  }, []);

  if (!reduxStore) {
    return <div>Loading...</div>; // You can render a loader here
  }

  return (
    <Provider store={reduxStore}>
      <App />
    </Provider>
  );
};


createRoot(document.getElementById("root")!).render(
  <Root/>
);