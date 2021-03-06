import Link from "next/link";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { ErrorMessage, Product, productVariants } from "components";
import * as Styles from "./styles";

export function HomePage({ response }) {
	const router = useRouter();
	const numberOfPages = Math.ceil(response.length / 6);
	const currentPage = router.query.page ? router.query.page[0] : 1;
	const productsInPage = 6;
	const products = response.slice(
		currentPage * productsInPage - productsInPage,
		currentPage * productsInPage
	);

	const productsList = products.map((product) => (
		<Product key={product.id} data={product} variant={productVariants.card} />
	));

	const paginationList = [...new Array(numberOfPages).keys()].map((number) => {
		const page = number + 1;

		return (
			<Link key={page} href={`/${page}`} passHref>
				<Styles.PaginationLink $currentPage={currentPage}>
					{page}
				</Styles.PaginationLink>
			</Link>
		);
	});

	if (currentPage > numberOfPages || currentPage === "0")
		return (
			<ErrorMessage>
				The page does not exist, please return to the valid page
				<br />
				Valid pages: from 1 to {numberOfPages}
			</ErrorMessage>
		);

	return (
		<Styles.Products>
			<Styles.ProductsList>{productsList}</Styles.ProductsList>
			<Styles.Pagination>{paginationList}</Styles.Pagination>
		</Styles.Products>
	);
}

HomePage.propTypes = {
	response: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			rate: PropTypes.string.isRequired,
			reviewsCount: PropTypes.string.isRequired,
			price: PropTypes.string.isRequired,
			featuredPhoto: PropTypes.string.isRequired,
			photos: PropTypes.arrayOf(PropTypes.string).isRequired,
		}).isRequired
	).isRequired,
};
