import { Route, Routes } from "react-router-dom";
import { ROUTES } from "constants";
import { CartPage, HomePage } from "containers";

export function App() {
	return (
		<Routes>
			<Route path={ROUTES.home} element={<HomePage />} />
			<Route path={ROUTES.cart} element={<CartPage />} />
		</Routes>
	);
}
