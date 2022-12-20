import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios";

const initialState = {
   review: {},
   loading: false,
   isError: false,
   error: ""
}

export const createReview = createAsyncThunk(
   'review/created',
   async (body, id, thunkAPI) => {
      try {
         const access_token = localStorage.getItem("access_token")
         const config = {
            headers: {
               Authorization: access_token
            }
         }
         const response = await instance.post(`/users/review/${id}`, body, config)
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
         })
         .addCase(createReview.fulfilled, (state, { payload }) => {
            state.loading = false
            state.review = payload
            state.isError = false
         })
         .addCase(createReview.rejected, (state, { payload }) => {
            state.loading = false
            state.isError = true
            state.error = payload
         })
   }
})
export default reviewSlice.reducer