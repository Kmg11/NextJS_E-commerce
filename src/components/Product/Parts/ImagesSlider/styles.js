import { Grid } from "styles";
import styled from "styled-components";

export const Images = styled.div`
	padding: 1rem;
	width: 100%;
	height: 300px;

	${Grid.mediaDown("md")} {
		height: 450px;
	}
	
	${Grid.mediaDown("xs")} {
		height: 300px;
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.product-images-big-slider {
		width: 100%;
		height: 75%;
	}

	.product-images-small-slider {
		width: 100%;
		height: 25%;
		padding: 10px 0 0;
	}

	.product-images-small-slider > .swiper-wrapper {
		justify-content: center;
	}

	.product-images-small-slider .swiper-slide {
		width: 25%;
		height: 100%;
		opacity: 0.7;
		cursor: pointer;
	}

	.product-images-small-slider .swiper-slide-thumb-active {
		opacity: 1;
	}
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
