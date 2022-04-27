import styled from "styled-components";
import { variants } from ".";

export const Product = styled.div`
	position: relative;
	margin-bottom: ${({ variant }) => (variant === variants.list ? "1rem" : "0")};
`;
