import React from "react";
import styled from "styled-components";

const Word = ({ children: word }) => {
    return <SWord>{word}</SWord>;
};

const SWord = styled.span`
    font-size: 18px;
`;

export default Word;
