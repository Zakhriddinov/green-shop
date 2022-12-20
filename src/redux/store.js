import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import categoryReducer from './category/categorySlice';
import productReducer from './product/productSlice';
import reviewReducer from './writeReview/writeSlice';

export default configureStore({
   reducer: {
      products: productReducer,
      categories: categoryReducer,
      auth: authReducer,
      review: reviewReducer
   }
})