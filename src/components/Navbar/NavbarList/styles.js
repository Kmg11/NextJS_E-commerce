import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarList = styled.ul``;

export const ListItem = styled.li`
	display: inline-block;
	margin-right: 20px;
`;

export const ItemLink = styled(Link)`
	text-transform: capitalize;
	font-weight: bold;
	color: #fff;
`;
