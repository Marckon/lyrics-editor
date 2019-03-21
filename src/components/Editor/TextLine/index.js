import React from 'react';
import {
    Input,
    Row,
    Col,
    Popover
} from 'antd';
import styles from './index.scss';

const TextLine=(props)=>{
    const TimeStamp=()=>{
        return (
            <Popover content={<Input type={"text"} defaultValue={props.time} onPressEnter={e=>props.onChangeTimeStamp(e,props.index)}/>}>
                <span>{props.time}</span>
            </Popover>
        )
    };
    return (
        <Input type={"text"} addonBefore={(<TimeStamp/>)} onChange={e=>props.onChangeTextLine(e,props.index)} onPressEnter={props.onPressEnter}/>
    )
};

export default TextLine;