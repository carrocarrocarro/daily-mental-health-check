import { combineReducers, configureStore
 } from "@reduxjs/toolkit";
import navReducer from "./reducers/nav/navSlice"
import mentalHealthCheckReducer from "./reducers/mentalHealthCheck/mentalHealthCheckSlice"
/* import motivateReduer from "./reducers/motivate/motivateSlice" */
/* import mentalHealthCheckReducer from "./reducers/mentalHealthCheck/mentalHealthCheckSlice" */


const reducer = combineReducers({
  nav: navReducer,
  mentalCheck: mentalHealthCheckReducer,
  /* motivate: motivateReducer, */
  /* check: mentalHealthCheckReducer, */
});

export const store = configureStore({
  reducer: reducer
});