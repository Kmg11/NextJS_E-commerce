import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "styles";
import { store } from "store";
import { Navbar } from "components";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>E-commerce</title>
				<meta name="description" content="E-commerce" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Navbar />
					<Component {...pageProps} />;
				</ThemeProvider>
			</Provider>
		</>
	);
}
