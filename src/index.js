import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import { fetchCategories } from "./slices/categoryReducer";
import { fetchProduct } from "./slices/productReducer";
import store from "./store/store";
import App from "./App";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
const root = ReactDOM.createRoot(document.getElementById("root"));
// let persistor = persistStore(store);
store.dispatch(fetchCategories());

store.dispatch(fetchProduct());
// <PersistGate loading={null} persistor={persistor}>
// </PersistGate>

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
