import React from 'react';
import ReactDOM from 'react-dom';
import {
    Layout,
    Row,
    Col
} from 'antd';
import AppHeader from "./components/AppHeader";
import Player from "./components/Player";

const {Content}=Layout;
const App = () => {
    return (
        <Layout>
            <AppHeader/>
            <Content >
                <Row gutter={16} >
                    <Col span={8}>
                        <Player/>
                    </Col>
                    <Col span={8}  >
                        <div style={{backgroundColor:"#ddd",height:"inherit",padding:24}}>编辑器</div>
                    </Col>
                    <Col span={8} >
                        <div style={{backgroundColor:"#ddd",padding:24,height:"inherit"}}> 测试器</div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));

