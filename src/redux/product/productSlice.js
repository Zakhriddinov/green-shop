import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../axios';

const initialState = {
   products: [],
   product: {},
   loading: false,
   error: null,
   isError: ""
}
export const getProduct = createAsyncThunk(
   'product/details',
   async (id) => {
      const response = await instance.get(`/products/get-one/${id}`)
      return response.data
   }
)

const productSlice = createSlice({
   name: "product",
   initialState,
   reducers: {
      getProducts: state => {
         state.loading = true
      },
      getProductsSuccess: (state, { payload }) => {
         state.products = payload;
         state.loading = false;
         state.isError = false
      },
      getProductsFail: (state, { payload }) => {
         state.isError = true;
         state.error = payload
      }
   },
   extraReducers: builder => {
      builder
         .addCase(getProduct.pending, state => {
            state.loading = true
         })
         .addCase(getProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.product = payload
            state.isError = false
         })
         .addCase(getProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.isError = true
            state.error = payload
         })
   }
})
export const { getProducts, getProductsSuccess, getProductsFail } = productSlice.actions
export default productSlice.reducer

export function fetchProducts(search) {
   return async (dispatch) => {
      dispatch(getProducts());
      try {
         const response = await instance.get(`/products${search}`)
         dispatch(getProductsSuccess(response.data))
      } catch (error) {
         dispatch(getProductsFail(error))
      }
   }
}
