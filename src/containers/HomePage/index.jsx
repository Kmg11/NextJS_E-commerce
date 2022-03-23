import { useAxios } from "hooks";
import { API } from "constants";
import { Products } from "./Products";

export function HomePage() {
	const { response } = useAxios(`${API}/products`);

	return response && <Products response={response} />;
}
