// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './App.module.css';

import Sidebar from './layout/Sidebar';
import MainContent from './layout/MainContent';
import TopNav from './layout/TopNav';
import { lprconnectSections, nexocountSections } from './constants/sections.js';

const { Sider, Content, Header } = Layout;

const App = () => {
  const [selectedButton, setSelectedButton] = useState('lprconnect');

  const handleRadioChange = (evt) => {
    setSelectedButton(evt.target.value);
  };

  const sections = selectedButton === 'lprconnect' ? lprconnectSections : nexocountSections;
  const sidebarTitle = selectedButton === 'lprconnect' ? 'LPRConnect' : 'Nexocount';

  return (
    <Router>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <TopNav selectedButton={selectedButton} handleRadioChange={handleRadioChange} />
        </Header>

        <Layout hasSider>
          <Sider width={250} className={styles.sider}>
            <Sidebar sections={sections} title={sidebarTitle} />
          </Sider>

          <Content className={styles.content}>
            <MainContent sections={sections} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
