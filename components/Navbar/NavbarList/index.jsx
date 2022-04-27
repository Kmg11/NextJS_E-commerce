import { ROUTES } from "constants/index";
import Link from "next/link";
import * as Styles from "./styles";

export function NavbarList() {
	return (
		<Styles.NavbarList>
			<Styles.ListItem>
				<Link href={ROUTES.home} passHref>
					<Styles.ItemLink>Home</Styles.ItemLink>
				</Link>
			</Styles.ListItem>
			<Styles.ListItem>
				<Link href={ROUTES.cart} passHref>
					<Styles.ItemLink>Cart</Styles.ItemLink>
				</Link>
			</Styles.ListItem>
		</Styles.NavbarList>
	);
}
