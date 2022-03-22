import styled, { css } from "styled-components";
import { variants } from "components/Product";

export const Price = styled.div`
	display: grid;
	margin-bottom: 10px;
	font-weight: 600;
	font-size: 1.2rem;
	color: ${(p) => p.theme.colors.text.main};
	text-transform: uppercase;

	${(p) => {
		if (p.$variant === variants.fluid)
			return css`
				font-size: 1.4rem;
			`;

		if (p.$variant === variants.small || p.$variant === variants.list)
			return css`
				margin-bottom: 0;
			`;
	}}
`;
