import {APPEND_TEXTLINE, APPEND_TIMESTAMP, CLEAR_ALLTEXTLINES} from "../actions/lyricActions";


export const lyricReducer=(state,action)=>{
    switch (action.type) {
        case APPEND_TEXTLINE:
            return Object.assign({},state,{textLines: state.textLines.concat(action.text)});
        case APPEND_TIMESTAMP:
            return Object.assign({},state,{timeStamps: state.timeStamps.concat(action.timeStamp)});
        case CLEAR_ALLTEXTLINES:
            return Object.assign({},state,{timeStamps: [],textLines: []});
        default:
            return state;
    }
};