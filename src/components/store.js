import { configureStore } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";


const store = configureStore({
  reducer: {
    markdownText: kardownTextReducer,
  }
});
export default store