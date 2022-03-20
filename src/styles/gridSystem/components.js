import styled from "styled-components";
import { mediaUp } from "./media";

export const Container = styled.div`
	padding-left: ${(p) => (p.noPadding ? 0 : "1rem")};
	padding-right: ${(p) => (p.noPadding ? 0 : "1rem")};
	margin-left: auto;
	margin-right: auto;
	width: 100%;

	${mediaUp("xxl")} {
		max-width: 1200px;
	}
`;
