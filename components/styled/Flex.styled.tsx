import { ReactNode } from "react";
import styled from "styled-components";

interface FlexContainerProps {
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly";
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
}

export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.flexDirection || "row"};
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-items: ${(props) => props.alignItems || "stretch"};
    flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;

interface FlexItemProps {
    flex?: string;
}

export const FlexItem = styled.div<FlexItemProps>`
    flex: ${(props) => props.flex || "0 1 auto"};
`;
