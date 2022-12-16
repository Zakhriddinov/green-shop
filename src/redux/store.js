import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import productReducer from './product/productSlice';

export default configureStore({
   reducer: {
      products: productReducer,
      categories: categoryReducer
   }
})