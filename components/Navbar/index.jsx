import { useRouter } from "next/router";
import { Grid } from "styles";
import { NavbarList } from "./NavbarList";
import { Cart } from "./Cart";
import { ROUTES } from "constants/index";
import * as Styles from "./styles";

export function Navbar() {
	const pathname = useRouter().pathname;
	const shouldRenderCartMenu = pathname !== ROUTES.cart;

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
