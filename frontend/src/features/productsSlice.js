import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    items: [],
    status: null,
}

//Action Creator, makes used of createAsyncThunk--can accept 3 params: action-type, payload creator (funtion), options
export const productsFetch = createAsyncThunk(
    //1st
    "products/productsFetch",
    //2nd
    async () => {
        const response = await axios.get("http://localhost:5000/products")
        return response?.data;
    }
)


// "slice" is like container for reducers and actions pertaining to one feature
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
    // BELOW NOT NEEDED WHEN USING RTK QUERY
    // extraReducers: {
    //     [productsFetch.pending]: (state, action) => {
    //         state.status = 'pending'
    //     },
    //     [productsFetch.fulfilled]: (state, action) => {
    //         state.status = 'success'
    //         state.items = action.payload
    //     },
    //     [productsFetch.rejected]: (state, action) => {
    //         state.status = 'rejected'
    //     }
    // }
})

export default productSlice.reducer