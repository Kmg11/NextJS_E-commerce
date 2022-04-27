import { useProductContext } from "context";
import {
	CartButton,
	Description,
	ImagesSlider,
	Name,
	Price,
	Rating,
} from "../Parts";
import * as Styles from "./styles";

export function Fluid() {
	const { variant } = useProductContext();

	return (
		<Styles.Fluid>
			<ImagesSlider />

			<Styles.Info $variant={variant}>
				<Name />
				<Rating />
				<Description />
				<Price />
				<CartButton />
			</Styles.Info>
		</Styles.Fluid>
	);
}
