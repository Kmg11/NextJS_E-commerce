import styled, { css } from "styled-components";
import { variants } from "../../";

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;

	${(p) =>
		p.$variant === variants.small &&
		css`
			height: 80px;
		`}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
`;
