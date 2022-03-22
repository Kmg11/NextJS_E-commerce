import ReactDOM from "react-dom";

export function Model({ children }) {
	return ReactDOM.createPortal(children, document.getElementById("model"));
}
