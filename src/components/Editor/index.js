import React, {useContext} from 'react';
import EditorPanel from "./EditorPanel";
import TextLine from "./TextLine";
import styles from './index.scss';
import {LyricContext, MusicContext} from "../../index";
import {getMinInMs, getMsInMs, getSecInMs} from "../../util";
import {
    appendTextLine,
    appendTimeStamp,
    changeTextLine,
    changeTimeStamp,
    clearAllTextLines
} from "../../actions/lyricActions";

const Editor = (props) => {
    const mctx = useContext(MusicContext);
    const lctx=useContext(LyricContext);

    //插入时间戳
    const stampTime = () => {
        lctx.dispatch(appendTimeStamp(`${getMinInMs(mctx.musicState.currentTime)}:${getSecInMs(mctx.musicState.currentTime)}.${getMsInMs(mctx.musicState.currentTime)}`));
        lctx.dispatch(appendTextLine(1))
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
    return (
        <div className={props.className}>
            <EditorPanel className={styles["editor-panel"]} stampTime={stampTime} clearAllLines={clearAllLines}/>
            <div className={styles.textLinesArea}>
                {
                    lctx.lyricState.textLines.map((v, i) => (
                        <TextLine
                            time={lctx.lyricState.timeStamps[i]}
                            key={`line-${i}`}
                            onChangeTimeStamp={onChangeTimeStamp}
                            onChangeTextLine={onChangeTextLine}
                            onPressEnter={stampTime}
                            index={i}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Editor;