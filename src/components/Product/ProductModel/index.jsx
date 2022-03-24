import { useRef } from "react";
import { Model } from "components";
import { useClickOutside, useEsc } from "hooks";
import { ProductProvider, useProductContext } from "context";
import { variants } from "..";
import { Fluid } from "../Variants/Fluid";
import * as Styles from "./styles";

export function ProductModel() {
	const prevProductContextValue = useProductContext();
	const { isModelOpen, handleToggleModel } = prevProductContextValue.modelState;
	const productModelRef = useRef(null);

	useEsc(() => handleToggleModel(false));
	useClickOutside(
		productModelRef,
		() => isModelOpen && handleToggleModel(false)
	);

	const newProductContextValue = {
		...prevProductContextValue,
		variant: variants.fluid,
	};

	return (
		<Model>
			<Styles.ProductModel>
				<ProductProvider value={newProductContextValue}>
					<Styles.ModelContent ref={productModelRef}>
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
