import styled from "styled-components";
import { css } from "styled-components";
import { variants } from "../..";

export const Name = styled.h3`
	display: block;
	line-height: 1.4;
	color: ${(p) => p.theme.colors.text.primary};
	font-weight: 600;

	${(p) => {
		if (p.$variant === variants.card)
			return css`
				font-size: 0.92rem;
				margin-bottom: 10px;
			`;

		if (p.$variant === variants.small)
			return css`
				font-size: 0.875rem;
				margin-bottom: 5px;
			`;

		if (p.$variant === variants.list || p.$variant === variants.fluid)
			return css`
				font-size: 1rem;
				margin-bottom: 10px;
			`;
	}}
`;
