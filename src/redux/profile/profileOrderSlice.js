import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axios";

const initialState = {
   orders: [],
   loading: false,
   status: "",
   isError: false,
   error: ""
}
const token = localStorage.getItem("access_token");
export const fetchOrders = createAsyncThunk(
   'order/getAll',
   async () => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         };
         const response = await instance.get(`/orders`, config)
         return response.data
      } catch (error) {
         console.log(error);
      }
   }
)
const orderSlice = createSlice({
   name: "order",
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(fetchOrders.pending, state => {
            state.loading = true
         })
         .addCase(fetchOrders.fulfilled, (state, { payload }) => {
            state.loading = false
            state.orders = payload
            state.status = "fulfilled"
         })
         .addCase(fetchOrders.rejected, (state, { payload }) => {
            state.loading = false
            state.status = "rejected"
            state.isError = true
            state.error = payload
         })
   }
})

export default orderSlice.reducer