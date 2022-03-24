import { useEventListener } from "./useEventListener";

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
		document
	);
}
