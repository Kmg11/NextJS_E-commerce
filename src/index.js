import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "styles";
import { store } from "store";
import { App } from "App";

ReactDOM.render(
	<React.StrictMode>
		<Router basename={process.env.PUBLIC_URL}>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<App />
				</ThemeProvider>
			</Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
