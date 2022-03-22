import { useProductContext } from "context";
import * as Styles from "./styles.js";

export function Name() {
	const { data, variant } = useProductContext();

	const name = data.name;
	const text = name.length > 45 ? name.slice(0, 45) + "..." : name;

	return (
		<Styles.Name $variant={variant}>
			{data.id}. {text}
		</Styles.Name>
	);
}
