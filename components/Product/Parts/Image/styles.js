import styled, { css } from "styled-components";
import { variants } from "../../";
import NextImage from "next/image";

export const ImageContainer = styled.div`
	position: relative;
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

export const Image = styled(NextImage)``;
