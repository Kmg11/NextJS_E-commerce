import { Description, Price, Rating, CartButton, Image } from "./Parts";
import { Name } from "./Parts/Name";
import * as Styles from "./styles";

export function List() {
	return (
		<Styles.Box type="list">
			<Image />

			<Styles.Info>
				<Name />
				<Rating />
				<Description />
				<Price />
				<Styles.Grid>
					<CartButton />
				</Styles.Grid>
			</Styles.Info>
		</Styles.Box>
	);
}
