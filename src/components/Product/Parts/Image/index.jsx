import { IMAGES_PATH } from "constants";
import { useProductContext } from "context";
import * as Styles from "./styles";

export function Image() {
	const { data, variant } = useProductContext();

	return (
		<Styles.ImageContainer $variant={variant}>
			<Styles.Image src={IMAGES_PATH + data.featuredPhoto} alt={data.name} />
		</Styles.ImageContainer>
	);
}
