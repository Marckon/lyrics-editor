export const APPEND_TIMESTAMP="APPEND_TIMESTAMP";
export const APPEND_TEXTLINE="APPEND_TEXTLINE";
export const CLEAR_ALLTEXTLINES="CLEAR_ALLTEXTLINES";

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

export {
    appendTextLine,
    appendTimeStamp,
    clearAllTextLines
}