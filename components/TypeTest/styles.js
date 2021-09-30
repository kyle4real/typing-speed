import styled from "styled-components";

import { v } from "../../styles/variables";

export const STypeTest = styled.div`
    display: flex;
    justify-content: center;
`;

export const SInput = styled.input`
    margin-top: ${v.smSpacing};
    border: none;
    outline: none;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.primary};
    font-family: inherit;
    font-size: 18px;
    padding: ${v.smSpacing};
    text-align: center;
`;

export const STimer = styled.span`
    display: block;
    margin-top: ${v.lgSpacing};
    text-align: center;
    font-size: 24px;
`;
