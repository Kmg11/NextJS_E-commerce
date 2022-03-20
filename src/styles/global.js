import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after,
	body *,
	body *::before,
	body *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Open Sans', sans-serif;
		color: ${(p) => p.theme.colors.text.primary};
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
	}

	img {
		user-select: none;
	}

	input {
		outline: none;
	}
`;
