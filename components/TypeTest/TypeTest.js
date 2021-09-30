import React, { useState, useRef, useEffect } from "react";
import { SInput, STypeTest, STimer } from "./styles";
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
const words = wordsArr.reduce((r, v, i) => {
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
            <div>
                <TextBox wordsArr={words} input={input} setInput={setInput} on={on} />
                <SInput value={input} onChange={changeHandler} />
                <STimer>{count}</STimer>
            </div>
        </STypeTest>
    );
};

export default TypeTest;
