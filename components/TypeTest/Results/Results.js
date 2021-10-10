import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    SAutoSave,
    SAutoSaveInput,
    SAutoSaveLabel,
    SCheckIcon,
    SData,
    SFlexBox,
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
    const { results } = useSelector((state) => state.results);
    const [saved, setSaved] = useState();

    const saveHandler = () => {
        setSaved((p) => !p);
    };

    return (
        <SResults>
            <SLatestResult>
                <STitle>Latest Result</STitle>
                <SWPM>83 WPM</SWPM>
                <SList>
                    <SListItem>
                        <SLabel>Keystrokes</SLabel>
                        <SData>439</SData>
                    </SListItem>
                    <SListItem>
                        <SLabel>Accuracy</SLabel>
                        <SData>91.87%</SData>
                    </SListItem>
                    <SListItem>
                        <SLabel>Correct Words</SLabel>
                        <SData>76</SData>
                    </SListItem>
                    <SListItem>
                        <SLabel>Wrong Words</SLabel>
                        <SData>6</SData>
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
