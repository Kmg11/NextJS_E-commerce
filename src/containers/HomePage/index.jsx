import { useAxios } from "hooks";
import { API } from "constants";
import { Product, productVariants } from "components";
import { Grid } from "styles";
import * as Styles from "./styles";

export function HomePage() {
	const { response } = useAxios(`${API}/products`);

	const productsList =
		response &&
		response.map((product) => (
			<Product key={product.id} data={product} variant={productVariants.card} />
		));

	return (
		<>
			<Grid.Container>
				<Styles.ProductsList>{productsList}</Styles.ProductsList>
			</Grid.Container>
		</>
	);
}
