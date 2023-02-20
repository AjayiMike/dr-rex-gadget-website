import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: string;
    bgColor?: string;
    padding?: string | number;
    fontSize?: string | number;
};

const Button = styled.button<ButtonProps>`
    background-color: ${(props) => props.bgColor || "#000"};
    color: ${(props) => props.color || "#fff"};
    border-radius: 4px;
    padding: ${(props) => props.padding || ".5rem 1.2rem"};
    font-size: ${(props) => props.fontSize || "1rem"};
    font-family: var(--open-sans);
    cursor: pointer;
    white-space: nowrap;
`;

export default Button;
