import styled, { css } from "styled-components";
import { Components } from "styles";

export const Cart = styled.div``;

export const CartButton = styled.button`
	position: relative;
	display: block;
	width: 20px;
	height: 20px;
	line-height: 20px;
	fill: ${(p) => p.theme.colors.text.two};
`;

export const Badge = styled.span`
	width: 20px;
	height: 20px;
	line-height: 20px;
	text-align: center;
	border-radius: 50%;
	background-color: ${(p) => p.theme.colors.primary};
	color: ${(p) => p.theme.colors.text.two};
	position: absolute;
	top: -10px;
	right: -10px;
	font-size: 10px;
	font-weight: bold;
`;

export const CartMenu = styled.section`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	width: 300px;
	background-color: ${(p) => p.theme.colors.background.two};
	box-shadow: -2px 0 10px rgba(0, 0, 0, 0.25);
	padding: 1rem;
	transform: translateX(100%);
	transition-property: transform;
	transition-duration: 0.2s;
	transition-timing-function: linear;

	${(p) =>
		p.$isModelOpen &&
		css`
			transform: translateX(0);
		`}
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
`;

export const MenuTitle = styled.h2`
	color: ${(p) => p.theme.colors.primary};
`;

export const CloseButton = styled.button`
	font-size: 1.8rem;
	transition: color 0.2s linear;

	&:hover {
		color: ${(p) => p.theme.colors.error};
	}
`;

export const EmptyMessage = styled.p`
	text-align: center;
`;

export const ProductsList = styled.section`
	margin-bottom: 20px;
	overflow: auto;
	max-height: 350px;
`;

export const Total = styled.div`
	margin-bottom: 20px;
	font-weight: bold;
	text-transform: capitalize;
`;

export const CheckoutButton = styled(Components.Button)``;
