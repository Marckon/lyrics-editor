import React from 'react';
import {
    Button,
    Popconfirm
} from 'antd';

const EditorPanel = (props) => {
    return (
        <div className={props.className}>
            <Button onClick={props.stampTime} type={"primary"}>插入时间戳</Button>
            <Button>测试</Button>
            <Popconfirm placement={"top"} onConfirm={props.clearAllLines} title={"确认清空所有歌词？"} okText={"确定"} cancelText={"取消"}>
                <Button type={"danger"}>清空</Button>
            </Popconfirm>
        </div>

    )
};

export default EditorPanel;