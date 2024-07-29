import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { coffeApi} from "./api/api";
const store = configureStore({
  reducer: {
    [coffeApi.reducerPath]: coffeApi.reducer,
  },
  //devTools: false,
  middleware: (getDefaultMiddleware) => {
    const middleware = [...getDefaultMiddleware(), coffeApi.middleware];
    return middleware;
  },
});

export default store;
