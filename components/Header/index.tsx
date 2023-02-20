import React from "react";
import styled from "styled-components";
import { Container } from "../styled/Container.styled";
import logo from "../../assets/logo.png";
import { FlexContainer } from "../styled/Flex.styled";
import AppMenu from "../Menu";
import NavBar from "../NavBar";

const Image = styled.img`
    /* width: 8rem; */
    /* height: 3.5rem; */
`;

const Header = () => {
    return (
        <Container>
            <FlexContainer alignItems="center" justifyContent="space-between">
                <Image src={logo.src} alt="dr rex logo" />
                <AppMenu />
            </FlexContainer>
            <NavBar />
        </Container>
    );
};

export default Header;
