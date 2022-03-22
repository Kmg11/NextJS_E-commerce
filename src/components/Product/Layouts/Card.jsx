import { useProductContext } from "context";
import { Name, Price, Rating, CartButton, Image } from "../Parts";
import * as Styles from "./styles";

export function Card() {
	const { modelState, variant } = useProductContext();
	const { isModelOpen, handleToggleModel } = modelState;

	const modelStatus = !isModelOpen
		? "Open Product Model"
		: "Close Product Model";

	return (
		<Styles.Cart>
			<Styles.OverlayButton
				onClick={() => handleToggleModel(true)}
				title={modelStatus}
				aria-label={modelStatus}
			/>

			<Image />

			<Styles.Info $variant={variant}>
				<Name />
				<Price />
				<Styles.GridArea>
					<Rating />
					<CartButton />
				</Styles.GridArea>
			</Styles.Info>
		</Styles.Cart>
	);
}
