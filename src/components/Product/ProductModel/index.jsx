import { Model } from "components";
import { useEsc } from "hooks";
import { ProductProvider, useProductContext } from "context";
import { variants } from "..";
import { Fluid } from "../Layouts/Fluid";
import * as Styles from "./styles";

export function ProductModel() {
	const productContextValue = useProductContext();
	const { handleToggleModel } = productContextValue.modelState;

	useEsc(() => handleToggleModel(false));

	const newProductContextValue = {
		...productContextValue,
		variant: variants.fluid,
	};

	return (
		<Model>
			<Styles.ProductModel>
				<ProductProvider value={newProductContextValue}>
					<Styles.ModelContent>
						<Styles.CloseButton onClick={() => handleToggleModel(false)}>
							&times;
						</Styles.CloseButton>

						<Fluid />
					</Styles.ModelContent>
				</ProductProvider>
			</Styles.ProductModel>
		</Model>
	);
}
