import { useRef } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Model, Product } from "components";
import { variants } from "components/Product";
import { ROUTES } from "constants";
import { useClickOutside, useEsc } from "hooks";
import * as Styles from "./styles";

export function CartMenu({ isModelOpen, toggleModel }) {
	const { products, totalPrice } = useSelector((state) => state);
	const cartMenuRef = useRef(null);

	useEsc(() => toggleModel(false));
	useClickOutside(cartMenuRef, () => isModelOpen && toggleModel(false));

	const productsList = products.map((product) => (
		<Product key={product.id} data={product} variant={variants.small} />
	));

	return (
		<Model>
			<Styles.CartMenu $isModelOpen={isModelOpen} ref={cartMenuRef}>
				<Styles.Header>
					<Styles.MenuTitle>Cart</Styles.MenuTitle>
					<Styles.CloseButton onClick={() => toggleModel(false)}>
						&times;
					</Styles.CloseButton>
				</Styles.Header>

				{!products.length && (
					<Styles.EmptyMessage>Cart is empty</Styles.EmptyMessage>
				)}

				{!!products.length && (
					<>
						<Styles.ProductsList>{productsList}</Styles.ProductsList>
						<Styles.Total>Total price: EGP {totalPrice}</Styles.Total>

						<Styles.CheckoutButton
							as={Link}
							to={ROUTES.cart}
							onClick={() => toggleModel(false)}
						>
							Checkout
						</Styles.CheckoutButton>
					</>
				)}
			</Styles.CartMenu>
		</Model>
	);
}

CartMenu.propTypes = {
	isModelOpen: PropTypes.bool.isRequired,
	toggleModel: PropTypes.func.isRequired,
};
