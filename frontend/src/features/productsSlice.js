import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    status: null
}

// "slice" is like container for reducers and actions pertaining to one area
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
})

export default productSlice.reducer