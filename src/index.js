import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import {
    Layout,
    Row,
    Col
} from 'antd';
import AppHeader from "./components/AppHeader";
import Player from "./components/Player";
import {musicReducer} from "./reducers/musicReducer";
import Editor from "./components/Editor";
import {lyricReducer} from "./reducers/lyricReducer";
import styles from './index.scss';

const {Content} = Layout;
export const MusicContext = React.createContext(null);
export const LyricContext = React.createContext(null);

const App = () => {
    //歌曲上下文
    const [musicState, dispatch] = useReducer(musicReducer, {
        src: null,
        duration: 0,
        isPlay: true,
        currentTime: 0,
    });
    //歌词上下文
    const [lyricState, lyricDispatch] = useReducer(lyricReducer, {
        timeStamps: [],
        textLines: []
    });
    return (
        <MusicContext.Provider value={{musicState, dispatch}}>
            <LyricContext.Provider value={{lyricState, dispatch: lyricDispatch}}>
                <Layout className={styles.layout}>
                    <AppHeader/>
                    <Content className={styles.content}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Player className={styles.player}/>
                            </Col>
                            <Col span={8}>
                                <Editor className={styles.editor}/>
                            </Col>
                            <Col span={8}>
                                <div style={{backgroundColor: "#ddd", padding: 24, height: "inherit"}}> 测试器</div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </LyricContext.Provider>
        </MusicContext.Provider>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));

