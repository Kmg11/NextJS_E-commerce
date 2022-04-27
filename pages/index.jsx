import Head from "next/head";
import axios from "axios";
import { API_URL } from "constants/index";
import { Grid } from "styles";
import { HomePage } from "containers";

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

export async function getServerSideProps() {
	const res = await axios.get(API_URL);
	const data = res.data;

	return {
		props: { data },
	};
}
