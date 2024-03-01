import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
  },
});

export default store;
