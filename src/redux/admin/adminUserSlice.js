import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios";


const initialState = {
   userData: [],
   loading: false,
   user: {},
   error: "",
   status: "",
   isError: false
}
const token = localStorage.getItem("access_token");
export const fetchUsers = createAsyncThunk(
   'user/getAll',
   async () => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         };
         const response = await instance.get(`/users/admin`, config)
         return response.data
      } catch (error) {
         console.log(error);
      }

   }
)
export const deleteUser = createAsyncThunk(
   'user/delete',
   async (id) => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         };
         const response = await instance.delete(`/users/admin/${id}`, config)
         return response.data
      } catch (error) {
         console.log(error);
      }
   }
)
export const editUser = createAsyncThunk(
   'user/edit',
   async (id) => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         };
         const response = await instance.put(`/users/admin/${id}`, config)
         return response.data
      } catch (error) {
         console.log(error);
      }
   }
)
const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(fetchUsers.pending, state => {
            state.loading = true
         })
         .addCase(fetchUsers.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userData = payload
            state.isError = false
         })
         .addCase(fetchUsers.rejected, (state, { payload }) => {
            state.loading = false
            state.isError = true
            state.error = payload
         })
         .addCase(deleteUser.pending, state => {
            state.loading = true
         })
         .addCase(deleteUser.fulfilled, (state) => {
            state.loading = false
            state.isError = false
         })
         .addCase(deleteUser.rejected, (state, { payload }) => {
            state.loading = false
            state.isError = true
            state.error = payload
         })
         .addCase(editUser.pending, state => {
            state.loading = true
         })
         .addCase(editUser.fulfilled, (state, { payload }) => {
            state.loading = false
            state.user = payload
            state.isError = false
         })
         .addCase(editUser.rejected, (state, { payload }) => {
            state.loading = false
            state.isError = true
            state.error = payload
         })
   }
})
export default userSlice.reducer