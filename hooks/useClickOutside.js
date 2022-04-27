import { useEventListener } from "./useEventListener";
import { nextDocument } from "utils";

export function useClickOutside(ref, callback) {
	useEventListener(
		"click",
		(e) => {
			if (
				ref.current === null ||
				ref.current === undefined ||
				ref.current.contains(e.target)
			)
				return;
			callback(e);
		},
		nextDocument
	);
}
