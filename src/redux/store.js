import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import cartReducer from './cart/cartSlice';
import categoryReducer from './category/categorySlice';
import productReducer from './product/productSlice';
import reviewReducer from './writeReview/writeSlice';
import adminUserReducer from './admin/adminUserSlice';
import adminProductReducer from './admin/adminProductSlice';

export default configureStore({
   reducer: {
      products: productReducer,
      categories: categoryReducer,
      auth: authReducer,
      review: reviewReducer,
      cart: cartReducer,
      adminUser: adminUserReducer,
      adminProducts: adminProductReducer
   }
})