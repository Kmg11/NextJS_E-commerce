import { useEventListener } from "./useEventListener";

/**
 * Hook to use the escape key to close a modal
 *
 * useEsc(callback);
 */

export function useEsc(callback) {
	useEventListener(
		"keydown",
		(e) => e.key === "Escape" && e.code === "Escape" && callback(e)
	);
}
