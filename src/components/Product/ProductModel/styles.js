import styled from "styled-components";
import { Grid } from "styles";

export const ProductModel = styled.section`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 3;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: grid;
	align-items: center;
	justify-content: center;
	padding: 50px 1rem;
	overflow: auto;
`;

export const ModelContent = styled.section`
	position: relative;
	background-color: #fff;
	max-width: 800px;
	border-radius: 5px;

	${Grid.mediaDown("md")} {
		width: 500px;
		max-width: 85vw;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 15px;
	right: 15px;
	z-index: 2;
	font-size: 1.8rem;
	color: #000;
	line-height: 20px;

	&:hover {
		color: #ff0000;
	}

	${Grid.mediaDown("md")} {
		background-color: #fff;
		width: 20px;
		height: 20px;
		line-height: 21px;
		text-align: center;
		border-radius: 50%;
		top: 25px;
		right: 25px;
		font-size: 1.4rem;
	}
`;
