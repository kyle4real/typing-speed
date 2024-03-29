import styled from "styled-components";

import { v, s } from "../../../styles/variables";

import { IoShareSocialOutline, IoCheckmarkOutline } from "react-icons/io5";

export const SResults = styled.div`
    margin-top: ${v.lgSpacing};
`;

export const SLatestResult = styled.div`
    width: 100%;
    max-width: calc(${s.sm} / 2);
    margin: 0 auto;
    background: white;
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: ${v.cardBoxShadow};
    border-radius: 4px;
`;
export const STitle = styled.span`
    display: block;
    padding: ${v.smSpacing};
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textInvert};
`;
export const SWPM = styled.span`
    display: block;
    text-align: center;
    padding: ${v.mdSpacing};
    font-size: 32px;
`;
export const SList = styled.ul`
    padding: 0;
    list-style: none;
`;
export const SListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${v.smSpacing} ${v.mdSpacing};

    :nth-child(odd) {
        background: ${({ theme }) => theme.bg};
    }
`;
export const SLabel = styled.span``;
export const SDataDiv = styled.div`
    display: flex;
`;
export const SData = styled.span``;

export const SCorrectKS = styled.span`
    color: green;
`;
export const SIncorrectKS = styled.span`
    color: red;
`;

export const SResultOptions = styled.div`
    padding: ${v.mdSpacing} ${v.mdSpacing} ${v.smSpacing};
`;
export const SFlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const SSaveResult = styled.button`
    outline: none;
    border: none;
    background: ${({ theme, isSaved }) => (!isSaved ? theme.primary : "green")};
    color: ${({ theme }) => theme.textInvert};
    font-family: inherit;
    padding: ${v.smSpacing} ${v.mdSpacing};
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
`;
export const SCheckIcon = styled(IoCheckmarkOutline)`
    display: block;
    margin-right: -4px;
`;
export const SUndoSave = styled.button`
    outline: none;
    border: none;
    background: none;
    font-family: inherit;
    padding: ${v.smSpacing} ${v.mdSpacing};
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 12px;
`;
export const SShareResult = styled.button`
    outline: none;
    border: none;
    background: none;
    font-family: inherit;
    padding: ${v.smSpacing} ${v.mdSpacing};
    cursor: pointer;
    display: flex;
    align-items: center;
`;
export const SShareIcon = styled(IoShareSocialOutline)`
    display: block;
`;

export const SAutoSave = styled.div`
    margin-top: ${v.smSpacing};
    display: flex;
    align-items: center;
`;
export const SAutoSaveInput = styled.input`
    cursor: pointer;
    width: 10px;
`;
export const SAutoSaveLabel = styled.label`
    display: block;
    font-size: 12px;
    line-height: 100%;
`;

// TABLE

export const STableContainer = styled.div`
    margin-top: ${v.lgSpacing};
    overflow-y: auto;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 4px;
`;

export const STable = styled.table`
    border-collapse: collapse;
    width: 100%;
    min-width: ${s.sm};
    font-size: 15px;
`;

export const STableHead = styled.thead`
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textInvert};
`;

export const STableHeadTR = styled.tr``;

export const STableHeadTH = styled.th`
    font-weight: normal;
    padding: ${v.smSpacing} 0;
`;

export const STableBody = styled.tbody``;

export const STableBodyTR = styled.tr``;

export const STableBodyTD = styled.td`
    padding: ${v.smSpacing};
    text-align: center;
`;
