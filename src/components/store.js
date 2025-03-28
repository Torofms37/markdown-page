import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./markdownSlice";


const store = configureStore({
  reducer: {
    text: textSlice,
  }
});
export default store