import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../app/slices/uiSlice";

import logo from "../../../public/logo.png";

import {
    SButton,
    SFlex,
    SHeader,
    SHeaderFixed,
    SHeaderMain,
    SLogo,
    SMenu,
    SMenuIcon,
    SMenuNav,
    SMenuTitle,
    SNav,
    SNavLink,
} from "./styles";

const Header = ({ headerData }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { route } = useRouter();
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
                            {headerData.navLinks.map(({ text, href }, index) => (
                                <Link href={href} passHref key={index}>
                                    <SNavLink isActive={route === href}>{text}</SNavLink>
                                </Link>
                            ))}
                        </SNav>
                    </SFlex>
                    <SFlex>
                        <SButton onClick={() => router.push(headerData.button.href)}>
                            {headerData.button.text}
                        </SButton>
                    </SFlex>
                    <SFlex>
                        <SMenuIcon onClick={() => dispatch(uiActions.menuToggle())} />
                    </SFlex>
                    {menuOpen && (
                        <SMenu>
                            <SMenuTitle>Navigation</SMenuTitle>
                            <SMenuNav>
                                {headerData.navLinks.map(({ text, href }, index) => (
                                    <Link href={href} passHref key={index}>
                                        <SNavLink isActive={route === href}>{text}</SNavLink>
                                    </Link>
                                ))}
                            </SMenuNav>
                            <SButton onClick={() => router.push(headerData.button.href)}>
                                {headerData.button.text}
                            </SButton>
                        </SMenu>
                    )}
                </SHeaderMain>
            </SHeaderFixed>
        </>
    );
};

export default Header;
