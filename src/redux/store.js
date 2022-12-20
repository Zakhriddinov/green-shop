import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import categoryReducer from './category/categorySlice';
import productReducer from './product/productSlice';

export default configureStore({
   reducer: {
      products: productReducer,
      categories: categoryReducer,
      auth: authReducer
   }
})