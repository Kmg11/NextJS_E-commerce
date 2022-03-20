import styled, { css } from "styled-components";

export const CartButton = styled.button`
	font-size: 0.9rem;
	fill: ${(p) => p.theme.colors.text.primary};
	transition-property: fill;
	transition-duration: 0.2s;
	transition-timing-function: linear;

	&:hover {
		fill: ${(p) => p.theme.colors.primary};
	}

	${(p) =>
		p.isActive &&
		css`
			fill: ${(p) => p.theme.colors.primary};
		`}
`;

export const Icon = styled.span`
	display: block;
	width: 16px;
	height: 16px;
`;
