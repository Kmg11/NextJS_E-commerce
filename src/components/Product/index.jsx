import { ProductProvider } from "context";
import PropTypes from "prop-types";
import { Card } from "./Card";
import { List } from "./List";
import * as Styles from "./styles";

export const variants = { card: "card", list: "list" };

export function Product({ data, variant = variants.card }) {
	return (
		<Styles.Product variant={variant}>
			<ProductProvider value={{ data, variant }}>
				{variant === variants.card && <Card />}
				{variant === variants.list && <List />}
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
