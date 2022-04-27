import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useMounted } from "hooks";

export function Model({ children }) {
	const { isMounted } = useMounted();

	return isMounted
		? ReactDOM.createPortal(children, document.getElementById("model"))
		: null;
}

Model.propTypes = {
	children: PropTypes.node.isRequired,
};
