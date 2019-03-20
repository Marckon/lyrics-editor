export const SET_MUSIC_SRC = "SET_MUSIC_SRC";
export const SET_MUSIC_DURATION = "SET_MUSIC_DURATION";
export const SET_MUSIC_PLAY = "SET_MUSIC_PLAY";
export const SET_MUSIC_CURRENT = "SET_MUSIC_CURRENT";
export const SET_MUSIC_NAME = "SET_MUSIC_NAME";
export const SET_MUSIC_ARTIST = "SET_MUSIC_ARTIST";
export const SET_MUSIC_VOLUME="SET_MUSIC_VOLUME";

const setMusicSrc = src => ({
    type: SET_MUSIC_SRC,
    src: src
});

const setMusicDuration = duration => ({
    type: SET_MUSIC_DURATION,
    duration: duration
});

const setMusicPlay = isPlay => ({
    type: SET_MUSIC_PLAY,
    isPlay: isPlay
});

const setMusicCurrent = currentTime => ({
    type: SET_MUSIC_CURRENT,
    currentTime
});

const setMusicName = name => ({
    type: SET_MUSIC_NAME,
    musicName: name
});

const setMusicArtist = artist => ({
    type: SET_MUSIC_ARTIST,
    artist
});

const setMusicVolume=vol=>({
    type:SET_MUSIC_VOLUME,
    volume:vol
})

export {
    setMusicCurrent,
    setMusicDuration,
    setMusicPlay,
    setMusicSrc,
    setMusicArtist,
    setMusicName,
    setMusicVolume
};