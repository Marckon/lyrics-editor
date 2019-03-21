import React, {useContext, useRef,useState} from 'react';
import {
    Upload,
    Icon,
    Slider,
    Row,
    Col,
    Button,
    Popover
} from 'antd'
import {MusicContext} from "../../index";
import {
    setAudioElement,
    setMusicCurrent,
    setMusicDuration,
    setMusicName,
    setMusicPlay,
    setMusicSrc
} from "../../actions/musicActions";
import {
    getSecInMs,
    getMinInMs,
    getMsInMs
} from "../../util";
import styles from './index.scss';

const Dragger = Upload.Dragger;
const Player = (props) => {
    const ctx = useContext(MusicContext);
    const audio = useRef(null);

    //局部状态更新（局部更新可以保证只有当前组件更新，编辑器中的时间戳可以在歌曲播放时正常操作）
   const [tempCurrentTime,setTempCurrenTime]=useState(0);
    //定义dragger的参数
    const draggerProps = {
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
        ctx.dispatch(setAudioElement(audio));
    };
    //播放时
    const timeUpdate=()=>{
        setTempCurrenTime(ctx.musicState.audio.current.currentTime);
    };
    //跳转播放
    const changeCurrent = value => {
        ctx.dispatch(setMusicCurrent(value / 100 * ctx.musicState.duration));
    };
    //进度条提示格式
    const tipFormatter = value => {
        let ms = value / 100 * ctx.musicState.audio.current.duration;
        return `${getMinInMs(ms)}:${getSecInMs(ms)}:${getMsInMs(ms)}`;
    };
    //设置播放暂停
    const setPlayPause = () => {
        let isPlay = ctx.musicState.isPlay;
        isPlay ? audio.current.pause() : audio.current.play();
        ctx.dispatch(setMusicPlay(!isPlay));
    };
    //音量调节
    const volumeChange = value => {
        audio.current.volume = value / 100;
    };
    return (
        <div className={props.className}>
            <div className={styles.dragger}>
                <Dragger {...draggerProps}>
                    <p className="ant-upload-drag-icon">
                        <Icon type={"inbox"}/>
                    </p>
                    <p>点击或拖拽上传歌曲</p>
                </Dragger>
            </div>
            <audio src={ctx.musicState.src}
                   autoPlay={true}
                   onCanPlay={canPlay}
                   onTimeUpdate={timeUpdate}
                   ref={audio}/>
            <Row type={"flex"} justify={"center"} align={"middle"} className={styles["control-area"]}>
                {/*歌曲名*/}
                <Col span={18}>
                    <p>{ctx.musicState.musicName}</p>
                </Col>
                {/*播放按钮*/}
                <Col span={3}>
                    <div>
                        <Button shape={"circle"} icon={ctx.musicState.isPlay ? "pause" : "caret-right"}
                                onClick={setPlayPause}/>
                    </div>
                </Col>
                {/*音量按钮*/}
                <Col span={3}>
                    <div>
                        <Popover content={(
                            <div style={{height: "60px"}}>
                                <Slider
                                    defaultValue={50}
                                    onChange={volumeChange}
                                    vertical={true}
                                />
                            </div>
                        )}>
                            <Button shape={"circle"} icon={"sound"}/>
                        </Popover>
                    </div>
                </Col>
            </Row>
            {/*进度条*/}
            <Row type={"flex"} align={"middle"}>
                <Col span={20}>
                    {
                        ctx.musicState.audio&&<Slider
                            value={tempCurrentTime / ctx.musicState.audio.current.duration * 100}
                            onChange={changeCurrent}
                            step={0.01}
                            tipFormatter={tipFormatter}/>
                    }
                </Col>
                <Col span={4}>
                    {
                            ctx.musicState.audio&&
                            <span>{getMinInMs(tempCurrentTime)}:{getSecInMs(tempCurrentTime)}/{getMinInMs(ctx.musicState.audio.current.duration)}:{getSecInMs(ctx.musicState.audio.current.duration)}</span>
                    }
                </Col>
            </Row>
        </div>
    )
};

export default Player;