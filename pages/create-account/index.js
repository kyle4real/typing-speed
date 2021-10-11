import React from "react";
import Auth from "../../components/Auth/Auth";

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
        },
        {
            label: "Email",
            type: "text",
        },
        {
            label: "Password",
            type: "password",
        },
        {
            label: "Confirm Password",
            type: "password",
        },
    ],
};

const CreateAccount = () => {
    return <Auth formData={formData} />;
};

export default CreateAccount;
