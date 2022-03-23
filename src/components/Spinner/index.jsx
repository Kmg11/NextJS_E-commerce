import * as Styles from "./styles";

export function Spinner() {
	return (
		<Styles.Spinner>
			{[...new Array(8).keys()].map((i) => (
				<Styles.SpinnerItem key={i} />
			))}
		</Styles.Spinner>
	);
}
