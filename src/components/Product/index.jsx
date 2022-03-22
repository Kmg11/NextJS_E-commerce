import { useState } from "react";
import PropTypes from "prop-types";
import { ProductProvider } from "context";
import { useToggle } from "hooks";
import { Card } from "./Card";
import { List } from "./List";
import { ProductModel } from "./ProductModel";
import * as Styles from "./styles";

export const variants = { card: "card", list: "list" };

export function Product({ data, variant = variants.card }) {
	const [isProductInCart, setisProductInCart] = useState(false);
	const [isModelOpen, toggleModel] = useToggle(false);

	const handleToggleModel = (status) => {
		if (status) document.body.style.overflow = "hidden";
		if (!status) document.body.style.overflow = "auto";

		toggleModel(status);
	};

	const ProductContextValue = {
		data,
		variant,
		modelState: { isModelOpen, handleToggleModel },
		cartState: { isProductInCart, setisProductInCart },
	};

	return (
		<Styles.Product variant={variant}>
			<ProductProvider value={ProductContextValue}>
				{variant === variants.card && <Card />}
				{variant === variants.list && <List />}
				{isModelOpen && <ProductModel />}
			</ProductProvider>
		</Styles.Product>
	);
}

Product.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		rate: PropTypes.string.isRequired,
		reviewsCount: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		featuredPhoto: PropTypes.string.isRequired,
		photos: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
};
