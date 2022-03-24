import { useState, useEffect } from "react";
import { useEventListener } from "./useEventListener";

/**
 * Use it to handle media queries
 *
 * useMediaQuery(mediaQuery);
 *
 * 	- mediaQuery: [ (min-width: 500px), (max-width: 1000px), etc. ]
 */

export function useMediaQuery(mediaQuery) {
	const [isMatch, setIsMatch] = useState(false);
	const [mediaQueryList, setMediaQueryList] = useState(null);

	useEffect(() => {
		const list = window.matchMedia(mediaQuery);
		setMediaQueryList(list);
		setIsMatch(list.matches);
	}, [mediaQuery]);

	useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);

	return isMatch;
}
