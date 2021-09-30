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
`;

export const SFinishedWords = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`;

export const SUpcomingWords = styled.div`
    position: absolute;
    left: 0;
    top: 0;
`;

export const SCurrentWord = styled.span`
    color: ${({ theme, isValid }) => (isValid ? theme.primary : "red")};
    font-size: 18px;
`;