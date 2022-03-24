import { CartButton, Image, Name, Price } from "../Parts";
import { useProductContext } from "context";
import * as Styles from "./styles";

export function Small() {
	const { variant } = useProductContext();

	return (
		<Styles.Small>
			<Image />

			<Styles.Info $variant={variant}>
				<Name />
				<Styles.GridArea>
					<Price />
					<CartButton />
				</Styles.GridArea>
			</Styles.Info>
		</Styles.Small>
	);
}
