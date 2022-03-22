import styled from "styled-components";
import { css } from "styled-components";
import { Grid } from "styles";
import { variants } from "..";

export const Cart = styled.div`
	position: relative;
`;

export const List = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
	gap: 1rem;
	align-items: center;
`;

export const Fluid = styled.div`
	display: grid;
	grid-template-columns: 300px 1fr;
	align-items: center;
	gap: 1rem;

	${Grid.mediaDown("md")} {
		grid-template-columns: 100%;
	}
`;

export const Small = styled.div`
	display: grid;
	grid-template-columns: 80px 1fr;
	align-items: center;
`;

export const Info = styled.div`
	${(p) => {
		if (p.$variant === variants.card || p.$variant === variants.small)
			return css`
				padding: 0.75rem;
			`;

		if (p.$variant === variants.list || p.$variant === variants.fluid)
			return css`
				padding: 1rem;
			`;
	}}
`;

export const GridArea = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-content: space-between;
	align-items: center;
`;

export const OverlayButton = styled.button`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;
