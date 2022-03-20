import { Image, Price, Rating } from "./Parts";
import { CartButton } from "./Parts/CartButton";
import { Name } from "./Parts/Name";
import * as Styles from "./styles";

export function Card() {
	return (
		<Styles.Box type="card">
			<Image />

			<Styles.Info>
				<Name />
				<Price />
				<Styles.Grid>
					<Rating />
					<CartButton />
				</Styles.Grid>
			</Styles.Info>
		</Styles.Box>
	);
}
