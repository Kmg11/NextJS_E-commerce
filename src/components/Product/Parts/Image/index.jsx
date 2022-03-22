import { useProductContext } from "context";
import * as Styles from "./styles";

export function Image() {
	const { data, variant } = useProductContext();

	return (
		<Styles.ImageContainer $variant={variant}>
			<Styles.Image src={data.featuredPhoto} alt={data.name} />
		</Styles.ImageContainer>
	);
}
