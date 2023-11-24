import { configureStore } from "@reduxjs/toolkit";
import Slices from "./Slices";

const store = configureStore({
  reducer: {
    data: Slices.reducer,
  },
});

export default store;
