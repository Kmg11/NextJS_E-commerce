import { useProductContext } from "context";
import * as Styles from "./styles";

export function Description() {
	const { data } = useProductContext();

	return <Styles.Description>{data.description}</Styles.Description>;
}
