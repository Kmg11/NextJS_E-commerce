import { useAxios } from "hooks";
import { API_URL } from "constants";
import { Products } from "./Products";
import { ErrorMessage, Spinner } from "components";
import { Grid } from "styles";

export function HomePage() {
	const { response, loading, error } = useAxios(API_URL);

	return (
		<Grid.Container>
			{loading && <Spinner />}

			{error && <ErrorMessage>{error}</ErrorMessage>}

			{response && <Products response={response.products} />}
		</Grid.Container>
	);
}
