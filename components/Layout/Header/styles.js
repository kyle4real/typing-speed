import styled from "styled-components";

import { v, b, s } from "../../../styles/variables";

import { RiMenu4Fill } from "react-icons/ri";

export const SHeader = styled.div`
    height: ${v.headerHeight};
`;

export const SHeaderFixed = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    /* background: ${({ theme }) => theme.bg2}; */
    box-shadow: 0 2px 2px ${({ theme }) => theme.bg2};
`;

export const SHeaderMain = styled.div`
    position: relative;
    color: ${({ theme }) => theme.text};
    transition: 0.3s ease padding;
    padding: 0 ${v.mdSpacing};
    @media ${b.lg} {
        padding: 0 ${v.smSpacing};
        margin: 0 auto;
        width: 100%;
        max-width: ${s.lg};
    }
    height: ${v.headerHeight};
    display: flex;
    align-items: center;
`;
export const SFlex = styled.div`
    height: 100%;
    flex: 1;
    :nth-child(2) {
        flex: 3;
    }
    :nth-child(3) {
        display: none;
    }
    :nth-child(4) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    @media ${b.md} {
        :nth-child(3) {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        :nth-child(4) {
            display: none;
        }
    }
`;

// LOGO /////////////
export const SLogo = styled.div`
    max-height: ${v.headerHeight};
    width: ${v.headerHeight};
`;

// NAV /////////////
export const SNav = styled.nav`
    display: none;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    @media ${b.md} {
        display: flex;
    }
`;
export const SNavItemContainer = styled.div`
    height: 100%;
`;
export const SNavLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    padding: ${v.smSpacing} ${v.mdSpacing};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    :hover {
        color: ${({ theme }) => theme.primary};
    }

    color: ${({ theme, isActive }) => (!isActive ? "inherit" : theme.primary)};

    @media ${b.md} {
        box-shadow: inset 0 -4px 0 ${({ theme, isActive }) => (!isActive ? "transparent" : theme.primary)};

        :hover {
            box-shadow: inset 0 ${({ isActive }) => (isActive ? "-4px" : "-1px")} 0
                ${({ theme }) => theme.primary};
        }
    }
`;

// BUTTON /////////////

export const SButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.primary};
    padding: ${v.smSpacing} ${v.lgSpacing};
    color: ${({ theme }) => theme.textInvert};
    border-radius: ${v.borderRadius};
    font-size: 14px;
    font-family: inherit;
    cursor: pointer;
    text-transform: uppercase;
`;

// MENU //////////////

export const SMenuIcon = styled(RiMenu4Fill)`
    display: block;
    font-size: 32px;
    cursor: pointer;
`;
export const SMenu = styled.div`
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: ${v.headerHeight};
    right: 0;
    left: 0;
    width: 100%;
    min-height: 10vh;
    background: ${({ theme }) => theme.bg2};
    padding: ${v.lgSpacing};
    box-shadow: 0 2px 2px ${({ theme }) => theme.bg2};
    color: ${({ theme }) => theme.text};

    @media ${b.md} {
        display: none;
    }
`;
export const SMenuTitle = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: ${v.lgSpacing};
    text-transform: uppercase;
`;
export const SMenuNav = styled.div`
    width: 100%;
    margin-bottom: ${v.lgSpacing};
`;
