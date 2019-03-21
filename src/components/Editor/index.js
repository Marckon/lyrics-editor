import React, {useContext} from 'react';
import EditorPanel from "./EditorPanel";
import TextLine from "./TextLine";
import styles from './index.scss';
import {LyricContext, MusicContext} from "../../index";
import {getMinInMs, getMsInMs, getSecInMs, timeStampToMs} from "../../util";
import {
    appendTextLine,
    appendTimeStamp,
    changeTextLine,
    changeTimeStamp,
    clearAllTextLines, deleteLine
} from "../../actions/lyricActions";
import {setMusicCurrent, setMusicPlay} from "../../actions/musicActions";

const Editor = (props) => {
    const mctx = useContext(MusicContext);
    const lctx=useContext(LyricContext);
    let audio=mctx.musicState.audio;

    //播放暂停
    const setPlayPause=()=>{
        let isPlay=mctx.musicState.isPlay;
        isPlay ? audio.current.pause() : audio.current.play();
        mctx.dispatch(setMusicPlay(!isPlay));
    };
    //插入时间戳
    const stampTime = () => {
        lctx.dispatch(appendTimeStamp(`${getMinInMs(mctx.musicState.audio.current.currentTime)}:${getSecInMs(mctx.musicState.audio.current.currentTime)}.${getMsInMs(mctx.musicState.audio.current.currentTime)}`));
        lctx.dispatch(appendTextLine(1))
    };
    //删除行
    const onDeleteLine=index=>{
        lctx.dispatch(deleteLine(index));
    };
    //清空所有行
    const clearAllLines=()=>{
        lctx.dispatch(clearAllTextLines());
    };
    //改写时间戳
    const onChangeTimeStamp=(ev,index)=>{
        lctx.dispatch(changeTimeStamp(index,ev.target.value));
    };
    //改写歌词行
    const onChangeTextLine=(ev,index)=>{
        lctx.dispatch(changeTextLine(index,ev.target.value));
    };
    //跳转播放
    const jumpPlay=index=>{
        let targetTime=timeStampToMs(lctx.lyricState.timeStamps[index]);
        console.log(targetTime)
        mctx.dispatch(setMusicCurrent(targetTime));
        mctx.dispatch(setMusicPlay(true));
        mctx.musicState.audio.current.play();
    };
    return (
        <div className={props.className}>
            <EditorPanel
                className={styles["editor-panel"]}
                stampTime={stampTime}
                clearAllLines={clearAllLines}
                setPlayPause={setPlayPause}
            />
            <div className={styles.textLinesArea}>
                {
                    lctx.lyricState.textLines.map((v, i) => (
                        <TextLine
                            time={lctx.lyricState.timeStamps[i]}
                            key={`line-${i}`}
                            onChangeTimeStamp={onChangeTimeStamp}
                            onChangeTextLine={onChangeTextLine}
                            onPressEnter={stampTime}
                            onDeleteLine={onDeleteLine}
                            jumpPlay={jumpPlay}
                            index={i}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Editor;