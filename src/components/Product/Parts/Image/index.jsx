import { useProductContext } from "context";
import * as Styles from "./styles";

export function Image() {
	const { data } = useProductContext();

	return (
		<Styles.ImageContainer>
			<Styles.Image src={data.featuredPhoto} alt={data.name} />
		</Styles.ImageContainer>
	);
}
