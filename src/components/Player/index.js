import React, {useContext} from 'react';
import {
    Upload,
    Icon,
    message
} from 'antd'
import {MusicContext} from "../../index";
import {setMusicDuration, setMusicName, setMusicSrc} from "../../actions/musicActions";

const Dragger = Upload.Dragger;
const Player = () => {
    const ctx = useContext(MusicContext);

    //定义dragger的参数
    const props = {
        multiple: false,
        beforeUpload: (file) => {
            //设置曲名
            ctx.dispatch(setMusicName(file.name));
            const url = URL.createObjectURL(file);
            //设置资源链接
            ctx.dispatch(setMusicSrc(url));
            //不进行网络传输
            return Promise.reject()
        }
    };

    //音乐加载完毕
    const canPlay = ev => {
        let music = ev.target;
        //设置音乐时长
        ctx.dispatch(setMusicDuration(music.duration));

    };
    return (
        <div>
            <audio src={ctx.musicState.src} autoPlay={true} controls onCanPlay={canPlay}/>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <Icon type={"inbox"}/>
                </p>
                <p>点击或拖动上传歌曲</p>
            </Dragger>
        </div>
    )
};

export default Player;