import { useEffect, useRef } from "react";
import { nextWindow } from "utils";

/**
 * Use it to handle event listeners
 *
 * useEventListener(eventType, callback, element);
 *
 * 	- eventType: [ click, mouseover, mouseout, etc. ]
 * 	- callback: [ function ]
 * 	- element: [ document, window, ref, etc. ]
 */

export function useEventListener(eventType, callback, element = nextWindow) {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		if (element === null) return;

		const handler = (e) => callbackRef.current(e);

		element.addEventListener(eventType, handler, {
			capture: true,
		});

		return () => element.removeEventListener(eventType, handler);
	}, [eventType, element]);
}
