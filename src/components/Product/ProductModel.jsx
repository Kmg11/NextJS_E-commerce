import { Model } from "components";
import { useEsc } from "hooks";
import { ProductProvider, useProductContext } from "context";
import {
	Name,
	Description,
	Price,
	Rating,
	CartButton,
	ImagesSlider,
} from "./Parts";
import { variants } from ".";
import * as Styles from "./styles";

export function ProductModel() {
	const productContextValue = useProductContext();
	const { handleToggleModel } = productContextValue.modelState;

	useEsc(() => handleToggleModel(false));

	const newProductContextValue = {
		...productContextValue,
		variant: variants.list,
	};

	return (
		<Model>
			<Styles.ProductModel>
				<ProductProvider value={newProductContextValue}>
					<Styles.ModelContent>
						<Styles.CloseButton onClick={() => handleToggleModel(false)}>
							&times;
						</Styles.CloseButton>

						<Styles.Fluid>
							<ImagesSlider />

							<Styles.Info>
								<Name />
								<Rating />
								<Description />
								<Price />
								<CartButton />
							</Styles.Info>
						</Styles.Fluid>
					</Styles.ModelContent>
				</ProductProvider>
			</Styles.ProductModel>
		</Model>
	);
}
