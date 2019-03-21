export const APPEND_TIMESTAMP="APPEND_TIMESTAMP";
export const APPEND_TEXTLINE="APPEND_TEXTLINE";
export const CLEAR_ALLTEXTLINES="CLEAR_ALLTEXTLINES";
export const CHANGE_TIMESTAMP="CHANGE_TIMESTAMP";
export const CHANGE_TEXTLINE="CHANGE_TEXTLINE";

const appendTimeStamp=timeStamp=>({
    type:APPEND_TIMESTAMP,
    timeStamp
});

const appendTextLine=text=>({
    type:APPEND_TEXTLINE,
    text
});

const clearAllTextLines=()=>({
    type:CLEAR_ALLTEXTLINES,
});

const changeTimeStamp=(index,newTs)=>({
    type:CHANGE_TIMESTAMP,
    newTs,
    index
});

const changeTextLine=(index,newText)=>({
    type:CHANGE_TEXTLINE,
    newText,
    index
});

export {
    appendTextLine,
    appendTimeStamp,
    clearAllTextLines,
    changeTimeStamp,
    changeTextLine
}