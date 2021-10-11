import React, { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { resultsActions } from "../../app/slices/resultsSlice";
import Results from "./Results/Results";
import {
    SInput,
    STypeTest,
    STimer,
    STypeTestContent,
    SRefreshButton,
    SRefreshIcon,
    SFlexBox,
    SRelativeContainer,
} from "./styles";
import TextBox from "./TextBox/TextBox";

let wordsArr = [
    "consider",
    "minute",
    "accord",
    "evident",
    "practice",
    "intend",
    "concern",
    "commit",
    "issue",
    "approach",
    "establish",
    "utter",
    "engage",
    "obtain",
    "scarce",
    "policy",
    "straight",
    "stock",
    "apparent",
];

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

wordsArr = shuffle(wordsArr).reduce((r, v, i) => {
    return r.concat({
        word: v,
        id: i,
    });
}, []);

const reduceWords = (words) => {
    return words.reduce((r, v) => r.concat(v.word), []);
};
const wordsLength = (words) => {
    return words.length > 0 ? words.join(" ").length + 1 : 0;
};

const initialCount = 60;

const TypeTest = () => {
    const dispatch = useDispatch();
    const { correctWords, incorrectWords } = useSelector((state) => state.words);
    const timerRef = useRef(null);
    const [on, setOn] = useState(false);
    const [input, setInput] = useState("");
    const [count, setCount] = useState(initialCount);
    const [hide, setHide] = useState(false);
    const [keyStrokes, setKeyStrokes] = useState(0);

    const calcResult = useCallback(() => {
        const correctWordsArray = reduceWords(correctWords);
        const incorrectWordsArray = reduceWords(incorrectWords);
        // const allWordsArray = [...correctWordsArray, ...incorrectWordsArray];

        const correctWordsLength = wordsLength(correctWordsArray);
        const incorrectWordsLength = wordsLength(incorrectWordsArray);

        const totalRequiredKeyStrokes = correctWordsLength + incorrectWordsLength;
        const correctKeyStrokes = correctWordsLength;
        const incorrectKeyStrokes = keyStrokes - correctKeyStrokes;

        const WPM =
            Math.ceil(60 / initialCount) * Math.round(correctWordsArray.join(" ").length / 5);

        let accuracy;
        if (!incorrectWordsArray.length && !incorrectKeyStrokes) accuracy = 100;
        else if (!incorrectWordsArray.length && incorrectKeyStrokes) {
            accuracy =
                (totalRequiredKeyStrokes / (totalRequiredKeyStrokes + incorrectKeyStrokes)) * 100;
        } else if (incorrectWordsArray.length && !incorrectKeyStrokes) {
            accuracy =
                ((totalRequiredKeyStrokes - incorrectWordsLength) / totalRequiredKeyStrokes) * 100;
        } else if (incorrectWordsArray.length && incorrectKeyStrokes) {
            accuracy =
                ((totalRequiredKeyStrokes - incorrectWordsLength) /
                    (totalRequiredKeyStrokes + incorrectKeyStrokes)) *
                100;
        }
        accuracy = Number(accuracy.toFixed(2));

        const resultObj = {
            correctWords: correctWordsArray.length,
            incorrectWords: incorrectWordsArray.length,
            wpm: WPM,
            keyStrokes,
            correctKeyStrokes,
            incorrectKeyStrokes,
            totalRequiredKeyStrokes,
            accuracy,
        };

        // console.log(`Correct: ${correctWordsArray.join(" ")}`);
        // console.log(`Incorrect: ${incorrectWordsArray.join(" ")}`);
        // console.log(resultObj);
        dispatch(resultsActions.replaceLatestResult({ resultObj }));
    }, [correctWords, incorrectWords, keyStrokes, dispatch]);

    const changeHandler = (e) => {
        if (hide) return;
        setInput(e.target.value);
        setKeyStrokes((p) => p + 1);
        if (!on) setOn(true);
    };

    useEffect(() => {
        if (on) {
            setCount((p) => p - 1);
            timerRef.current = setInterval(() => {
                setCount((p) => p - 1);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => {
            clearInterval(timerRef.current);
        };
    }, [on]);

    useEffect(() => {
        if (count < 0) {
            setOn(false);
            setCount(initialCount);
            setHide(true);
            setInput("");
            calcResult();
        }
    }, [count, calcResult]);

    return (
        <STypeTest>
            <STypeTestContent>
                {!hide && <TextBox wordsArr={wordsArr} input={input} setInput={setInput} on={on} />}
                <SRelativeContainer>
                    <STimer>{count}</STimer>
                    <SInput value={input} onChange={changeHandler} />
                    <SRefreshButton>
                        <SRefreshIcon />
                    </SRefreshButton>
                </SRelativeContainer>
                <Results />
            </STypeTestContent>
        </STypeTest>
    );
};

export default TypeTest;
