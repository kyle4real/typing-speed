import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import {
    SAutoSave,
    SAutoSaveInput,
    SAutoSaveLabel,
    SCheckIcon,
    SCorrectKS,
    SData,
    SDataDiv,
    SFlexBox,
    SIncorrectKS,
    SLabel,
    SLatestResult,
    SList,
    SListItem,
    SResultOptions,
    SResults,
    SSaveResult,
    SShareIcon,
    SShareResult,
    STable,
    STableBody,
    STableBodyTD,
    STableBodyTR,
    STableContainer,
    STableHead,
    STableHeadTH,
    STableHeadTR,
    STitle,
    SUndoSave,
    SWPM,
} from "./styles";

const Results = () => {
    const { latestResult, results } = useSelector((state) => state.results);
    const [saved, setSaved] = useState();

    const saveHandler = () => {
        setSaved((p) => !p);
    };

    return (
        <SResults>
            {latestResult.length > 0 &&
                latestResult.map((latestResult, index) => {
                    const {
                        wpm,
                        keyStrokes,
                        correctKeyStrokes,
                        incorrectKeyStrokes,
                        correctWords,
                        incorrectWords,
                        accuracy,
                    } = latestResult;
                    return (
                        <Fragment key={index}>
                            <SLatestResult>
                                <STitle>Latest Result</STitle>
                                <SWPM>{wpm} WPM</SWPM>
                                <SList>
                                    <SListItem>
                                        <SLabel>Keystrokes</SLabel>
                                        <SDataDiv>
                                            <SData
                                                style={{
                                                    fontSize: 14,
                                                    display: "block",
                                                    marginRight: 8,
                                                }}
                                            >
                                                {"("}
                                                <SCorrectKS>{correctKeyStrokes}</SCorrectKS>
                                                {" | "}
                                                <SIncorrectKS>{incorrectKeyStrokes}</SIncorrectKS>
                                                {")"}
                                            </SData>
                                            <SData>{keyStrokes}</SData>
                                        </SDataDiv>
                                    </SListItem>
                                    <SListItem>
                                        <SLabel>Accuracy</SLabel>
                                        <SData>{accuracy}%</SData>
                                    </SListItem>
                                    <SListItem>
                                        <SLabel>Correct Words</SLabel>
                                        <SData>{correctWords}</SData>
                                    </SListItem>
                                    <SListItem>
                                        <SLabel>Incorrect Words</SLabel>
                                        <SData>{incorrectWords}</SData>
                                    </SListItem>
                                    <SListItem>
                                        <SLabel>Test Number</SLabel>
                                        <SData>1</SData>
                                    </SListItem>
                                </SList>
                                <SResultOptions>
                                    <SFlexBox>
                                        <SFlexBox>
                                            <SSaveResult onClick={saveHandler} isSaved={saved}>
                                                {!saved ? (
                                                    <>Save</>
                                                ) : (
                                                    <>
                                                        Saved&nbsp;
                                                        <SCheckIcon />
                                                    </>
                                                )}
                                            </SSaveResult>
                                            {saved && <SUndoSave>Undo</SUndoSave>}
                                        </SFlexBox>

                                        <SShareResult>
                                            <SShareIcon />
                                            &nbsp;Share
                                        </SShareResult>
                                    </SFlexBox>
                                    <SAutoSave>
                                        <SAutoSaveInput type="checkbox" />
                                        <SAutoSaveLabel>&nbsp;auto-save</SAutoSaveLabel>
                                    </SAutoSave>
                                </SResultOptions>
                            </SLatestResult>
                        </Fragment>
                    );
                })}
            <STableContainer>
                <STable>
                    <STableHead>
                        <STableHeadTR>
                            <STableHeadTH>#</STableHeadTH>
                            <STableHeadTH>WPM</STableHeadTH>
                            <STableHeadTH>Keystrokes</STableHeadTH>
                            <STableHeadTH>Accuracy</STableHeadTH>
                            <STableHeadTH>Correct</STableHeadTH>
                            <STableHeadTH>Wrong</STableHeadTH>
                        </STableHeadTR>
                    </STableHead>
                    <STableBody>
                        <STableBodyTR>
                            <STableBodyTD>1</STableBodyTD>
                            <STableBodyTD>81</STableBodyTD>
                            <STableBodyTD>439</STableBodyTD>
                            <STableBodyTD>91.87%</STableBodyTD>
                            <STableBodyTD>76</STableBodyTD>
                            <STableBodyTD>6</STableBodyTD>
                        </STableBodyTR>
                    </STableBody>
                </STable>
            </STableContainer>
        </SResults>
    );
};

export default Results;
