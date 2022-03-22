import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		totalPrice: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			const product = action.payload;

			state.products.push({ ...product, quantity: 1 });
			state.totalPrice += +product.price;
		},

		removeProduct: (state, action) => {
			const product = action.payload;
			const productIndex = state.products.findIndex((p) => p.id === product.id);

			state.products.splice(productIndex, 1);
			state.totalPrice -= +product.price;
		},

		clearCart: (state) => {
			state.products = [];
			state.totalPrice = 0;
		},
	},
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
