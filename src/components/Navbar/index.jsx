import { useLocation } from "react-router-dom";
import { Grid } from "styles";
import { NavbarList } from "./NavbarList";
import { Cart } from "./Cart";
import { ROUTES } from "constants";
import * as Styles from "./styles";

export function Navbar() {
	const location = useLocation;

	const shouldRenderCartMenu = location().pathname !== ROUTES.cart;

	return (
		<Styles.Navbar>
			<Grid.Container>
				<Styles.NavbarRow>
					<NavbarList />
					{shouldRenderCartMenu && <Cart />}
				</Styles.NavbarRow>
			</Grid.Container>
		</Styles.Navbar>
	);
}
