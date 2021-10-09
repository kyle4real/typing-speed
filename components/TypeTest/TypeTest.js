import React, { useState, useRef, useEffect } from "react";
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

const wordsArr = [
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

const words = shuffle(wordsArr).reduce((r, v, i) => {
    return r.concat({
        word: v,
        id: i,
    });
}, []);

const TypeTest = () => {
    const timerRef = useRef(null);
    const [on, setOn] = useState(false);
    const [input, setInput] = useState("");
    const [count, setCount] = useState(60);

    const changeHandler = (e) => {
        setInput(e.target.value);
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
            setCount(60);
        }
    }, [count]);

    return (
        <STypeTest>
            <STypeTestContent>
                <TextBox wordsArr={words} input={input} setInput={setInput} on={on} />
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
