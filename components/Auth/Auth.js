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

const initialForm = (formFields) => {
    return formFields.reduce((r, v) => Object.assign(r, { [v.inputName]: "" }), {});
};

const Auth = ({ formData, onSubmit }) => {
    let { formFields } = formData;
    const [form, setForm] = useState(initialForm(formFields));

    const changeHandler = (e) => {
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // 'half-cooked' form validation
        for (const field in form) {
            if (!form[field].length) return;
        }
        // Submit callback to parent component
        onSubmit(form, () => {
            // CALLBACK
            // Reset form
            setForm(initialForm(formFields));
        });
    };

    return (
        <SAuth>
            <SForm autoComplete="off" noValidate>
                <SFormTitle>{formData.title}</SFormTitle>
                {formFields.map(({ inputName, label, type }, index) => {
                    return (
                        <SFormControl key={index}>
                            <SLabel htmlFor={inputName}>{label}</SLabel>
                            <SInput
                                name={inputName}
                                type={type}
                                onChange={changeHandler}
                                value={form[inputName]}
                            />
                        </SFormControl>
                    );
                })}
                <SFormControl>
                    <SSubmitButton onClick={submitHandler}>{formData.submit}</SSubmitButton>
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
