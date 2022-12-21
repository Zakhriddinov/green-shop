import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios";

const initialState = {
   loading: false,
   status: false,
   isError: false,
   error: ""
}

export const registerUserThunk = createAsyncThunk(
   'auth/register',
   async (body, thunkAPI) => {
      try {
         return await instance.post("/users/register", body).then((res) => {
            if (res.data) {
               localStorage.setItem("access_token", `Bearer ${res.data.token}`)
            }
         })
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

export const loginUserThunk = createAsyncThunk(
   "auth/login",
   async (body, thunkAPI) => {
      try {
         return await instance.post('/users/login', body).then((res) => {
            if (res.data) {
               localStorage.setItem("access_token", `${res.data.token}`)
            }
         })
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

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducer: {
      logoutUser: (state) => {
         state.isAuthenticed = true
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(registerUserThunk.pending, (state) => {
            state.loading = true;
            state.status = "pending";
         })
         .addCase(registerUserThunk.fulfilled, (state) => {
            state.loading = false;
            state.status = "fulfilled";
            state.isError = false;
         })
         .addCase(registerUserThunk.rejected, (state, { payload }) => {
            state.loading = false;
            state.status = "rejected";
            state.isError = true;
            state.error = payload
         })
         .addCase(loginUserThunk.pending, (state) => {
            state.loading = true;
            state.status = "pending";
         })
         .addCase(loginUserThunk.fulfilled, (state) => {
            state.loading = false;
            state.status = "fulfilled";
            state.isError = false;
         })
         .addCase(loginUserThunk.rejected, (state, { payload }) => {
            state.loading = false;
            state.status = "rejected";
            state.isError = true;
            state.error = payload
         })
   }
})

export default authSlice.reducer