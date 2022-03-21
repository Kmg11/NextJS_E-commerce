import { Link } from "react-router-dom";
import styled from "styled-components";

export const Products = styled.section``;

export const ProductsList = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 1rem;
`;

export const Pagination = styled.section`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 50px;
`;

export const PaginationLink = styled(Link)`
	display: block;
	width: 30px;
	height: 30px;
	line-height: 30px;
	border: 1px solid ${(p) => p.theme.colors.text.one};
	border-radius: 5px;
	text-align: center;
	font-weight: 700;
	margin-left: 5px;
	margin-right: 5px;
	transition-property: background-color, color, border-color;
	transition-duration: 0.2s;
	transition-timing-function: linear;

	&:hover,
	&:nth-of-type(${(p) => p.$currentPage}) {
		background-color: ${(p) => p.theme.colors.primary};
		border-color: ${(p) => p.theme.colors.primary};
		color: #fff;
	}
`;

export const ErrorMessage = styled.p`
	color: ${(p) => p.theme.colors.error};
	font-weight: 700;
	text-align: center;
	line-height: 1.7;
`;
