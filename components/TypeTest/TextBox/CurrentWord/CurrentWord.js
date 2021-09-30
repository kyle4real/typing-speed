import React from "react";
import styled from "styled-components";

const CurrentWord = ({ children: word }) => {
    return <SCurrentWord>{word}</SCurrentWord>;
};

const SCurrentWord = styled.span`
    color: ${({ theme }) => theme.primary};
`;

export default CurrentWord;
