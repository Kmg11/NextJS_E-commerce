import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		productsIds: {}, // Help checking if the product is already in the cart or no
		totalPrice: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			const product = action.payload;

			state.products.push({ ...product, quantity: 1 });
			state.productsIds[product.id] = true;
			state.totalPrice += +product.price;
		},

		removeProduct: (state, action) => {
			const product = action.payload;
			const productIndex = state.products.findIndex((p) => p.id === product.id);

			state.products.splice(productIndex, 1);
			delete state.productsIds[product.id];
			state.totalPrice -= +product.price;
		},

		clearCart: (state) => {
			state.products = [];
			state.productsIds = {};
			state.totalPrice = 0;
		},
	},
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
