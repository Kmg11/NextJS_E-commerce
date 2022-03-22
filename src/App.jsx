import { Route, Routes } from "react-router-dom";
import { ROUTES } from "constants";
import { CartPage, HomePage } from "containers";
import { Navbar } from "components";

export function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path={ROUTES.home} element={<HomePage />}>
					<Route path="/:page" element={<HomePage />} />
				</Route>
				<Route path={ROUTES.cart} element={<CartPage />} />
			</Routes>
		</>
	);
}
