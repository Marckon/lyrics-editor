import React from 'react';
import {
    Upload,
    Icon,
    message
} from 'antd'

const Dragger=Upload.Dragger;
const Player=()=>{
    return(
        <div>
            <Dragger>
                <p className="ant-upload-drag-icon">
                    <Icon type={"inbox"}/>
                </p>
                <p>点击或拖动上传歌曲</p>
            </Dragger>
        </div>
    )
};

export default Player;