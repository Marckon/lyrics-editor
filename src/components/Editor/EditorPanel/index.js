import React, {useContext} from 'react';
import {
    Button,
    Popconfirm
} from 'antd';
import {MusicContext} from "../../../index";

const EditorPanel = (props) => {
    const mctx = useContext(MusicContext);
    return (
        <div className={props.className}>
            <Button onClick={props.stampTime} type={"primary"}>插入时间戳</Button>
            <Button icon={mctx.musicState.isPlay ? "pause" : "caret-right"}
                    onClick={props.setPlayPause}>{mctx.musicState.isPlay ? "暂停" : "播放"}</Button>
            <Button onClick={props.testLyric}>{props.isTest ? "暂停测试" : "测试"}</Button>
            <Popconfirm placement={"top"} onConfirm={props.clearAllLines} title={"确认清空所有歌词？"} okText={"确定"}
                        cancelText={"取消"}>
                <Button type={"danger"}>清空</Button>
            </Popconfirm>
            <Button icon={"download"} type={"primary"} onClick={props.generateFile}>生成歌词文件</Button>
        </div>

    )
};

export default EditorPanel;