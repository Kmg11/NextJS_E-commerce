import { useProductContext } from "context";
import { Name, Price, Rating, CartButton, Image } from "./Parts";
import * as Styles from "./styles";

export function Card() {
	const { modelState } = useProductContext();

	const shouldOpen = !modelState.isModelOpen
		? "Open Product Model"
		: "Close Product Model";

	return (
		<Styles.Cart>
			<Styles.OverlayButton
				onClick={() => modelState.handleToggleModel(true)}
				title={shouldOpen}
				aria-label={shouldOpen}
			/>

			<Image />

			<Styles.Info>
				<Name />
				<Price />
				<Styles.Grid>
					<Rating />
					<CartButton />
				</Styles.Grid>
			</Styles.Info>
		</Styles.Cart>
	);
}
