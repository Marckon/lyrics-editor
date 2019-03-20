import React from 'react';
import styles from './index.scss';
import {
    Layout,
} from 'antd';

const {Header}=Layout;
const AppHeader=()=>{
    return (
        <Header className={styles["app-header"]}>

        </Header>
    )
};

export default AppHeader;