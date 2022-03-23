import { Product, productVariants } from "components";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "store";
import { Grid } from "styles";
import * as Styles from "./styles";

export function CartPage() {
	const dispatch = useDispatch();
	const { products, totalPrice } = useSelector((state) => state);

	const productsList = products.map((product) => (
		<Product key={product.id} data={product} variant={productVariants.list} />
	));

	return (
		<Grid.Container>
			{!products.length && (
				<Styles.EmptyMessage>Cart is empty...</Styles.EmptyMessage>
			)}

			{!!products.length && (
				<>
					<Styles.Products>{productsList}</Styles.Products>

					<Styles.TotalPrice>Total price: EGP {totalPrice}</Styles.TotalPrice>

					<Styles.ClearCart onClick={() => dispatch(clearCart())}>
						Clear cart
					</Styles.ClearCart>
				</>
			)}
		</Grid.Container>
	);
}
