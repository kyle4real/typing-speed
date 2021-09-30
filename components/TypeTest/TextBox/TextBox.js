import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { wordsActions } from "../../../app/slices/wordsSlice";
import CurrentWord from "./CurrentWord/CurrentWord";
import {
    SCenter,
    SCurrent,
    SCurrentWord,
    SFinishedWords,
    STextBox,
    SUpcomingWords,
} from "./styles";
import Word from "./Word/Word";

const TextBox = ({ words, input, setInput, on }) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const { currentWord, upcomingWords, finishedWords } = useSelector((state) => state.words);
    const [offsetWidth, setOffsetWidth] = useState(0);

    const [valid, setValid] = useState(true);

    // On Mount
    useEffect(() => {
        dispatch(
            wordsActions.replaceState({
                currentWord: words[0],
                upcomingWords: words.slice(1),
            })
        );
    }, [dispatch, words]);

    useEffect(() => {
        setOffsetWidth(ref.current ? ref.current.offsetWidth : 0);
    }, [currentWord]);

    const checkValidity = useCallback(() => {
        const inputLength = input.trim().length;
        const currentWordLength = currentWord.length;
        if (inputLength > currentWordLength) return false;
        for (let i = 0; i < inputLength; i++) {
            if (currentWord[i] !== input[i]) return false;
        }
        return true;
    }, [input, currentWord]);

    const checkIfSpacebar = useCallback(() => {
        return input.includes(" ");
    }, [input]);

    useEffect(() => {
        if (!on) return;
        const spacebar = checkIfSpacebar();
        if (spacebar) {
            dispatch(wordsActions.nextWord());
            setInput("");
        }

        // const isValid = checkValidity();
        // if (!isValid) setValid(false);
        // else setValid(true);
    }, [input, on, checkValidity, checkIfSpacebar, dispatch, setInput]);

    return (
        <STextBox>
            <SCenter>
                <SFinishedWords style={{ right: offsetWidth }}>
                    {finishedWords.map((word, index) => (
                        <Word key={index}>{word}&nbsp;</Word>
                    ))}
                </SFinishedWords>
                <SCurrentWord ref={ref} isValid={valid}>
                    {currentWord}
                </SCurrentWord>
                <SUpcomingWords style={{ left: offsetWidth }}>
                    {upcomingWords.map((word, index) => (
                        <Word key={index}>&nbsp;{word}</Word>
                    ))}
                </SUpcomingWords>
            </SCenter>
        </STextBox>
    );
};

export default TextBox;
