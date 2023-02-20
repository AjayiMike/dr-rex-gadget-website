import React from "react";
import styled, { useTheme } from "styled-components";
import { Container } from "../styled/Container.styled";
import iphone from "../../assets/jumbo-iphone.png";
import Button from "../styled/Button.styled";

const JumboWrapper = styled.div`
    display: block;
    margin-top: 1rem;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr; /* defines two columns with equal width */
        grid-template-rows: auto; /* defines auto rows height */
        direction: rtl;
        margin-top: 4rem;
    }
`;

const JUboTextSection = styled.div`
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
    }
`;

const Text = styled.p`
    color: #58058b;
    font-weight: 700;
    font-size: 14px;
    font-family: var(--open-sans);
    margin: 16px 0;
    @media (min-width: 768px) {
        font-size: 18px;
    }
`;
const BiggerText = styled.h1`
    font-size: 32px;
    font-family: var(--open-sans);
    font-weight: 200;
    color: #29323a;
    @media (min-width: 768px) {
        font-size: 28px;
        line-height: 45px;
        margin-bottom: 1rem;
    }
    @media (min-width: 1024px) {
        font-size: 42px;
        line-height: 80px;
        margin-bottom: 2rem;
    }
`;
const BolderText = styled.span`
    font-weight: 700;
`;

const Image = styled.img`
    width: 300px;
    margin: 0 auto;
    @media (min-width: 768px) {
        margin: 0;
        width: 500px;
    }
`;

const ButtonWrapepr = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-family: var(--open-sans);
`;
const Jumbo = () => {
    const theme = useTheme();
    return (
        <Container>
            <JumboWrapper>
                <Image src={iphone.src} alt="jumbo" />
                <JUboTextSection>
                    <Text>Get New Standard & UK Used Apple iPhone</Text>
                    <BiggerText>
                        QUALITY PRODUCTS AT THE BEST PRICES GET UP TO{" "}
                        <BolderText>20% OFF</BolderText>
                    </BiggerText>
                    {/* <ButtonWrapepr> */}
                    <Button
                        bgColor={theme.colors.blue1}
                        color={theme.colors.black2}
                    >
                        Shop now
                    </Button>
                    {/* </ButtonWrapepr> */}
                </JUboTextSection>
            </JumboWrapper>
        </Container>
    );
};

export default Jumbo;
