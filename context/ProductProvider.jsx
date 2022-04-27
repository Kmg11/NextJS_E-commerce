import { createContext, useContext } from "react";

const ProductContext = createContext({});

export function ProductProvider({ value, children }) {
	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export function useProductContext() {
	return useContext(ProductContext);
}
