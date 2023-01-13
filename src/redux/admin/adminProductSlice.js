import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios";

const initialState = {
   products: [],
   loading: false,
   error: "",
   status: "",
   isError: false
}

const token = localStorage.getItem("access_token");

export const fetchProducts = createAsyncThunk(
   'product/getAll',
   async () => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         };
         const response = await instance.get(`/products/admin`, config)
         return response.data
      } catch (error) {
         console.log(error);
      }
   }
)

export const deleteProducts = createAsyncThunk(
   'product/delete',
   async (id) => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         };
         const response = await instance.delete(`/products/admin/${id}`, config)
         return response.data
      } catch (error) {
         console.log(error);
      }
   }
)

const productSlice = createSlice({
   name: "product",
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(fetchProducts.pending, state => {
            state.loading = true
         })
         .addCase(fetchProducts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.products = payload
            state.isError = false
         })
         .addCase(fetchProducts.rejected, (state, { payload }) => {
            state.loading = false
            state.isError = true
            state.error = payload
         })
         .addCase(deleteProducts.pending, state => {
            state.loading = true
         })
         .addCase(deleteProducts.fulfilled, (state) => {
            state.loading = false
            state.isError = false
         })
         .addCase(deleteProducts.rejected, (state, { payload }) => {
            state.loading = false
            state.isError = true
            state.error = payload
         })
   }
})

export default productSlice.reducer