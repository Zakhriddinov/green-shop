import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios";

const initialState = {
   category: [],
   loading: false,
   status: "",
   error: ""
}

export const getCategory = createAsyncThunk(
   'category/getAll',
   async () => {
      const response = await instance.get(`/categories`).then(res => res.data)
      return response
   }
)

const categorySlice = createSlice({
   name: "category",
   initialState,
   extraReducers: builder => {
      builder
         .addCase(getCategory.pending, (state) => {
            state.loading = true
            state.status = "pending"
         })
         .addCase(getCategory.fulfilled, (state, { payload }) => {
            state.loading = false
            state.status = "fulfilled"
            state.category = payload
         })
         .addCase(getCategory.rejected, (state, { payload }) => {
            state.loading = false
            state.status = "rejected"
            state.error = payload
         })
   }
})

export default categorySlice.reducer