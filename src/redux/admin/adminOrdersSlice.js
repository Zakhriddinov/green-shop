import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios";

const initialState = {
   orders: [],
   loading: false,
   isError: false,
   error: "",
   status: ""
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
         const response = await instance.get(`/orders/admin`, config)
         return response.data
      } catch (error) {
         console.log(error);
      }
   }
)

export const deleteOrder = createAsyncThunk(
   'order/delete',
   async (id) => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         };
         const response = await instance.delete(`/orders/admin/${id}`, config)
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
   extraReducers: (builder) => {
      builder
         .addCase(fetchOrders.pending, state => {
            state.loading = true
            state.status = "pending"
         })
         .addCase(fetchOrders.fulfilled, (state, { payload }) => {
            state.loading = false
            state.status = "fulfilled"
            state.orders = payload
         })
         .addCase(fetchOrders.rejected, (state, { payload }) => {
            state.loading = false
            state.isError = true
            state.error = payload
         })
         .addCase(deleteOrder.pending, state => {
            state.loading = true
            state.status = "pending"
         })
         .addCase(deleteOrder.fulfilled, (state) => {
            state.loading = false
            state.status = "fulfilled"
         })
   }
})

export default orderSlice.reducer