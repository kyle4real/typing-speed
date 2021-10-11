import React from "react";
import Auth from "../../components/Auth/Auth";
import * as api from "./../../utils/axios";

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
            inputName: "email",
        },
        {
            label: "Password",
            type: "password",
            inputName: "password",
        },
    ],
};

const Login = () => {
    const loginHandler = async (form, callback) => {
        const { data } = await api.login(form);
    };

    return <Auth formData={formData} onSubmit={loginHandler} />;
};

export default Login;
