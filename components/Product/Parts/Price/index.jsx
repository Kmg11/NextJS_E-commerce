import { useProductContext } from "context";
import * as Styles from "./styles";

export function Price() {
	const { data, variant } = useProductContext();

	return <Styles.Price $variant={variant}>EGP {data.price}</Styles.Price>;
}
