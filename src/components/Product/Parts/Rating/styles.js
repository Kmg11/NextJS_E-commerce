import styled, { css } from "styled-components";
import { variants } from "../..";

export const Rating = styled.div`
	display: flex;
	align-items: center;

	${(p) =>
		p.$variant === variants.list &&
		css`
			margin-bottom: 10px;
		`}
`;

export const Stars = styled.div`
	margin-right: 5px;
`;

export const Star = styled.span`
	display: inline-block;
	width: 13px;
	height: 13px;
	fill: ${(p) => (p.star ? p.theme.colors.warning : "#DDD")};

	&:not(:last-of-type) {
		margin-right: 2px;
	}
`;

export const StarsCount = styled.span`
	color: ${(p) => p.theme.colors.warning};
	font-weight: 900;
	font-size: 14px;
`;
