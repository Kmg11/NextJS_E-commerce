import { Name, Description, Price, Rating, CartButton, Image } from "./Parts";
import * as Styles from "./styles";

export function List() {
	return (
		<Styles.List>
			<Image />

			<Styles.Info>
				<Name />
				<Rating />
				<Description />
				<Styles.Grid>
					<Price />
					<CartButton />
				</Styles.Grid>
			</Styles.Info>
		</Styles.List>
	);
}
