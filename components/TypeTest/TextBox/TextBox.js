import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { wordsActions } from "../../../app/slices/wordsSlice";
import CurrentWord from "./CurrentWord/CurrentWord";
import {
    SCenter,
    SCurrent,
    SCurrentWord,
    SFinished,
    SFinishedWords,
    STextBox,
    SUpcoming,
    SUpcomingWords,
    SWords,
} from "./styles";
import Word from "./Word/Word";

const TextBox = ({ words, input, setInput, on }) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const finishedRef = useRef(null);
    const firstTime = useRef(true);
    const { currentWord, upcomingWords, finishedWords, correctWords } = useSelector(
        (state) => state.words
    );
    const [offsetWidth, setOffsetWidth] = useState(0);

    const [valid, setValid] = useState(true);

    // On Mount
    useEffect(() => {
        dispatch(
            wordsActions.replaceState({
                currentWord: words[0].id,
                upcomingWords: words.slice(1).reduce((r, v) => {
                    return r.concat(v.id);
                }, []),
            })
        );
    }, [dispatch, words]);

    useEffect(() => {
        if (!ref.current) return;
        if (firstTime.current) {
            setOffsetWidth((p) => p - ref.current.offsetWidth / 2);
            firstTime.current = false;
        } else {
            setOffsetWidth(
                (p) => p - (finishedRef.current.offsetWidth + ref.current.offsetWidth) / 2
            );
        }
    }, [currentWord]);

    const checkValidity = useCallback(
        (input) => {
            const word = words.find((item) => item.id === currentWord).word;
            const inputLength = input.trim().length;
            const currentWordLength = word.length;
            if (inputLength > currentWordLength) return false;
            for (let i = 0; i < inputLength; i++) {
                if (word[i] !== input[i]) return false;
            }
            return true;
        },
        [currentWord, words]
    );

    const checkIfSpacebar = useCallback((input) => {
        return input.includes(" ");
    }, []);

    const addIfValid = useCallback(
        (input) => {
            console.log(input.trim());
            const word = words.find((item) => item.id === currentWord).word;
            if (input.trim() === word) {
                dispatch(wordsActions.addCorrectWord(currentWord));
            }
        },
        [currentWord, dispatch, words]
    );

    useEffect(() => {
        if (!on) return;
        const spacebar = checkIfSpacebar(input);
        if (spacebar) {
            addIfValid(input);
            dispatch(wordsActions.nextWord());
            setInput("");
        }

        const isValid = checkValidity(input);
        if (!isValid) setValid(false);
        else setValid(true);
    }, [input, on, checkValidity, checkIfSpacebar, dispatch, setInput, addIfValid]);

    useEffect(() => {
        console.log(correctWords);
    }, [correctWords]);

    return (
        <STextBox>
            <SCenter>
                <SWords style={{ left: offsetWidth }}>
                    {words.map(({ word, id }, index) => {
                        let wordComponent;
                        if (finishedWords.includes(id)) {
                            const isCorrect = correctWords.includes(id);
                            if (id + 1 === currentWord)
                                wordComponent = (
                                    <SFinished ref={finishedRef} isCorrect={isCorrect}>
                                        {word}
                                    </SFinished>
                                );
                            else
                                wordComponent = <SFinished isCorrect={isCorrect}>{word}</SFinished>;
                        } else if (upcomingWords.includes(id)) {
                            wordComponent = <SUpcoming>{word}</SUpcoming>;
                        } else {
                            wordComponent = (
                                <SCurrent ref={ref} isValid={valid}>
                                    {word}
                                </SCurrent>
                            );
                        }
                        return <Fragment key={index}>{wordComponent}</Fragment>;
                    })}
                </SWords>
            </SCenter>
        </STextBox>
    );
};

export default TextBox;
