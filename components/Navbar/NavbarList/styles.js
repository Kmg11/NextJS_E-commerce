import styled from "styled-components";

export const NavbarList = styled.ul``;

export const ListItem = styled.li`
	display: inline-block;
	margin-right: 20px;
`;

export const ItemLink = styled.a`
	text-transform: capitalize;
	font-weight: bold;
	color: ${(p) => p.theme.colors.text.two};
`;
