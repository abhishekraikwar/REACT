import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartstate";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {  cart:cartslice.reducer ,ui: uiSlice.reducer },
});

export default store;
