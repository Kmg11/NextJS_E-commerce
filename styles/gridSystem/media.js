import * as breakpoints from "./breakpoints";

export function mediaUp(size) {
	const sizes = {
		sm: `@media (min-width: ${breakpoints.MIN_SM})`,
		md: `@media (min-width: ${breakpoints.MIN_MD})`,
		lg: `@media (min-width: ${breakpoints.MIN_LG})`,
		xl: `@media (min-width: ${breakpoints.MIN_XL})`,
		xxl: `@media (min-width: ${breakpoints.MIN_XXL})`,
	};

	return sizes[size];
}

export function mediaDown(size) {
	const sizes = {
		xs: `@media (max-width: ${breakpoints.MAX_XS})`,
		sm: `@media (max-width: ${breakpoints.MAX_SM})`,
		md: `@media (max-width: ${breakpoints.MAX_MD})`,
		lg: `@media (max-width: ${breakpoints.MAX_LG})`,
		xl: `@media (max-width: ${breakpoints.MAX_XL})`,
	};

	return sizes[size];
}

export function mediaBetween(size) {
	const sizes = {
		xs: mediaDown("xs"),
		sm: `${mediaUp("sm")} and ${mediaDown("sm").replace("@media ", "")}`,
		md: `${mediaUp("md")} and ${mediaDown("md").replace("@media ", "")}`,
		lg: `${mediaUp("lg")} and ${mediaDown("lg").replace("@media ", "")}`,
		xl: `${mediaUp("xl")} and ${mediaDown("xl").replace("@media ", "")}`,
		xxl: mediaUp("xxl"),
	};

	return sizes[size];
}
