import React from "react";
import Auth from "../../components/Auth/Auth";

const formData = {
    title: "Log In",
    type: "login",
    submit: "Log In",
    redirect: {
        text: "Don't have an account?",
        button: {
            text: "Create One",
            href: "/create-account",
        },
    },
    formFields: [
        {
            label: "Email",
            type: "text",
        },
        {
            label: "Password",
            type: "password",
        },
    ],
};

const Login = () => {
    return <Auth formData={formData} />;
};

export default Login;
