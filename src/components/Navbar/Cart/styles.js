import styled, { css } from "styled-components";
import { Components } from "styles";

export const Cart = styled.div``;

export const CartButton = styled.button`
	display: block;
	width: 20px;
	height: 20px;
	line-height: 20px;
	fill: #fff;
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
	visibility: hidden;
	opacity: 0;
	transform: translateX(100%);
	transition-property: transform, opacity, visibility;
	transition-duration: 0.2s;
	transition-timing-function: linear;

	${(p) =>
		p.$isModelOpen &&
		css`
			visibility: visible;
			opacity: 1;
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
`;

export const Total = styled.div`
	margin-bottom: 20px;
	font-weight: bold;
	text-transform: capitalize;
`;

export const CheckoutButton = styled(Components.Button)``;
