import { useProductContext } from "context";
import { Name, Description, Price, Rating, CartButton, Image } from "../Parts";
import * as Styles from "./styles";

export function List() {
	const { variant } = useProductContext();

	return (
		<Styles.List>
			<Image />

			<Styles.Info $variant={variant}>
				<Name />
				<Rating />
				<Description />
				<Price />
				<CartButton />
			</Styles.Info>
		</Styles.List>
	);
}
