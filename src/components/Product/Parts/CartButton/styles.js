import styled, { css } from "styled-components";

export const CartButton = styled.button`
	position: relative;
	z-index: 2;
	width: 100%;
`;

export const Icon = styled.span`
	display: block;
	width: 16px;
	height: 16px;
	font-size: 0.9rem;
	fill: ${(p) => p.theme.colors.text.primary};
	transition: fill 0.2s linear;

	&:hover {
		fill: ${(p) => p.theme.colors.primary};
	}

	${(p) =>
		p.$isActive &&
		css`
			fill: ${(p) => p.theme.colors.primary};
		`}
`;

export const Text = styled.span`
	display: block;
	width: 100%;
	text-align: center;
	background-color: ${(p) => p.theme.colors.primary};
	color: #fff;
	text-transform: uppercase;
	font-weight: 800;
	padding: 12px 20px;
	transition: background-color 0.2s linear;

	&:hover {
		background-color: ${(p) => p.theme.colors.background.four};
	}

	${(p) =>
		p.$isActive &&
		css`
			background-color: ${(p) => p.theme.colors.background.four};
		`}
`;
