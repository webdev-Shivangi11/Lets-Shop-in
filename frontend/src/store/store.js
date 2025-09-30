import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import adminProductSlice from "./admin/productSlice"
import shopProductSlice from "./shop/shopProductSlice"


const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductSlice,
    shopProducts:shopProductSlice,

  },
});

export default store;