import styled from "styled-components";

import { v, b, s } from "../../../styles/variables";

export const STextBox = styled.div`
    width: 100%;
    height: 100px;
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: inset 0 0 6px 0 rgba(0, 0, 0, 0.3);
    @media ${b.sm} {
        width: ${s.sm};
    }
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const SCenter = styled.div`
    position: relative;
    height: 16px;
`;

export const SWords = styled.div`
    position: absolute;
    transition: left 0.1s ease;
    left: 0;
    top: 0;
`;

export const SFinished = styled.span`
    font-size: 18px;
    padding: 0 4px;
    color: ${({ theme, isCorrect }) => (!isCorrect ? "crimson" : "green")};
`;
export const SUpcoming = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 18px;
    padding: 0 4px;
`;
export const SCurrent = styled.span`
    font-size: 18px;
    padding: 0 4px;
    color: ${({ theme, isValid }) => (isValid ? theme.primary : "red")};
`;
