import React from "react";
import styled from "styled-components";
import { Container } from "../styled/Container.styled";

const TopBarContainer = styled.div`
    background-color: ${(props) => props.theme.colors.cream};
    border: ${(props) => `1px solid ${props.theme.colors.white2}`};
`;

const TopBar = () => {
    return (
        <TopBarContainer>
            <Container>
                <p>Get great deal on phones and accesories from us.</p>
            </Container>
        </TopBarContainer>
    );
};

export default TopBar;
