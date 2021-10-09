import styled from "styled-components";

import { v, b, s } from "../../styles/variables";

import { IoRefreshOutline } from "react-icons/io5";

export const STypeTest = styled.div`
    display: flex;
    justify-content: center;
`;

export const STypeTestContent = styled.div`
    width: 100%;
    @media ${b.sm} {
        width: ${s.sm};
    }
`;

export const SInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.primary};
    font-family: inherit;
    font-size: 18px;
    padding: ${v.smSpacing};
    text-align: center;
`;

export const SRelativeContainer = styled.div`
    margin-top: ${v.smSpacing};
    position: relative;
`;

export const STimer = styled.span`
    height: 100%;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: ${v.smSpacing};
    line-height: 100%;
    color: ${({ theme }) => theme.textInvert};
    background: ${({ theme }) => theme.primary};
`;
export const SRefreshButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    outline: none;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${v.smSpacing};
    color: ${({ theme }) => theme.textInvert};
    background: ${({ theme }) => theme.primary};
`;
export const SRefreshIcon = styled(IoRefreshOutline)`
    display: block;
    font-size: 18px;
`;
