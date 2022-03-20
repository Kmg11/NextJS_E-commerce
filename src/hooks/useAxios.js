import { useCallback, useEffect, useRef, useState } from "react";
import axios from "api/axios";

/**
 * How To Use
 * 	- const { makeRequest, loading, error, response } =
 * 				useAxios(url, initialConfigs, dependencies);
 *
 * 	- makeRequest:
 * 		- makeRequest Function Help You Fetch Data Again Or Send New Request
 * 		- Accept otherConfigs
 * 	- loading: Loading State
 * 	- error: Error State
 * 	- response: Response Back From API
 * 	- url: End Point
 * 	- initialConfigs / otherConfigs:
 * 			- Fetch Configs By Default {headers: Set To Json } and cancelToken
 * 			- By Default {method: "GET"}
 * 			- You Can Change Method, Add Body
 * 			- Example - Like {method: "POST", body: JSON.stringify({ title: "hello" }
 * 	- dependencies: Array Of Dependencies To Use It [runNow: true]
 */

export function useAxios(url, initialConfigs = {}, dependencies = []) {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const abortCount = useRef(new AbortController());
	const abortCountCurrent = abortCount.current;

	const DEFAULT_CONFIGS = {
		signal: abortCountCurrent.signal,
		headers: {
			"Content-Type": "application/json",
		},
	};

	useEffect(() => {
		return () => abortCountCurrent.abort();
	}, [abortCountCurrent]);

	const makeRequest = useCallback(
		(otherConfigs = {}) => {
			if (response) setResponse(null);
			if (!loading) setLoading(true);
			if (error) setError(null);

			axios({ url, ...DEFAULT_CONFIGS, ...initialConfigs, ...otherConfigs })
				.then(({ data }) => {
					setResponse(data);
				})
				.catch((err) => {
					if (!axios.isCancel(err)) setError("Error " + err.message);
				})
				.finally(() => {
					setLoading(false);
				});
		},

		// eslint-disable-next-line react-hooks/exhaustive-deps
		[...dependencies, url]
	);

	useEffect(() => {
		makeRequest();
	}, [makeRequest]);

	return { response, loading, error, makeRequest };
}
