import React, {useContext} from 'react';
import EditorPanel from "./EditorPanel";
import TextLine from "./TextLine";
import styles from './index.scss';
import {LyricContext, MusicContext} from "../../index";
import {getMinInMs, getMsInMs, getSecInMs} from "../../util";
import {appendTextLine, appendTimeStamp, clearAllTextLines} from "../../actions/lyricActions";

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
    return (
        <div className={props.className}>
            <EditorPanel className={styles["editor-panel"]} stampTime={stampTime} clearAllLines={clearAllLines}/>
            <div className={styles.textLinesArea}>
                {
                    lctx.lyricState.textLines.map((v, i) => (
                        <TextLine time={lctx.lyricState.timeStamps[i]} key={`line-${i}`}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Editor;