import Head from "next/head";
import { CartPage } from "containers";

export default function Cart() {
	return (
		<>
			<Head>
				<title>E-commerce | Cart</title>
				<meta name="description" content="E-commerce Cart Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CartPage />
		</>
	);
}
