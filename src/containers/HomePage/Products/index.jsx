import { useParams } from "react-router-dom";
import { Product, productVariants } from "components";
import { Grid } from "styles";
import * as Styles from "./styles";

export function Products({ response }) {
	const params = useParams();
	const numberOfPages = Math.ceil(response.length / 6);
	const currentPage = params?.page ?? 1;
	const products = response.slice(currentPage * 6 - 6, currentPage * 6);

	const productsList = products.map((product) => (
		<Product key={product.id} data={product} variant={productVariants.card} />
	));

	const paginationList = [...new Array(numberOfPages).keys()].map((number) => {
		const page = number + 1;

		return (
			<Styles.PaginationLink
				key={page}
				to={`/${page}`}
				$currentPage={currentPage}
			>
				{page}
			</Styles.PaginationLink>
		);
	});

	return (
		<Styles.Products>
			<Grid.Container>
				{currentPage > numberOfPages && (
					<Styles.ErrorMessage>
						The page does not exist, please return to the valid page
						<br />
						Valid pages: from 1 to {numberOfPages}
					</Styles.ErrorMessage>
				)}

				<Styles.ProductsList>{productsList}</Styles.ProductsList>
				<Styles.Pagination>{paginationList}</Styles.Pagination>
			</Grid.Container>
		</Styles.Products>
	);
}
