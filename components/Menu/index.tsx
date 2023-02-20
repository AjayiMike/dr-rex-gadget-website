import { Menu, Transition } from "@headlessui/react";
import styled from "styled-components";
import { Menu as MenuIcon } from "react-feather";

const MenuElement = styled.div`
    position: relative;
    display: inline-block;
    text-align: left;
    @media (min-width: 768px) {
        display: none;
    }
`;

const MenuButton = styled(Menu.Button)`
    display: inline-block;
    width: 100%;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;
const MenuItems = styled(Menu.Items)`
    position: absolute;
    right: 0;
    width: 11rem;
    padding: 0.8rem;
    margin-top: 0.5rem;
    transform-origin: top right;
    border-top-width: 1px;
    border-bottom-width: 0px;
    border-color: rgb(243 244 246);
    background: #ffffff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
`;

const StyledLink = styled.a`
    display: block;
    width: 100%;
    color: #58058b;
    text-decoration: none;
    padding: 0.3rem 0;
    font-family: var(--open-sans);
`;

const StyledTransition = styled.div`
    &.enter {
        transition: ease-out 100ms;
        transform: scale(0.95);
        opacity: 0;
    }

    &.enter-active {
        transition: ease-out 100ms;
        transform: scale(1);
        opacity: 1;
    }

    &.leave {
        transition: ease-in 75ms;
        transform: scale(1);
        opacity: 1;
    }

    &.leave-active {
        transition: ease-in 75ms;
        transform: scale(0.95);
        opacity: 0;
    }
`;

const AppMenu = () => {
    return (
        <Menu as={MenuElement}>
            <MenuButton>
                <MenuIcon />
            </MenuButton>
            <Transition
                as={StyledTransition}
                classNames={{
                    enter: "enter",
                    enterActive: "enter-active",
                    leave: "leave",
                    leaveActive: "leave-active",
                }}
                timeout={{ enter: 100, exit: 75 }}
            >
                <MenuItems>
                    <Menu.Item>
                        <StyledLink href="#product_section">
                            Products
                        </StyledLink>
                    </Menu.Item>
                    {/* <Menu.Item>
                        <StyledLink
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Flash Sales
                        </StyledLink>
                    </Menu.Item> */}
                    <Menu.Item>
                        <StyledLink
                            href="https://flutterwave.com/store/drrexenterprise"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Store
                        </StyledLink>
                    </Menu.Item>
                    <Menu.Item>
                        <StyledLink href="#services_section">
                            Laundry services
                        </StyledLink>
                    </Menu.Item>
                    <Menu.Item>
                        <StyledLink
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            About Us
                        </StyledLink>
                    </Menu.Item>
                    <Menu.Item>
                        <StyledLink
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact Us
                        </StyledLink>
                    </Menu.Item>
                </MenuItems>
            </Transition>
        </Menu>
    );
};

export default AppMenu;
