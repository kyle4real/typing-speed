import React from "react";
import Header from "./Header/Header";
import { SPage } from "./styles";

const headerData = {
    button: {
        text: "Sign In",
        href: "/login",
    },
    navLinks: [
        {
            text: "Stats",
            href: "/stats",
        },
        {
            text: "Type Test",
            href: "/",
        },
        {
            text: "Ranks",
            href: "/ranks",
        },
    ],
};

const Layout = ({ children }) => {
    return (
        <>
            <Header headerData={headerData} />
            <SPage>{children}</SPage>
        </>
    );
};

export default Layout;
