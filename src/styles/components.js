import styled from "styled-components";

export const Button = styled.button`
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
`;
