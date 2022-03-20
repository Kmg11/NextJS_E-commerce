import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		test: (state) => {
			state.value--;
		},
	},
});

export const { test } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
