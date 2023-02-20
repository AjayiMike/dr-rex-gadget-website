import React from "react";
import styled from "styled-components";
import { Container } from "../styled/Container.styled";

const StyledFooter = styled(Container)`
    margin-top: 4rem;
    padding-bottom: 2rem;
    font-family: var(--open-sans);
    @media (min-width: 768px) {
        display: flex;
        gap: 2rem;
    }
`;

const Section = styled.section`
    margin: 2rem 0;
    & .section_heading {
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 35px;
        color: #29323a;
    }
    & p {
        margin-top: 1rem;
    }
`;

const Socials = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Section>
                <h3 className="section_heading">About Us</h3>
                <p>
                    Dr Rex gadget deals with all kinds of phones, laptops, phone
                    accessories, laundry services and others. we aim at
                    delivering the best product to all our esteem customer and
                    making sure their satisfaction is our major priority.
                </p>
            </Section>
            <Section>
                <h3 className="section_heading">Contact Us</h3>
                <p>
                    You can contact us on our line: +2348145055406 Address: Al
                    Barka plaza, Opposite federal high court minna, minna Niger
                    state Or visit our social media pages
                </p>
                <Socials className="socials">
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z"
                                fill="#222828"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                                fill="#222828"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=8145055409&text=Hi,%20Dr%20Rex%20Gadget%20I%20want%20to%20make%20an%20enquiry"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.100313 11.8527C0.0996563 13.9417 0.649687 15.981 1.69537 17.7786L0 23.9207L6.33478 22.2726C8.08022 23.2168 10.0454 23.7147 12.0451 23.7154H12.0502C18.636 23.7154 23.9972 18.3975 24 11.8621C24.0011 8.69488 22.7591 5.71656 20.5031 3.47609C18.2468 1.23591 15.2468 0.00130233 12.0502 0C5.46337 0 0.103031 5.31721 0.100406 11.8527H0.100313ZM3.87281 17.469L3.63628 17.0965C2.64197 15.5277 2.11716 13.7149 2.11791 11.8534C2.12006 6.4213 6.57544 2.00186 12.054 2.00186C14.7071 2.00298 17.2005 3.02921 19.0759 4.89116C20.9512 6.7533 21.9831 9.22865 21.9824 11.8614C21.98 17.2935 17.5245 21.7135 12.0502 21.7135H12.0463C10.2638 21.7126 8.51569 21.2376 6.99113 20.34L6.62831 20.1265L2.86912 21.1045L3.87281 17.4689V17.469Z"
                                fill="#222828"
                            />
                            <defs>
                                <linearGradient
                                    id="#222828"
                                    x1="12"
                                    y1="23.9207"
                                    x2="12"
                                    y2="0"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#F9F9F9" />
                                    <stop offset="1" stopColor="white" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                </Socials>
            </Section>
        </StyledFooter>
    );
};

export default Footer;
