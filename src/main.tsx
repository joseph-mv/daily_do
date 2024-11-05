// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { store } from "./redux/store.ts";
// import App from "./App.tsx";
// import { Provider } from "react-redux";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// );
import  { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

const Root = () => {
  const [reduxStore, setReduxStore] = useState(null);

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

ReactDOM.render(<Root />, document.getElementById('root'));
