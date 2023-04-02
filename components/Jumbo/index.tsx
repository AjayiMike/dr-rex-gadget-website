import React from "react";
import styled, { useTheme } from "styled-components";
import { Container } from "../styled/Container.styled";
import iphone from "../../assets/jumbo-iphone.png";
import { storeRootUrl } from "../../constants/url";

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

const ButtonLink = styled.a`
    background-color: ${(props) => props.theme.colors.blue1};
    color: ${(props) => props.theme.colors.black2};
    border-radius: 4px;
    padding: .5rem 1.2rem;
    font-size: 1 rem
    font-family: var(--open-sans);
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
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
                    <ButtonLink
                        href={storeRootUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Shop now
                    </ButtonLink>
                </JUboTextSection>
            </JumboWrapper>
        </Container>
    );
};

export default Jumbo;
