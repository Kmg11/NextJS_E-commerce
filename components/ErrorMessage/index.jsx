import PropTypes from "prop-types";
import * as Styles from "./styles.js";

export function ErrorMessage({ children }) {
	return <Styles.ErrorMessage>{children}</Styles.ErrorMessage>;
}

ErrorMessage.propTypes = {
	children: PropTypes.node.isRequired,
};
