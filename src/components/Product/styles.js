import styled, { css } from "styled-components";
import { variants } from ".";

export const Product = styled.div`
	position: relative;
	border-radius: 5px;
	margin-bottom: ${({ variant }) => (variant === variants.list ? "1rem" : "0")};
`;

export const Box = styled.div`
	${(p) =>
		p.type === "list" &&
		css`
			display: grid;
			grid-template-columns: 200px 1fr;
			gap: 1rem;
			align-items: center;
		`};
`;

export const Info = styled.div`
	padding: ${({ variant }) => (variant === variants.card ? "10px" : "1rem")};
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-content: space-between;
	align-items: center;
`;
