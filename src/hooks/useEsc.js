import { useEventListener } from "./useEventListener";

export function useEsc(callback) {
	useEventListener(
		"keydown",
		(e) => e.key === "Escape" && e.code === "Escape" && callback(e)
	);
}
