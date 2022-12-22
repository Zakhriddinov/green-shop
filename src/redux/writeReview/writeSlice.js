import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios";

const initialState = {
   review: [],
   loading: false,
   status: "",
   isError: false,
   error: ""
}

const token = localStorage.getItem("access_token");
export const createReview = createAsyncThunk(
   'review/created',
   async (body, thunkAPI) => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         };
         const response = await instance.post(`/users/review/${body.id}`, config)
         return response.data
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString()
         return thunkAPI.rejectWithValue(message)
      }

   }
)
const reviewSlice = createSlice({
   name: "review",
   initialState,
   extraReducers: builder => {
      builder
         .addCase(createReview.pending, state => {
            state.loading = true
            state.status = "pending"
         })
         .addCase(createReview.fulfilled, (state, { payload }) => {
            state.loading = false
            state.review = payload
            state.status = "fulfilled"
            state.isError = false
         })
         .addCase(createReview.rejected, (state, { payload }) => {
            state.loading = false
            state.status = "rejected"
            state.isError = true
            state.error = payload
         })
   }
})
export default reviewSlice.reducer