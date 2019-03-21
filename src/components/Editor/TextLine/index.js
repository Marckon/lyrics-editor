import React from 'react';
import {
    Input,
    Row,
    Col
} from 'antd';
import styles from './index.scss';

const TextLine=(props)=>{
    return (
        <Input type={"text"} addonBefore={(<span>{props.time}</span>)}/>
    )
};

export default TextLine;