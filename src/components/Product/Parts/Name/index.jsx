import { useProductContext } from "context";
import * as Styles from "./styles.js";

export function Name() {
	const { data, variant } = useProductContext();

	return <Styles.Title variant={variant}>{data.name}</Styles.Title>;
}
