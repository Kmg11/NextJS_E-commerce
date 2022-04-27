import Head from "next/head";
import { Grid } from "styles";
import { HomePage } from "containers";
import { products } from "data";

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>E-commerce | Home</title>
				<meta name="description" content="E-commerce Home Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Grid.Container>{data && <HomePage response={data} />}</Grid.Container>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: { data: products },
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}
