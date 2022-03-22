import { ROUTES } from "constants";
import * as Styles from "./styles";

export function NavbarList() {
	return (
		<Styles.NavbarList>
			<Styles.ListItem>
				<Styles.ItemLink to={ROUTES.home}>Home</Styles.ItemLink>
			</Styles.ListItem>
			<Styles.ListItem>
				<Styles.ItemLink to={ROUTES.cart}>Cart</Styles.ItemLink>
			</Styles.ListItem>
		</Styles.NavbarList>
	);
}
