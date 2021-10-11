import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
    SAuth,
    SForm,
    SFormControl,
    SFormTitle,
    SInput,
    SLabel,
    SLink,
    SRedirect,
    SSubmitButton,
} from "./styles";

const Auth = ({ formData }) => {
    let { formFields } = formData;
    const [form, setForm] = useState(
        formFields.reduce((r, v) => Object.assign(r, { [v.label.toLowerCase()]: "" }), {})
    );

    const changeHandler = (e) => {
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    return (
        <SAuth>
            <SForm autoComplete="off">
                <SFormTitle>{formData.title}</SFormTitle>
                {formFields.map(({ label, type }, index) => {
                    const inputName = label.toLowerCase();
                    return (
                        <SFormControl key={index}>
                            <SLabel htmlFor={inputName}>{label}</SLabel>
                            <SInput name={inputName} type={type} onChange={changeHandler} />
                        </SFormControl>
                    );
                })}
                <SFormControl>
                    <SSubmitButton>{formData.submit}</SSubmitButton>
                </SFormControl>
                <SRedirect>
                    {formData.redirect.text}&nbsp;
                    <Link href={formData.redirect.button.href} passHref>
                        <SLink>{formData.redirect.button.text}</SLink>
                    </Link>
                </SRedirect>
            </SForm>
        </SAuth>
    );
};

Auth.defaultProps = {
    formData: {
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
                label: "Username",
                type: "text",
            },
            {
                label: "Password",
                type: "password",
            },
        ],
    },
};

export default Auth;
