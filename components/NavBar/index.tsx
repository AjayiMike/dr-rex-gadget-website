import styled from "styled-components";

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
                {/* <li>
                    <StyledLink
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Flash Sales
                    </StyledLink>
                </li> */}
                <li>
                    <StyledLink
                        href="https://flutterwave.com/store/drrexenterprise"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Store
                    </StyledLink>
                </li>
                <li>
                    <StyledLink href="#services_section">
                        Laundry services
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About Us
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        href="https://api.whatsapp.com/send?phone=8145055409&text=Hi,%20Dr%20Rex%20Gadget%20I%20want%20to%20make%20an%20enquiry"
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
