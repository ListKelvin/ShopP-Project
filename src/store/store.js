import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combineReducers } from "redux";

// // import * as theme from "@/theme/theme";
// import { configureStore } from "@reduxjs/toolkit";

// // Define the Reducers that will always be present in the application
// // const staticReducers = {
// //   theme: theme.slice.reducer,
// //   home:
// // };

// const store = configureStore({
//   reducer: createReducer(),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         // Ignore these action types
//         ignoredActions: ["navBar/changeIsNavOpen", "home/changeCounter"],
//         // Ignore these field paths in all actions
//         // ignoredActionPaths: ["meta.arg", "payload.timestamp"],
//         // Ignore these paths in the state
//         // ignoredPaths: ["items.dates"],
//       },
//     }),
// });
const store = configureStore({
  reducer: createReducer(),
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// // Add a dictionary to keep track of the registered async reducers
store.asyncReducers = {};

// // Create an inject reducer function
// // This function adds the async reducer, and creates a new combined reducer
export const injectReducer = (key, asyncReducer) => {
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return asyncReducer;
};

function createReducer(asyncReducers = {}) {
  if (Object.keys(asyncReducers).length === 0) {
    return (state) => state;
  } else {
    return combineReducers({
      // ...staticReducers,
      ...asyncReducers,
    });
  }
}

export default store;
