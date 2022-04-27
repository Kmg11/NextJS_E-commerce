import styled from "styled-components";

export const Navbar = styled.nav`
	background-color: ${(p) => p.theme.colors.background.three};
	padding: 30px 10px;
	margin-bottom: 1rem;
`;

export const NavbarRow = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
`;
