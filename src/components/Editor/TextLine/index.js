import React from 'react';
import {
    Input,
    Popover,
    Button
} from 'antd';
import styles from './index.scss';

const TextLine = (props) => {
    const TimeStamp = () => {
        return (
            <Popover content={
                <div className={styles.toolTip}>
                    <Input type={"text"} defaultValue={props.time}
                           onPressEnter={e => props.onChangeTimeStamp(e, props.index)}/>
                    <Button type={"primary"} onClick={() => props.onDeleteLine(props.index)}>删除行</Button>
                    <Button type={"danger"} onClick={() => props.jumpPlay(props.index)}>播放</Button>
                </div>}>
                <span>{props.time}</span>
            </Popover>
        )
    };
    return (
        <Input type={"text"}
               addonBefore={(<TimeStamp/>)}
               onChange={e => props.onChangeTextLine(e, props.index)}
               onPressEnter={props.onPressEnter}
        />
    )
};

export default TextLine;