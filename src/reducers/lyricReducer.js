import {
    APPEND_TEXTLINE,
    APPEND_TIMESTAMP,
    CHANGE_TEXTLINE,
    CHANGE_TIMESTAMP,
    CLEAR_ALLTEXTLINES
} from "../actions/lyricActions";


export const lyricReducer = (state, action) => {
    switch (action.type) {
        case APPEND_TEXTLINE:
            return Object.assign({}, state, {textLines: state.textLines.concat(action.text)});
        case APPEND_TIMESTAMP:
            return Object.assign({}, state, {timeStamps: state.timeStamps.concat(action.timeStamp)});
        case CLEAR_ALLTEXTLINES:
            return Object.assign({}, state, {timeStamps: [], textLines: []});
        case CHANGE_TIMESTAMP:
            let tempTs = state.timeStamps;
            tempTs[action.index] = action.newTs;
            return Object.assign({}, state, {timeStamps: tempTs});
        case CHANGE_TEXTLINE:
            let tempTl = state.textLines;
            tempTl[action.index] = action.newText;
            return Object.assign({}, state, {textLines: tempTl});
        default:
            return state;
    }
};