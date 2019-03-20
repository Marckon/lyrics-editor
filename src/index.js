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

const {Content} = Layout;
export const MusicContext = React.createContext(null)
const App = () => {
    const [musicState, dispatch] = useReducer(musicReducer, {
        src: null,
        duration: 0,
        isPlay: true,
        currentTime: 0,
    });
    return (
        <MusicContext.Provider value={{musicState, dispatch}}>
            <Layout>
                <AppHeader/>
                <Content>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Player/>
                        </Col>
                        <Col span={8}>
                            <div style={{backgroundColor: "#ddd", height: "inherit", padding: 24}}>编辑器</div>
                        </Col>
                        <Col span={8}>
                            <div style={{backgroundColor: "#ddd", padding: 24, height: "inherit"}}> 测试器</div>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </MusicContext.Provider>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));

