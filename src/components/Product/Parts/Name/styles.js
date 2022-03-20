import styled from "styled-components";
import { variants } from "../..";

export const Title = styled.h3`
	display: block;
	line-height: 1.4;
	color: ${(p) => p.theme.colors.text.primary};
	font-weight: 600;
	font-size: ${(p) => (p.variant === variants.card ? "0.92rem" : "1rem")};
	margin-bottom: 10px;
	transition-property: color;
	transition-duration: 0.2s;
	transition-timing-function: linear;

	&:first-letter {
		text-transform: uppercase;
	}

	&:hover {
		color: ${(p) => p.theme.colors.primary};
	}
`;
