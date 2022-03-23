import PropTypes from "prop-types";
import { ProductProvider } from "context";
import { useToggle } from "hooks";
import { Card, List, Small } from "./Layouts";
import { ProductModel } from "./ProductModel";
import * as Styles from "./styles";

export const variants = {
	card: "card",
	list: "list",
	fluid: "fluid",
	small: "small",
};

export function Product({ data, variant = variants.card }) {
	const [isModelOpen, toggleModel] = useToggle(false);

	const handleToggleModel = (status) => {
		if (status) document.body.style.overflow = "hidden";
		if (!status) document.body.style.overflow = "auto";

		toggleModel(status);
	};

	const productContextValue = {
		data,
		variant,
		modelState: { isModelOpen, handleToggleModel },
	};

	return (
		<Styles.Product variant={variant}>
			<ProductProvider value={productContextValue}>
				{variant === variants.card && <Card />}
				{variant === variants.list && <List />}
				{variant === variants.small && <Small />}
				{isModelOpen && <ProductModel />}
			</ProductProvider>
		</Styles.Product>
	);
}

Product.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		rate: PropTypes.string.isRequired,
		reviewsCount: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		featuredPhoto: PropTypes.string.isRequired,
		photos: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
};
