import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios";

const initialState = {
   isAuthenticed: false,
   isAuthenticating: false,
   isError: false,
   error: null
}

export const registerUserThunk = createAsyncThunk(
   'auth/register',
   async (body) => {
      const response = await instance.post("/users/register", body).then((res) => {
         if (res.data) {
            localStorage.setItem("access_token", `Bearer ${res.data.token}`)
         }
      })
      return response.data
   }
)

export const loginUserThunk = createAsyncThunk(
   "auth/login",
   async (body) => {
      const response = await instance.post('/users/login', body).then((res) => {
         if (res.data) {
            localStorage.setItem("access_token", `Bearer ${res.data.token}`)
         }
      })
      return response.data
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
            state.isAuthenticating = true
         })
         .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
            state.isAuthenticating = false;
            state.isError = false;
            console.log(payload);
         })
         .addCase(registerUserThunk.rejected, (state) => {
            state.isAuthenticating = false;
            state.isError = true;
         })
         .addCase(loginUserThunk.pending, (state) => {
            state.isAuthenticed = true
         })
         .addCase(loginUserThunk.fulfilled, (state,) => {
            state.isAuthenticed = false;
            state.isError = false;
         })
         .addCase(loginUserThunk.rejected, (state) => {
            state.isAuthenticed = false;
            state.isError = true;
         })
   }
})

export default authSlice.reducer