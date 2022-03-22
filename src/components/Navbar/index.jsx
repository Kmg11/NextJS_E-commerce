import { Grid } from "styles";
import { NavbarList } from "./NavbarList";
import { Cart } from "./Cart";
import * as Styles from "./styles";

export function Navbar() {
	return (
		<Styles.Navbar>
			<Grid.Container>
				<Styles.NavbarRow>
					<NavbarList />
					<Cart />
				</Styles.NavbarRow>
			</Grid.Container>
		</Styles.Navbar>
	);
}
