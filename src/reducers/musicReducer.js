import {
    SET_AUDIO_ELEMENT,
    SET_MUSIC_ARTIST,
    SET_MUSIC_CURRENT,
    SET_MUSIC_DURATION, SET_MUSIC_NAME,
    SET_MUSIC_PLAY,
    SET_MUSIC_SRC
} from "../actions/musicActions";


export const musicReducer = (state, action) => {
    switch (action.type) {
        case SET_MUSIC_SRC:
            return Object.assign({}, state, {src: action.src});
        case SET_MUSIC_CURRENT:
            state.audio.current.currentTime=action.currentTime;
            return Object.assign({}, state, {currentTime: action.currentTime});
        case SET_MUSIC_PLAY:
            return Object.assign({}, state, {isPlay: action.isPlay});
        case SET_MUSIC_DURATION:
            return Object.assign({}, state, {duration: action.duration});
        case SET_MUSIC_ARTIST:
            return Object.assign({}, state, {artist: action.artist});
        case SET_MUSIC_NAME:
            return Object.assign({}, state, {musicName: action.musicName});
        case SET_AUDIO_ELEMENT:
            return Object.assign({},state,{audio:action.audio});
        default:
            return state;
    }
};

