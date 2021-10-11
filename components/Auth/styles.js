import styled from "styled-components";

import { v } from "../../styles/variables";

export const SAuth = styled.div`
    display: flex;
    justify-content: center;
`;

export const SFormTitle = styled.h1`
    text-align: center;
    margin-bottom: ${v.mdSpacing};
    font-size: 18px;
    text-transform: uppercase;
    font-weight: normal;
    border-radius: 4px;
    color: ${({ theme }) => theme.primary};
`;

export const SForm = styled.form``;

export const SFormControl = styled.div`
    :not(:last-of-type) {
        margin-bottom: ${v.mdSpacing};
    }
`;

export const SLabel = styled.label`
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
    line-height: 100%;
    padding-bottom: 4px;
`;

export const SInput = styled.input`
    display: block;
    width: 100%;
    font-size: 14px;
    padding: ${v.smSpacing} calc(${v.smSpacing} + 4px);
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 2px;
    outline: none;
    transition: 0.3s ease border-color;
    :focus {
        border-radius: 0;
        border-color: ${({ theme }) => theme.primary};
    }
`;

export const SSubmitButton = styled.button`
    outline: none;
    border: none;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textInvert};
    width: 100%;
    padding: ${v.smSpacing};
    border-radius: 4px;
    font-family: inherit;
    cursor: pointer;
`;

export const SRedirect = styled.span`
    display: block;
    font-size: 12px;
    text-align: center;
    margin-top: ${v.smSpacing};
`;
export const SLink = styled.a`
    color: ${({ theme }) => theme.primary};
`;
