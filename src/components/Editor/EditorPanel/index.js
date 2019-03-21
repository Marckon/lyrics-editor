import React,{useContext} from 'react';
import {
    Button,
    Popconfirm
} from 'antd';
import {MusicContext} from "../../../index";

const EditorPanel = (props) => {
    const mctx=useContext(MusicContext);
    return (
        <div className={props.className}>
            <Button onClick={props.stampTime} type={"primary"}>插入时间戳</Button>
            <Button icon={mctx.musicState.isPlay ? "pause" : "caret-right"}
                    onClick={props.setPlayPause}>{mctx.musicState.isPlay ? "暂停" : "播放"}</Button>
            <Button>测试</Button>
            <Popconfirm placement={"top"} onConfirm={props.clearAllLines} title={"确认清空所有歌词？"} okText={"确定"} cancelText={"取消"}>
                <Button type={"danger"}>清空</Button>
            </Popconfirm>
        </div>

    )
};

export default EditorPanel;