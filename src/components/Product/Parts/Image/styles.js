import styled, { css } from "styled-components";
import { variants } from "../../";

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	${(p) => {
		if (p.$variant === variants.card)
			return css`
				height: 200px;
			`;

		if (p.$variant === variants.list)
			return css`
				height: 250px;
			`;

		if (p.$variant === variants.small)
			return css`
				height: 80px;
			`;
	}}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
`;
