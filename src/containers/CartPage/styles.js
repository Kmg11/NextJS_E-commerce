import styled from "styled-components";
import { Components, Grid } from "styles";

export const EmptyMessage = styled.p`
	font-size: 1.4rem;
	font-weight: bold;
	line-height: 1.5;
`;

export const Products = styled.section``;

export const TotalPrice = styled.span`
	display: block;
	font-weight: 600;
	font-size: 1.3rem;
	margin-bottom: 20px;
	text-transform: capitalize;

	${Grid.mediaDown("sm")} {
		text-align: center;
	}
`;

export const ClearCart = styled(Components.Button)`
	margin-bottom: 20px;
	width: max-content;
	background-color: ${(p) => p.theme.colors.background.four};

	${Grid.mediaDown("sm")} {
		margin-right: auto;
		margin-left: auto;
	}
`;
