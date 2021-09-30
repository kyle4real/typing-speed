import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../app/slices/uiSlice";

import logo from "../../public/logo.png";

import {
    SButton,
    SButtonContainer,
    SFlex,
    SHeader,
    SHeaderFixed,
    SHeaderMain,
    SLogo,
    SLogoContainer,
    SMenu,
    SMenuButton,
    SMenuButtonContainer,
    SMenuCarrot,
    SMenuContainer,
    SMenuIcon,
    SMenuIconContainer,
    SMenuNav,
    SMenuNavItem,
    SMenuNavItemContainer,
    SMenuSection,
    SMenuSectionTitle,
    SMenuTitle,
    SNav,
    SNavItem,
    SNavItemContainer,
    SNavLink,
} from "./styles";

const Header = () => {
    const dispatch = useDispatch();
    const { menuOpen } = useSelector((state) => state.ui);

    return (
        <>
            <SHeader />
            <SHeaderFixed>
                <SHeaderMain>
                    <SFlex>
                        <Link href="/" passHref>
                            <SLogo>
                                <Image src={logo} alt="Logo typing hands" layout="responsive" />
                            </SLogo>
                        </Link>
                    </SFlex>
                    <SFlex>
                        <SNav>
                            <Link href="/stats" passHref>
                                <SNavLink>Stats</SNavLink>
                            </Link>
                            <Link href="/" passHref>
                                <SNavLink isActive>Type Test</SNavLink>
                            </Link>
                            <Link href="/ranks" passHref>
                                <SNavLink>Ranks</SNavLink>
                            </Link>
                        </SNav>
                    </SFlex>
                    <SFlex>
                        <SButton>Sign In</SButton>
                    </SFlex>
                    <SFlex>
                        <SMenuIcon onClick={() => dispatch(uiActions.menuToggle())} />
                    </SFlex>
                    <>
                        {menuOpen && (
                            <SMenu>
                                <SMenuTitle>Navigation</SMenuTitle>
                                <SMenuNav>
                                    <Link href="/stats" passHref>
                                        <SNavLink>Stats</SNavLink>
                                    </Link>
                                    <Link href="/" passHref>
                                        <SNavLink>Type Test</SNavLink>
                                    </Link>
                                    <Link href="/ranks" passHref>
                                        <SNavLink>Ranks</SNavLink>
                                    </Link>
                                </SMenuNav>
                                <>
                                    <SButton>Sign in</SButton>
                                </>
                            </SMenu>
                        )}
                    </>
                </SHeaderMain>
            </SHeaderFixed>
        </>
    );
};

export default Header;
