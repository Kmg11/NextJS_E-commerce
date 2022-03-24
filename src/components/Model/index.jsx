import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function Model({ children }) {
	return ReactDOM.createPortal(children, document.getElementById("model"));
}

Model.propTypes = {
	children: PropTypes.node.isRequired,
};
