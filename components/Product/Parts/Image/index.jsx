import { IMAGES_PATH } from "constants/index";
import { useProductContext } from "context";
import * as Styles from "./styles";

export function Image() {
	const { data, variant } = useProductContext();

	return (
		<Styles.ImageContainer $variant={variant}>
			<Styles.Image
				src={IMAGES_PATH + data.featuredPhoto}
				alt={data.name}
				layout="fill"
				objectFit="cover"
				priority
			/>
		</Styles.ImageContainer>
	);
}
