import styled from "styled-components";

export const ErrorMessage = styled.p`
	color: ${(p) => p.theme.colors.error};
	font-weight: 700;
	font-size: 1.2rem;
	text-align: center;
	line-height: 1.7;
`;
