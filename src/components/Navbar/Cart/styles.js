import styled from "styled-components";
import { css } from "styled-components";
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
		p.isModelOpen &&
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
`;

export const MenuTitle = styled.h2`
	color: ${(p) => p.theme.colors.primary};
	margin-bottom: 20px;
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

export const Product = styled.div`
	display: grid;
	grid-template-columns: 80px 1fr;
	align-items: center;
	gap: 12px;

	&:not(:last-of-type) {
		margin-bottom: 15px;
	}
`;

export const ImageContainer = styled.div`
	height: 80px;
`;

export const ProductImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
`;

export const ProductInfo = styled.div``;

export const ProductName = styled.h4`
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 5px;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	align-items: center;
	justify-content: space-between;
	gap: 12px;
`;

export const ProductPrice = styled.span`
	font-size: 1rem;
	font-weight: bold;
`;

export const RemoveFromCartButton = styled(CloseButton)`
	font-size: 1.5rem;
`;

export const Total = styled.div`
	margin-bottom: 20px;
	font-weight: bold;
	text-transform: capitalize;
`;

export const CheckoutButton = styled(Components.Button)``;
