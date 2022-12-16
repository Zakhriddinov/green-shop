import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../axios';

const initialState = {
   products: [],
   loading: false,
   status: "",
   error: ""
}

export const getProducts = createAsyncThunk(
   'product/getAll',
   async () => {
      const response = await instance.get(`/products`).then((res => res.data))
      return response
   }
)

const productSlice = createSlice({
   name: "product",
   initialState,
   extraReducers: builder => {
      builder
         .addCase(getProducts.pending, (state) => {
            state.loading = true
            state.status = "pending"
         })
         .addCase(getProducts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.status = "fulfilled"
            state.products = payload
         })
         .addCase(getProducts.rejected, (state, { payload }) => {
            state.loading = false
            state.status = "rejected"
            state.error = payload
         })
   }
})

export default productSlice.reducer