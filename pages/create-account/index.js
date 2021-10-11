import React from "react";
import Auth from "../../components/Auth/Auth";
import * as api from "./../../utils/axios";

const formData = {
    title: "Create Account",
    type: "create-account",
    submit: "Create Account",
    redirect: {
        text: "Have an account?",
        button: {
            text: "Log In",
            href: "/login",
        },
    },
    formFields: [
        {
            label: "Name",
            type: "text",
            inputName: "name",
        },
        {
            label: "Email",
            type: "email",
            inputName: "email",
        },
        {
            label: "Password",
            type: "password",
            inputName: "password",
        },
        {
            label: "Confirm Password",
            type: "password",
            inputName: "confirmPassword",
        },
    ],
};

const CreateAccount = () => {
    const createAccountHandler = async (form, callback) => {
        const { data } = await api.createAccount(form);
    };

    return <Auth formData={formData} onSubmit={createAccountHandler} />;
};

export default CreateAccount;
