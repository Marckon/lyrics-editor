import React from 'react';
import ReactDOM from 'react-dom';
import {
    Layout,
    Button
} from 'antd';
import AppHeader from "./components/AppHeader";

const App = () => {
    return (
        <Layout>
            <Layout.Header>
                <AppHeader/>
            </Layout.Header>
            <Layout.Content>
                <Button type={"primary"}>123</Button>
            </Layout.Content>
        </Layout>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));

