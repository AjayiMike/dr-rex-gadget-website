import styled from "styled-components";
import { storeRootUrl } from "../../constants/url";

const NavWrapper = styled.nav`
    width: 100%;
    margin-top: 1rem;
    font-family: var(--open-sans);
    display: none;
    @media (min-width: 768px) {
        display: block;
    }
`;

const StyledList = styled.ul`
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
    list-style: none;
`;

const StyledLink = styled.a`
    color: #29323a;
    text-decoration: none;
    font-weight: 501;
    font-size: 14px;
    line-height: 19px;
    &:hover {
        color: #58058b;
    }
`;

const NavBar = () => {
    return (
        <NavWrapper>
            <StyledList>
                <li>
                    <StyledLink href="#product_section">Products</StyledLink>
                </li>
                <li>
                    <StyledLink
                        href={storeRootUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Store
                    </StyledLink>
                </li>
                <li>
                    <StyledLink href="#footer_section">About Us</StyledLink>
                </li>
                <li>
                    <StyledLink
                        href="https://wa.link/sd4r60"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact Us
                    </StyledLink>
                </li>
            </StyledList>
        </NavWrapper>
    );
};

export default NavBar;
